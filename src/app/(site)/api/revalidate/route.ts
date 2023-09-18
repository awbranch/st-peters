import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';

export async function GET(req: NextRequest) {
  try {
    revalidateTag('lunchMenu');

    return NextResponse.json(
      { message: 'Revalidated Successfully' },
      { status: 200 },
    );
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { message: 'Error Revalidating' },
      { status: 500 },
    );
  }
}
