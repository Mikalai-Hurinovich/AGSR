import { cookies } from 'next/headers';
import { AUTH_COOKIE_NAME } from '@/shared/constants/auth';
import { MOCK_CREDENTIALS } from '@/features/auth/constants/mockCredentials';

const WEEK = 60 * 60 * 24 * 7;

export async function setAuthCookie() {
  const cookieStore = await cookies();
  cookieStore.set(AUTH_COOKIE_NAME, 'authenticated', {
    httpOnly: true,
    maxAge: WEEK,
    path: '/',
    sameSite: 'lax',
  });
}

export function validateMockCredentials(email: string, password: string): boolean {
  return email === MOCK_CREDENTIALS.email && password === MOCK_CREDENTIALS.password;
}

export async function deleteAuthCookie() {
  const cookieStore = await cookies();
  cookieStore.delete(AUTH_COOKIE_NAME);
}

export async function isAuthenticated() {
  const cookieStore = await cookies();
  return cookieStore.has(AUTH_COOKIE_NAME);
}
