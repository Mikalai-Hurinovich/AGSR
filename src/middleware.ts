import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import ROUTES from '@/shared/constants/routes';
import { AUTH_COOKIE_NAME } from '@/shared/constants/auth';
import { isPublicRoute } from '@/shared/utils/type-guards/routes';

export function middleware(request: NextRequest) {
  const authCookie = request.cookies.get(AUTH_COOKIE_NAME);
  const isAuthenticated = !!authCookie?.value;
  const { pathname } = request.nextUrl;

  if (isPublicRoute(pathname)) {
    if (isAuthenticated && pathname === ROUTES.LOGIN) {
      return NextResponse.redirect(new URL(ROUTES.TASKS, request.url));
    }
    return NextResponse.next();
  }

  if (!isAuthenticated) {
    return NextResponse.redirect(new URL(ROUTES.HOME, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
