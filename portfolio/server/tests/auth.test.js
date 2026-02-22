const express = require('express');
const http = require('http');

// Mock environment variables before importing routes
process.env.ADMIN_API_KEY = 'test_secret_key';

const projectsRouter = require('../routes/projects');

const app = express();
app.use(express.json());
app.use('/api/projects', projectsRouter);

const server = http.createServer(app);
const PORT = 5001;

server.listen(PORT, async () => {
  console.log(`Test server running on port ${PORT}`);

  try {
    // Test 1: No API Key
    console.log('Running Test 1: No API Key');
    const res1 = await fetch(`http://localhost:${PORT}/api/projects`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'Test Project' })
    });

    if (res1.status !== 401) {
      console.error(`Test 1 Failed: Expected 401, got ${res1.status}`);
      process.exit(1);
    }
    const data1 = await res1.json();
    if (data1.msg !== 'No API key, authorization denied') {
        console.error(`Test 1 Failed: Unexpected message: ${data1.msg}`);
        process.exit(1);
    }
    console.log('Test 1 Passed');

    // Test 2: Invalid API Key
    console.log('Running Test 2: Invalid API Key');
    const res2 = await fetch(`http://localhost:${PORT}/api/projects`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'wrong_key'
      },
      body: JSON.stringify({ title: 'Test Project' })
    });

    if (res2.status !== 401) {
      console.error(`Test 2 Failed: Expected 401, got ${res2.status}`);
      process.exit(1);
    }
    const data2 = await res2.json();
    if (data2.msg !== 'Invalid API key') {
        console.error(`Test 2 Failed: Unexpected message: ${data2.msg}`);
        process.exit(1);
    }
    console.log('Test 2 Passed');

    // Test 3: Valid API Key
    console.log('Running Test 3: Valid API Key');
    // We expect this to fail with 500 (or timeout) because DB is not connected,
    // but crucially NOT 401.
    const res3 = await fetch(`http://localhost:${PORT}/api/projects`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'test_secret_key'
      },
      body: JSON.stringify({
        title: 'Test Project',
        slug: 'test-project',
        category: 'Web',
        shortDescription: 'Test',
        fullDescription: 'Test'
      })
    });

    if (res3.status === 401) {
      console.error('Test 3 Failed: Valid key returned 401! Auth logic is broken.');
      process.exit(1);
    }

    // We expect 500 because Mongoose is not connected
    console.log(`Test 3 Passed: Got status ${res3.status} (non-401), meaning Auth passed.`);

    console.log('All security tests passed successfully.');
    server.close();
    process.exit(0);

  } catch (err) {
    console.error('Test execution error:', err);
    server.close();
    process.exit(1);
  }
});
