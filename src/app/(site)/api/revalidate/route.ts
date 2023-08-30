import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function GET(req: NextRequest) {
  try {
    revalidatePath('/');

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
