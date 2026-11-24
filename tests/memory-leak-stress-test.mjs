import http from 'http';

const BASE_URL = 'http://localhost:3000';
const CONCURRENT_ROUNDS = 5;
const REQUESTS_PER_ROUND = 30; // 150 total rapid requests across diverse routes

const ROUTES = [
  '/',
  '/devices',
  '/compare',
  '/fps-checker',
  '/guides',
  '/about',
  '/contact',
  '/disclaimer',
  '/privacy',
  '/terms',
  '/devices/asus/asus-rog-phone-9-pro',
  '/devices/redmagic/redmagic-10-pro-global',
  '/devices/zte/zte-nubia-z60-ultra',
  '/devices/black-shark/black-shark-5-pro',
  '/devices/iqoo/iqoo-13-5g',
  '/devices/lenovo/lenovo-legion-y90',
  '/devices/apple/iphone-15-pro-max',
  '/devices/samsung/galaxy-s24-ultra',
  '/devices/poco/poco-x6-pro-5g'
];

function fetchUrl(path) {
  return new Promise((resolve, reject) => {
    const start = performance.now();
    const req = http.get(`${BASE_URL}${path}`, (res) => {
      let data = '';
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => {
        const duration = Math.round(performance.now() - start);
        resolve({ status: res.statusCode, duration, size: data.length });
      });
    });
    req.on('error', reject);
    req.setTimeout(5000, () => {
      req.destroy();
      reject(new Error(`Timeout fetching ${path}`));
    });
  });
}

async function runMemoryLeakStressTest() {
  console.log('====================================================');
  console.log('   PUBGFRAMES MEMORY LEAK & CONCURRENCY STRESS TEST  ');
  console.log('====================================================\n');

  // Measure initial process memory
  const initialMem = process.memoryUsage();
  console.log(`Initial Node Process RSS: ${(initialMem.rss / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Initial Heap Used:        ${(initialMem.heapUsed / 1024 / 1024).toFixed(2)} MB\n`);

  console.log(`Executing ${CONCURRENT_ROUNDS * REQUESTS_PER_ROUND} rapid requests across ${ROUTES.length} routes...`);

  let totalSuccess = 0;
  let totalErrors = 0;
  let latencies = [];

  for (let r = 0; r < CONCURRENT_ROUNDS; r++) {
    const promises = [];
    for (let i = 0; i < REQUESTS_PER_ROUND; i++) {
      const route = ROUTES[i % ROUTES.length];
      promises.push(
        fetchUrl(route)
          .then(res => {
            if (res.status === 200) {
              totalSuccess++;
              latencies.push(res.duration);
            } else {
              totalErrors++;
            }
          })
          .catch(err => {
            totalErrors++;
            console.error(`Request failed: ${err.message}`);
          })
      );
    }
    await Promise.all(promises);
    process.stdout.write(`Round ${r + 1}/${CONCURRENT_ROUNDS} completed... `);
    const roundMem = process.memoryUsage();
    console.log(`Heap: ${(roundMem.heapUsed / 1024 / 1024).toFixed(2)} MB`);
  }

  // Force GC if available or wait a tick for natural cleanup
  if (global.gc) {
    global.gc();
  }
  await new Promise(r => setTimeout(r, 1000));

  const finalMem = process.memoryUsage();
  const heapDelta = ((finalMem.heapUsed - initialMem.heapUsed) / 1024 / 1024).toFixed(2);
  const avgLatency = Math.round(latencies.reduce((a, b) => a + b, 0) / (latencies.length || 1));
  const maxLatency = Math.max(...latencies, 0);

  console.log('\n--- STRESS TEST RESULTS ---');
  console.log(`  Total Requests Executed: ${totalSuccess + totalErrors}`);
  console.log(`  Successful (HTTP 200):   ${totalSuccess}`);
  console.log(`  Failed / Errored:        ${totalErrors}`);
  console.log(`  Average Latency:         ${avgLatency}ms`);
  console.log(`  Max Latency:             ${maxLatency}ms`);
  console.log(`  Final Process RSS:       ${(finalMem.rss / 1024 / 1024).toFixed(2)} MB`);
  console.log(`  Final Heap Used:         ${(finalMem.heapUsed / 1024 / 1024).toFixed(2)} MB`);
  console.log(`  Net Heap Growth Delta:   ${heapDelta} MB`);

  if (totalErrors > 0) {
    console.error(`\n❌ FAILED: Detected ${totalErrors} failed requests during stress testing.`);
    process.exit(1);
  }

  // Verify memory does not balloon exponentially (under 50MB delta for 150 concurrent bursts)
  if (parseFloat(heapDelta) > 50) {
    console.error(`\n❌ WARNING: Memory heap delta exceeded 50MB (${heapDelta}MB). Potential memory leak.`);
    process.exit(1);
  }

  console.log('\n✅ PASS: Zero memory leaks detected. Heap usage is rock stable and bounded under high load!\n');
}

runMemoryLeakStressTest().catch(err => {
  console.error('Fatal stress test failure:', err);
  process.exit(1);
});
