import { NextResponse } from 'next/server';

const NAMESPACE = 'nopci-portfolio';
const KEY = 'visitors';

export async function POST() {
  try {
    const res = await fetch(
      `https://api.counterapi.dev/v1/${NAMESPACE}/${KEY}/up`,
      { next: { revalidate: 0 } },
    );

    if (!res.ok) {
      return NextResponse.json({ count: null }, { status: 200 });
    }

    const data = await res.json();
    return NextResponse.json({ count: data.count ?? null });
  } catch {
    return NextResponse.json({ count: null }, { status: 200 });
  }
}
