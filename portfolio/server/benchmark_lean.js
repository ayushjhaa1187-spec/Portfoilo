const dotenv = require('dotenv');

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio_benchmark';

async function runBenchmark() {
  let mongoose;
  let BlogPost;

  try {
    mongoose = require('mongoose');
    BlogPost = require('./models/BlogPost');
  } catch (e) {
    console.log('Skipping benchmark: Dependencies (mongoose) not found.');
    return;
  }

  let conn;
  try {
    console.log('Connecting to MongoDB at', MONGO_URI);
    // Set a short timeout for connection
    conn = await mongoose.connect(MONGO_URI, { serverSelectionTimeoutMS: 2000 });
    console.log('Connected to MongoDB');

    // Clean up previous data
    await BlogPost.deleteMany({});

    // Seed data
    const postData = {
      title: 'Benchmark Post',
      slug: 'benchmark-post',
      content: 'This is a test post content for benchmarking.',
      excerpt: 'Test excerpt',
      category: 'Benchmark',
      readTime: '5 min',
      author: 'Tester'
    };
    await BlogPost.create(postData);

    console.log('Seeded test post');

    const iterations = 1000;

    // Warm up
    for(let i=0; i<100; i++) {
        await BlogPost.findOne({ slug: 'benchmark-post' });
    }

    // Benchmark without lean()
    const startNoLean = process.hrtime();
    for (let i = 0; i < iterations; i++) {
      await BlogPost.findOne({ slug: 'benchmark-post' });
    }
    const endNoLean = process.hrtime(startNoLean);
    const timeNoLean = (endNoLean[0] * 1000 + endNoLean[1] / 1e6).toFixed(2);

    // Benchmark with lean()
    const startLean = process.hrtime();
    for (let i = 0; i < iterations; i++) {
      await BlogPost.findOne({ slug: 'benchmark-post' }).lean();
    }
    const endLean = process.hrtime(startLean);
    const timeLean = (endLean[0] * 1000 + endLean[1] / 1e6).toFixed(2);

    console.log(`Time without lean(): ${timeNoLean}ms`);
    console.log(`Time with lean(): ${timeLean}ms`);
    console.log(`Improvement: ${((timeNoLean - timeLean) / timeNoLean * 100).toFixed(2)}%`);

    // Verification
    const leanPost = await BlogPost.findOne({ slug: 'benchmark-post' }).lean();
    console.log('Verification lean() returns object:', leanPost.slug === 'benchmark-post');
    console.log('Verification lean() is plain object:', leanPost.constructor.name === 'Object');

  } catch (err) {
    if (err.name === 'MongooseServerSelectionError') {
      console.log('Could not connect to MongoDB. Benchmark skipped.');
    } else {
      console.error('Benchmark Error:', err);
    }
  } finally {
    if (conn) {
        // Cleanup if connected
        try {
            await BlogPost.deleteMany({});
            await mongoose.disconnect();
        } catch (e) {
            console.error('Error during cleanup:', e);
        }
    }
  }
}

runBenchmark();
