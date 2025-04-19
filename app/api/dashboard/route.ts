// app/api/dashboard/route.ts
import { NextResponse } from 'next/server'
import data from '@/mocks/dashBoardData.json' 

export async function GET() {
    return NextResponse.json(data);
  }