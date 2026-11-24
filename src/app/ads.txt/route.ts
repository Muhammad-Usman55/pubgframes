import { getAdSenseClientId } from '@/lib/siteConfig';

export async function GET() {
  const clientId = getAdSenseClientId();
  if (!clientId) {
    return new Response('AdSense publisher ID not configured yet.', {
      status: 404,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' }
    });
  }

  const publisherId = clientId.replace(/^ca-/, '');
  const line = `google.com, ${publisherId}, DIRECT, f08c47fec0942fa0\n`;

  return new Response(line, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}
