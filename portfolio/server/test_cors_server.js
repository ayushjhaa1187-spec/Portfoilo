const express = require('express');
const cors = require('cors');
const http = require('http');

const app = express();
const PORT = 0; // Random port

// Logic from server.js
const clientUrl = process.env.CLIENT_URL || 'http://localhost:3000';
app.use(cors({ origin: clientUrl }));

app.get('/', (req, res) => {
  res.send('OK');
});

const server = app.listen(PORT, () => {
  const port = server.address().port;
  console.log(`Test server running on port ${port}`);

  // Helper to make request
  const makeRequest = (origin, expectedAllowOrigin) => {
    const options = {
      hostname: 'localhost',
      port: port,
      path: '/',
      method: 'GET',
      headers: origin ? { 'Origin': origin } : {}
    };

    const req = http.request(options, (res) => {
      const allowOrigin = res.headers['access-control-allow-origin'];

      let pass = true;
      if (expectedAllowOrigin) {
        if (allowOrigin !== expectedAllowOrigin) {
          console.error(`FAIL: Origin: ${origin}. Expected Access-Control-Allow-Origin: ${expectedAllowOrigin}, got: ${allowOrigin}`);
          pass = false;
        } else {
             console.log(`PASS: Origin: ${origin}. Got: ${allowOrigin}`);
        }
      } else {
        // If we expect NO header or header not matching origin
        if (allowOrigin && allowOrigin === origin) {
             console.error(`FAIL: Origin: ${origin} should NOT be allowed, but got: ${allowOrigin}`);
             pass = false;
        } else {
             console.log(`PASS: Origin: ${origin}. Access-Control-Allow-Origin: ${allowOrigin || 'none'}`);
        }
      }
    });

    req.on('error', (e) => {
      console.error(`problem with request: ${e.message}`);
    });

    req.end();
  };

  // Test 1: Allowed Origin
  makeRequest('http://localhost:3000', 'http://localhost:3000');

  // Test 2: Disallowed Origin
  makeRequest('http://evil.com', undefined);

  // Test 3: No Origin
  makeRequest(null, undefined);

  // Close server after a timeout
  setTimeout(() => {
    server.close();
    process.exit(0);
  }, 2000);
});
