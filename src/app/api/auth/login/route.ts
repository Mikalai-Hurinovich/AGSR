import { NextResponse } from 'next/server';
import { validateMockCredentials, setAuthCookie } from '@/features/auth/lib/authService';

export async function POST(request: Request) {
  const { email, password } = await request.json();

  if (validateMockCredentials(email, password)) {
    await setAuthCookie();
    return NextResponse.json({ success: true });
  }

  return NextResponse.json({ success: false, error: 'Invalid credentials' }, { status: 401 });
}
