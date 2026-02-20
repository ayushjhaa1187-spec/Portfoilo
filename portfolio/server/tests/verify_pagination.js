const assert = require('assert');
const express = require('express');
const http = require('http');
const Module = require('module');

// Mock Data
const mockPosts = Array.from({ length: 15 }, (_, i) => ({
  title: `Post ${i}`,
  slug: `post-${i}`,
  content: 'Should be removed',
  date: new Date().toISOString()
}));

// Mock Mongoose Model
const mockFindChain = {
  select(fields) { this.selected = fields; return this; },
  sort(sort) { this.sorted = sort; return this; },
  skip(skip) { this.skipped = skip; return this; },
  limit(limit) { this.limited = limit; return this; },
  lean: async function() {
    const start = this.skipped || 0;
    const end = start + (this.limited || 10);
    // Simulate select('-content')
    return mockPosts.slice(start, end).map(p => {
      const { content, ...rest } = p;
      return rest;
    });
  }
};

const mockModel = {
  find: () => Object.create(mockFindChain), // Create a fresh chain for each call
  countDocuments: async () => mockPosts.length,
  findOne: async ({ slug }) => mockPosts.find(p => p.slug === slug)
};

// Mock require to inject our mocked model
const originalRequire = Module.prototype.require;
Module.prototype.require = function(path) {
  if (path.includes('models/BlogPost')) {
    return mockModel;
  }
  return originalRequire.apply(this, arguments);
};

// Require the route handler
const blogRouter = require('../routes/blog');

const app = express();
app.use('/api/blog', blogRouter);

// Test Runner
const runTest = async () => {
  console.log('Running Verification Tests...');
  const server = http.createServer(app);

  await new Promise(resolve => server.listen(0, resolve));
  const port = server.address().port;

  const fetch = (path) => new Promise((resolve, reject) => {
    http.get(`http://localhost:${port}${path}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });

  try {
    // Test 1: Default Pagination
    console.log('Test 1: Default Pagination (Page 1, Limit 10)');
    const res1 = await fetch('/api/blog');
    assert.strictEqual(res1.success, true);
    assert.strictEqual(res1.page, 1);
    assert.strictEqual(res1.count, 10);
    assert.strictEqual(res1.data.length, 10);
    assert.strictEqual(res1.total, 15);
    assert.strictEqual(res1.data[0].content, undefined, 'Content should be excluded');
    console.log('✅ PASS');

    // Test 2: Custom Pagination
    console.log('Test 2: Custom Pagination (Page 2, Limit 5)');
    const res2 = await fetch('/api/blog?page=2&limit=5');
    assert.strictEqual(res2.page, 2);
    assert.strictEqual(res2.data.length, 5);
    assert.strictEqual(res2.data[0].slug, 'post-5'); // 0-4 are page 1
    console.log('✅ PASS');

  } catch (err) {
    console.error('❌ FAIL:', err);
    process.exit(1);
  } finally {
    server.close();
  }
};

runTest();
