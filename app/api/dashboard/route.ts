// app/api/dashboard/route.ts
import { NextResponse } from 'next/server'
import data from '@/mocks/dashBoardData.json' 

export async function GET() {
    await new Promise((res) => setTimeout(res, 1500));
    return NextResponse.json(data);
  }