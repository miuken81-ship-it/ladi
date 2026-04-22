import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
    const url = req.nextUrl;

    // tránh lỗi file tĩnh + api
    if (
        url.pathname.startsWith('/_next') ||
        url.pathname.startsWith('/api') ||
        url.pathname.includes('.')
    ) {
        return NextResponse.next();
    }

    // tất cả URL → về trang landing
    return NextResponse.rewrite(new URL('/', req.url));
}

export const config = {
    matcher: '/:path*',
};
