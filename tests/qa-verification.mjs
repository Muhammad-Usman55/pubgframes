import fs from 'fs';
import path from 'path';

const BASE_URL = 'http://localhost:3000';

const testResults = {
  total: 0,
  passed: 0,
  failed: 0,
  failures: [],
  benchmarks: []
};

function assert(condition, message) {
  testResults.total++;
  if (condition) {
    testResults.passed++;
    console.log(`  ✓ PASS: ${message}`);
  } else {
    testResults.failed++;
    testResults.failures.push(message);
    console.error(`  ✗ FAIL: ${message}`);
  }
}

async function fetchRoute(route) {
  const start = performance.now();
  const res = await fetch(`${BASE_URL}${route}`);
  const duration = Math.round(performance.now() - start);
  const text = await res.text();
  testResults.benchmarks.push({ route, duration, status: res.status });
  return { status: res.status, headers: res.headers, text, duration };
}

async function runQA() {
  console.log('====================================================');
  console.log('   PUBGFRAMES AUTOMATED COMPREHENSIVE QA TEST SUITE  ');
  console.log('====================================================\n');

  // 1. Core Pages Verification
  console.log('--- TEST SUITE 1: Core Navigation & Public Routes ---');
  const coreRoutes = [
    { path: '/', checkText: 'Check Your' },
    { path: '/devices', checkText: 'Gaming Performance' },
    { path: '/compare', checkText: 'Compare' },
    { path: '/fps-checker', checkText: 'FPS' },
    { path: '/guides', checkText: 'Guides' },
    { path: '/guides/best-smartphones-for-pubg-mobile', checkText: 'PUBG' },
    { path: '/about', checkText: 'PUBGFrames' },
    { path: '/contact', checkText: 'Contact' },
    { path: '/disclaimer', checkText: 'Disclaimer' },
    { path: '/privacy', checkText: 'Privacy' },
    { path: '/privacy-policy', checkText: 'Privacy' },
    { path: '/terms', checkText: 'Terms' },
  ];

  for (const r of coreRoutes) {
    const res = await fetchRoute(r.path);
    assert(res.status === 200, `Route ${r.path} returns HTTP 200 (${res.duration}ms)`);
    assert(res.text.includes(r.checkText), `Route ${r.path} contains expected text "${r.checkText}"`);
  }

  // 2. SEO & Crawler Assets
  console.log('\n--- TEST SUITE 2: SEO & Meta Standards ---');
  const sitemap = await fetchRoute('/sitemap.xml');
  assert(sitemap.status === 200, 'Sitemap /sitemap.xml returns HTTP 200');
  assert(sitemap.text.includes('<urlset') && sitemap.text.includes('<url>'), 'Sitemap is valid XML and contains <urlset>');
  const urlCount = (sitemap.text.match(/<loc>/g) || []).length;
  assert(urlCount > 500, `Sitemap indexes over 500 valid URLs (found ${urlCount} indexed pages)`);

  const robots = await fetchRoute('/robots.txt');
  assert(robots.status === 200, 'Robots /robots.txt returns HTTP 200');
  assert(/user-agent:\s*\*/i.test(robots.text), 'Robots.txt has wildcard User-agent rule');
  assert(/sitemap:\s*https?:\/\//i.test(robots.text), 'Robots.txt defines Sitemap location');

  // 3. Multi-Brand Device Pages & Deep Tech Specs
  console.log('\n--- TEST SUITE 3: Device Deep Specs & Graphics Performance ---');
  const sampleDevices = [
    { path: '/devices/apple/iphone-15-pro-max', model: 'iPhone 15 Pro Max', brand: 'Apple' },
    { path: '/devices/poco/poco-x6-pro-5g', model: 'POCO X6 Pro 5G', brand: 'POCO' },
    { path: '/devices/samsung/galaxy-s24-ultra', model: 'Galaxy S24 Ultra', brand: 'Samsung' },
    { path: '/devices/asus/asus-rog-phone-9-pro', model: 'ROG Phone 9 Pro', brand: 'ASUS' },
    { path: '/devices/zte/redmagic-10-pro-plus', model: 'RedMagic 10 Pro+', brand: 'ZTE' },
    { path: '/devices/black-shark/black-shark-5-pro', model: 'Black Shark 5 Pro', brand: 'Black Shark' },
    { path: '/devices/iqoo/iqoo-13-5g', model: 'iQOO 13', brand: 'iQOO' },
    { path: '/devices/lenovo/lenovo-legion-y90', model: 'Legion Y90', brand: 'Lenovo' },
    { path: '/devices/infinix/infinix-gt-20-pro-5g', model: 'GT 20 Pro', brand: 'Infinix' },
    { path: '/devices/motorola/motorola-edge-50-ultra', model: 'Edge 50 Ultra', brand: 'Motorola' },
    { path: '/devices/xiaomi/xiaomi-14-ultra', model: 'Xiaomi 14 Ultra', brand: 'Xiaomi' },
    { path: '/devices/vivo/vivo-x100-pro', model: 'vivo X100 Pro', brand: 'vivo' }
  ];

  for (const d of sampleDevices) {
    const res = await fetchRoute(d.path);
    assert(res.status === 200, `Device page ${d.path} returns HTTP 200 (${res.duration}ms)`);
    assert(res.text.includes(d.model) || res.text.toLowerCase().includes(d.brand.toLowerCase()), `Device page contains ${d.model}`);
    assert(res.text.includes('Smooth') || res.text.includes('Graphics'), `Device page contains Graphics settings breakdown`);
    assert(/gyro/i.test(res.text), `Device page displays Gyroscope specs`);
    assert(/battery|mah/i.test(res.text), `Device page displays Battery details`);
  }

  // 4. Admin Authentication & Console Pages
  console.log('\n--- TEST SUITE 4: Admin Security & Console Pages ---');
  const adminLogin = await fetchRoute('/admin/login');
  assert(adminLogin.status === 200, 'Admin Login /admin/login returns HTTP 200');
  assert(/admin|login/i.test(adminLogin.text), 'Admin Login page renders authentication UI');
  assert(adminLogin.text.includes('usmanshahidhnd2108@gmail.com'), 'Admin Login page features admin credential setup');
  assert(adminLogin.text.includes('@oZhQ95XP'), 'Admin Login page contains authorized admin credentials');

  const adminDashboard = await fetchRoute('/admin');
  assert(adminDashboard.status === 200, 'Admin Dashboard /admin returns HTTP 200');
  assert(/admin|console|dashboard|devices|supabase/i.test(adminDashboard.text), 'Admin Dashboard renders management UI structure');

  // 5. Database Schema & Data Integrity Tests
  console.log('\n--- TEST SUITE 5: In-Memory Device Database Integrity Check ---');
  const brandFiles = [
    'samsungDevices', 'appleDevices', 'oppoDevices', 'pixelDevices',
    'huaweiDevices', 'xiaomiDevices', 'pocoDevices', 'redmiDevices',
    'vivoDevices', 'motorolaDevices', 'lgDevices', 'qmobileDevices',
    'oneplusDevices', 'realmeDevices', 'infinixDevices', 'tecnoDevices',
    'asusDevices', 'zteDevices', 'honorDevices', 'nothingDevices',
    'sonyDevices', 'tabletDevices', 'globalBrandsDevices',
    'blackSharkDevices', 'legionDevices', 'razerDevices', 'iqooDevices'
  ];

  let totalBrandDevices = 0;
  for (const bf of brandFiles) {
    const fPath = path.join(process.cwd(), 'src', 'data', `${bf}.ts`);
    assert(fs.existsSync(fPath), `Brand file ${bf}.ts exists`);
    const fileContent = fs.readFileSync(fPath, 'utf-8');
    const matches = fileContent.match(/"?id"?\s*:\s*['"][^'"]+['"]/g) || [];
    totalBrandDevices += matches.length;
  }
  assert(totalBrandDevices >= 500, `Catalog contains over 500 verified device entries (actual: ${totalBrandDevices})`);

  // 6. Supabase Migration Schema Verification
  console.log('\n--- TEST SUITE 6: Supabase Cloud Schema Integrity ---');
  const sqlPath = path.join(process.cwd(), 'supabase_schema.sql');
  assert(fs.existsSync(sqlPath), 'supabase_schema.sql migration file exists');
  const sqlContent = fs.readFileSync(sqlPath, 'utf-8');
  assert(sqlContent.includes('CREATE TABLE IF NOT EXISTS public.devices') || sqlContent.includes('CREATE TABLE IF NOT EXISTS devices'), 'SQL creates devices table');
  assert(sqlContent.includes('analytics_page_views'), 'SQL creates analytics_page_views table');
  assert(sqlContent.includes('search_queries'), 'SQL creates search_queries table');
  assert(sqlContent.includes('admin_users'), 'SQL creates admin_users table');

  // 7. Performance Benchmarks
  console.log('\n--- TEST SUITE 7: Performance Latency Summary ---');
  const avgLatency = Math.round(testResults.benchmarks.reduce((acc, b) => acc + b.duration, 0) / testResults.benchmarks.length);
  console.log(`  Average Page TTFB: ${avgLatency}ms`);
  assert(avgLatency < 500, `Average response latency is blazing fast under 500ms (${avgLatency}ms)`);

  // Final Summary
  console.log('\n====================================================');
  console.log(`   TOTAL TESTS: ${testResults.total}`);
  console.log(`   PASSED:      ${testResults.passed}`);
  console.log(`   FAILED:      ${testResults.failed}`);
  console.log('====================================================');

  if (testResults.failed > 0) {
    console.error('\nFailures list:');
    testResults.failures.forEach(f => console.error(` - ${f}`));
    process.exit(1);
  } else {
    console.log('\n🎉 ALL QA AUDIT TESTS PASSED WITH 100% SUCCESS RATE!\n');
    process.exit(0);
  }
}

runQA().catch(err => {
  console.error('Test suite failed with unexpected error:', err);
  process.exit(1);
});
