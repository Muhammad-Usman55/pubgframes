import { searchDevices } from '../src/data/devices.js';

console.log('====================================================');
console.log('   PUBGFRAMES RELATIVE & FUZZY SEARCH TEST SUITE    ');
console.log('====================================================');

const testCases = [
  {
    query: 'note 12',
    description: 'Relative model search without brand ("note 12")',
    shouldContain: 'Redmi Note 12'
  },
  {
    query: 'edmi note 12',
    description: 'Typo search with missing letter ("edmi note 12")',
    shouldContain: 'Redmi Note 12'
  },
  {
    query: 'note12',
    description: 'Compact no-space search ("note12")',
    shouldContain: 'Redmi Note 12'
  },
  {
    query: 's24 ultra',
    description: 'Abbreviated model search ("s24 ultra")',
    shouldContain: 'Galaxy S24 Ultra'
  },
  {
    query: 'samung s24',
    description: 'Brand typo + model ("samung s24")',
    shouldContain: 'Galaxy S24'
  },
  {
    query: 'x6 pro',
    description: 'Model code relative search ("x6 pro")',
    shouldContain: 'POCO X6 Pro 5G'
  },
  {
    query: 'pokoe x6',
    description: 'Brand typo ("pokoe x6")',
    shouldContain: 'POCO X6'
  },
  {
    query: 'black shark 5',
    description: 'Full name multi-term ("black shark 5")',
    shouldContain: 'Black Shark 5'
  }
];

let passed = 0;
let failed = 0;

const startTotal = performance.now();

for (const tc of testCases) {
  const start = performance.now();
  const results = searchDevices(tc.query);
  const elapsed = (performance.now() - start).toFixed(2);

  const found = results.some(d => d.model.toLowerCase().includes(tc.shouldContain.toLowerCase()));
  if (found) {
    console.log(`  ✓ PASS: "${tc.query}" [${elapsed}ms] - Found target "${tc.shouldContain}" among ${results.length} matches`);
    passed++;
  } else {
    console.error(`  ✗ FAIL: "${tc.query}" [${elapsed}ms] - Expected to find "${tc.shouldContain}" but got ${results.length} results`);
    console.error('    Top 3 results were:', results.slice(0, 3).map(r => r.model));
    failed++;
  }
}

const totalElapsed = (performance.now() - startTotal).toFixed(2);
console.log('----------------------------------------------------');
console.log(`Tests: ${passed} Passed, ${failed} Failed in ${totalElapsed}ms`);

if (failed > 0) {
  process.exit(1);
} else {
  console.log('🎉 ALL RELATIVE & FUZZY SEARCH TESTS PASSED PERFECTLY!');
}
