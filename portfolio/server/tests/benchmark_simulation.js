const { performance } = require('perf_hooks');

// Simulation of the optimization
const runBenchmark = () => {
  console.log('--- Benchmarking Blog Post Fetch Strategy ---');

  // 1. Generate Mock Data (Simulate 1000 posts with large content)
  const generatePosts = (count) => Array.from({ length: count }, (_, i) => ({
    _id: i,
    title: `Post ${i}`,
    slug: `post-${i}`,
    content: 'x'.repeat(10000), // 10KB content per post
    excerpt: 'Short excerpt',
    category: 'Tech',
    date: new Date()
  }));

  const TOTAL_POSTS = 1000;
  const posts = generatePosts(TOTAL_POSTS);

  // Measure Baseline: Fetch All
  console.log(`\n[Baseline] Fetching all ${TOTAL_POSTS} posts (full content)...`);
  const startBase = performance.now();
  const jsonBase = JSON.stringify(posts);
  const sizeBase = Buffer.byteLength(jsonBase);
  const endBase = performance.now();
  console.log(`Time to serialize: ${(endBase - startBase).toFixed(2)}ms`);
  console.log(`Payload size: ${(sizeBase / 1024 / 1024).toFixed(2)} MB`);

  // Measure Optimized: Pagination + Field Selection
  console.log(`\n[Optimized] Fetching page 1 (10 posts, no content)...`);
  const startOpt = performance.now();
  // Simulate DB projection (-content) and limit(10)
  const pagedPosts = posts.slice(0, 10).map(({ content, ...rest }) => rest);
  const response = {
    posts: pagedPosts,
    currentPage: 1,
    totalPages: Math.ceil(TOTAL_POSTS / 10),
    totalPosts: TOTAL_POSTS
  };
  const jsonOpt = JSON.stringify(response);
  const sizeOpt = Buffer.byteLength(jsonOpt);
  const endOpt = performance.now();
  console.log(`Time to serialize: ${(endOpt - startOpt).toFixed(2)}ms`);
  console.log(`Payload size: ${(sizeOpt / 1024).toFixed(2)} KB`);

  console.log(`\n>>> Improvement: Payload size reduced by ${((sizeBase - sizeOpt) / sizeBase * 100).toFixed(4)}%`);
};

runBenchmark();
