import { NextResponse } from 'next/server';
import { getChatResponse } from '@/utils/gemini';

export async function POST(req: Request) {
  try {
    const { message, history } = await req.json();
    
    // Имитация ответа чата
    const mockResponse = "Thank you for your message! This is a demo response as we're using GitHub Pages which doesn't support API requests. In a production environment, this would connect to Gemini AI.";
    
    return NextResponse.json({ response: mockResponse });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
} 