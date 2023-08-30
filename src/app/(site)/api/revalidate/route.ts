import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag, revalidatePath } from 'next/cache';

export async function GET(req: NextRequest) {
  try {
    revalidatePath('/');
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