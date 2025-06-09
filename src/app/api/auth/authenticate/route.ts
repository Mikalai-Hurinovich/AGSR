import { NextResponse } from 'next/server';
import { isAuthenticated } from '@/features/auth/lib/authService';

export async function GET() {
  const auth = await isAuthenticated();
  return NextResponse.json({ isAuthenticated: auth });
}
