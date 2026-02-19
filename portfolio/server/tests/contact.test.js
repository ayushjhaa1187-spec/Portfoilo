const test = require('node:test');
const assert = require('node:assert');
const express = require('express');

// Mock Contact model
class MockContact {
  constructor(data) {
    this.data = data;
  }

  async save() {
    // Simulate save
    if (!this.data.name || !this.data.email || !this.data.message) {
      throw new Error('Validation failed: name: Path `name` is required., email: Path `email` is required., message: Path `message` is required.');
    }
    return { ...this.data, _id: 'mock_id', createdAt: new Date() };
  }
}

// Import the route factory
const contactRouteFactory = require('../routes/contact');

test('Contact Route Test Suite', async (t) => {

  await t.test('POST /api/contact should save contact and return success', async () => {
    // Setup
    const router = contactRouteFactory(MockContact);

    // Find the handle for POST /
    const layer = router.stack.find(layer => layer.route && layer.route.methods.post);
    assert.ok(layer, 'Route handler not found');

    const handler = layer.route.stack[0].handle;

    const req = {
      body: {
        name: 'John Doe',
        email: 'john@example.com',
        subject: 'Test Subject',
        message: 'This is a test message'
      }
    };

    const res = {
      statusCode: 200,
      jsonData: null,
      status(code) {
        this.statusCode = code;
        return this;
      },
      json(data) {
        this.jsonData = data;
        return this;
      },
      send(msg) {
        this.jsonData = msg;
        return this;
      }
    };

    // Execute
    await handler(req, res);

    // Assert
    assert.strictEqual(res.statusCode, 200);
    assert.strictEqual(res.jsonData.msg, 'Message sent successfully');
    assert.strictEqual(res.jsonData.contact.name, 'John Doe');
  });

  await t.test('POST /api/contact should handle error', async () => {
      // Mock Contact that throws error on save (simulated by missing fields in MockContact logic)

      const router = contactRouteFactory(MockContact);
      const layer = router.stack.find(layer => layer.route && layer.route.methods.post);
      const handler = layer.route.stack[0].handle;

      const req = {
        body: {
          // Missing required fields
        }
      };

      const res = {
        statusCode: 200,
        jsonData: null,
        status(code) {
          this.statusCode = code;
          return this;
        },
        json(data) {
          this.jsonData = data;
          return this;
        },
        send(msg) {
          this.jsonData = msg;
          return this;
        }
      };

      // Execute
      await handler(req, res);

      // Assert
      assert.strictEqual(res.statusCode, 500);
      assert.strictEqual(res.jsonData, 'Server Error');
  });

});
