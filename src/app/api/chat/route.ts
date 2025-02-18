import { NextResponse } from 'next/server';
import { getChatResponse } from '@/utils/gemini';

export async function POST(req: Request) {
  try {
    const { message, history } = await req.json();
    const response = await getChatResponse(message, history);
    return NextResponse.json({ response });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
} 