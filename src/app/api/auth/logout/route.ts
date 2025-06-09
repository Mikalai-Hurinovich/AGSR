import { NextResponse } from 'next/server';
import { deleteAuthCookie } from '@/features/auth/lib/authService';

export async function POST() {
  await deleteAuthCookie();
  return NextResponse.json({ success: true });
}
