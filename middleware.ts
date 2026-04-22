import { NextRequest, NextResponse } from 'next/server';

// 1. Danh sách bot cần chặn
const BOT_KEYWORDS = [
  'bot','crawler','spider','headless','puppeteer','selenium',
  'curl','wget','python','scrapy','lighthouse',
  'facebookexternalhit','facebot','googlebot','bingbot'
];

const BLOCKED_UA_REGEX = new RegExp(BOT_KEYWORDS.join('|'), 'i');

// 2. Middleware chạy cho mọi URL
export const config = {
  matcher: ['/:path*']
};

export function middleware(req: NextRequest) {
  const ua = req.headers.get('user-agent') || '';

  // CHẶN BOT
  if (!ua || BLOCKED_UA_REGEX.test(ua.toLowerCase())) {
    return new NextResponse('Blocked', { status: 403 });
  }

  // CHO USER VÀO LANDING PAGE
  return NextResponse.rewrite(new URL('/', req.url));
}
