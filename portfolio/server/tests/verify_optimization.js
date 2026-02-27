const assert = require('assert');
// We don't actually need real mongoose since we are mocking it,
// but the route files require it. So we need to mock it in the require cache.

const mockFind = {
    select: function(field) {
        this.selectedField = field;
        return this;
    },
    lean: function() {
        this.isLean = true;
        return Promise.resolve([]);
    },
    selectedField: null,
    isLean: false
};

const mockModel = {
    find: function() { return mockFind; },
    findOne: function() { return Promise.resolve(null); }, // for other routes
    schema: {},
    model: function() { return mockModel; } // for exports
};

// Mock Mongoose module itself because routes/models require it
const mockMongoose = {
    Schema: function() {},
    model: function() { return mockModel; },
    connect: function() {}
};


// Helper to reset mock state
const resetMock = () => {
    mockFind.selectedField = null;
    mockFind.isLean = false;
};

// Setup require cache mocks
const setupMocks = () => {
    // Mock 'mongoose' module
    require.cache[require.resolve('mongoose')] = {
        exports: mockMongoose
    };

    // Mock Project model
    // Note: The route requires '../models/Project', which in turn requires 'mongoose'
    // Since we mocked mongoose, requiring the model file should be fine,
    // but the model file exports the result of mongoose.model().
    // So if we control mongoose.model(), we control what get exported.
};

const testProjects = async () => {
    resetMock();
    setupMocks();

    // Clear route cache to ensure fresh require
    delete require.cache[require.resolve('../routes/projects')];
    const router = require('../routes/projects');

    // Extract the handler for GET /
    // Express router structure: router.stack -> layer -> route -> stack -> layer -> handle
    const layer = router.stack.find(l => l.route && l.route.path === '/' && l.route.methods.get);
    if (!layer) throw new Error('GET / route not found in projects router');

    const handler = layer.route.stack[0].handle;

    // Mock req/res
    const req = {};
    const res = {
        json: () => {}
    };

    await handler(req, res);

    assert.strictEqual(mockFind.selectedField, '-fullDescription', 'Project query should exclude fullDescription');
    assert.strictEqual(mockFind.isLean, true, 'Project query should use .lean()');
    console.log('✅ Projects optimization verified');
};

const testBlog = async () => {
    resetMock();
    setupMocks();

    delete require.cache[require.resolve('../routes/blog')];
    const router = require('../routes/blog');

    const layer = router.stack.find(l => l.route && l.route.path === '/' && l.route.methods.get);
    if (!layer) throw new Error('GET / route not found in blog router');

    const handler = layer.route.stack[0].handle;

    const req = {};
    const res = {
        json: () => {}
    };

    await handler(req, res);

    assert.strictEqual(mockFind.selectedField, '-content', 'Blog query should exclude content');
    assert.strictEqual(mockFind.isLean, true, 'Blog query should use .lean()');
    console.log('✅ Blog optimization verified');
};

(async () => {
    try {
        await testProjects();
        await testBlog();
    } catch (error) {
        console.error('❌ Verification failed:', error);
        process.exit(1);
    }
})();
