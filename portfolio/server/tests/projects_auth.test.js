const express = require('express');
const http = require('http');
const path = require('path');

// Mock Data
const mockProjectData = {
  title: 'Test Project',
  slug: 'test-project',
  category: 'Web',
  shortDescription: 'Test',
  fullDescription: 'Test',
  techStack: ['Node.js'],
  githubUrl: 'http://github.com',
  liveUrl: 'http://example.com'
};

// Mock Project Model
function MockProject(data) {
    Object.assign(this, data);
}

MockProject.prototype.save = async function() {
    return { _id: 'mock_id', ...this };
};

MockProject.find = async () => [];
MockProject.findOne = async () => null;

// Mock require cache to inject MockProject
// Use require.resolve to get the exact cache key (absolute path with extension)
const projectModelPath = require.resolve('../models/Project');
require.cache[projectModelPath] = {
    id: projectModelPath,
    filename: projectModelPath,
    loaded: true,
    exports: MockProject
};

// Start Server
const app = express();
app.use(express.json());

// Set secret key
process.env.ADMIN_API_KEY = 'secret123';

const projectsRouter = require('../routes/projects');
app.use('/api/projects', projectsRouter);

const server = app.listen(0, () => {
    const port = server.address().port;
    console.log(`Test server running on port ${port}`);

    runTests(port);
});

function runTests(port) {
    let passed = 0;
    let failed = 0;

    // Helper for requests
    const makeRequest = (headers, body, description, expectedStatus) => {
        return new Promise((resolve) => {
            const options = {
                host: 'localhost',
                port: port,
                path: '/api/projects',
                method: 'POST',
                headers: { 'Content-Type': 'application/json', ...headers }
            };

            const req = http.request(options, (res) => {
                let data = '';
                res.on('data', c => data += c);
                res.on('end', () => {
                    if (res.statusCode === expectedStatus) {
                        console.log(`PASS: ${description}`);
                        passed++;
                    } else {
                        console.log(`FAIL: ${description} - Expected ${expectedStatus}, got ${res.statusCode}`);
                        failed++;
                    }
                    resolve();
                });
            });

            req.on('error', (e) => {
                console.log(`FAIL: ${description} - Error: ${e.message}`);
                failed++;
                resolve();
            });

            if (body) {
                req.write(JSON.stringify(body));
            }
            req.end();
        });
    };

    // Run tests sequentially
    (async () => {
        console.log('Running tests...');

        // Test 1: No Header (Should return 401)
        await makeRequest({}, mockProjectData, 'POST /api/projects without header', 401);

        // Test 2: Invalid Header (Should return 401)
        await makeRequest({ 'x-api-key': 'wrong' }, mockProjectData, 'POST /api/projects with invalid key', 401);

        // Test 3: Valid Header (Should return 200)
        await makeRequest({ 'x-api-key': 'secret123' }, mockProjectData, 'POST /api/projects with valid key', 200);

        console.log(`\nTests Completed: ${passed} Passed, ${failed} Failed`);
        server.close();

        if (failed > 0) {
            process.exit(1);
        } else {
            process.exit(0);
        }
    })();
}
