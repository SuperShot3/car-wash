import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

// Инициализация Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(req: Request) {
  try {
    // Проверяем API ключ
    if (!process.env.GEMINI_API_KEY) {
      throw new Error('GEMINI_API_KEY is not configured');
    }

    const { message } = await req.json();
    
    // Валидация входных данных
    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Invalid message format' },
        { status: 400 }
      );
    }

    // Проверяем наличие вопроса о ценах
    const priceKeywords = ['price', 'cost', 'how much', 'pricing', 'rates', 'fee'];
    const isPriceQuestion = priceKeywords.some(keyword => 
      message.toLowerCase().includes(keyword)
    );

    if (isPriceQuestion) {
      return NextResponse.json({
        response: "I'll show you our detailed pricing table for all our services.",
        redirect: '/services#pricing'
      });
    }

    // Получаем ответ от Gemini
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    
    const prompt = `You are a helpful assistant for a car wash service called Car Spa. 
    You should be friendly and professional.
    Our services include: Basic Wash ($30-45), Deluxe Wash ($50-75), and Premium Detail ($150-220).
    Working hours: Mon-Fri 9:00 AM - 8:00 PM, Sat-Sun 10:00 AM - 6:00 PM.
    Location: [Your Location]
    Contact: +1 (555) 123-4567, info@carspa.com

    User question: ${message}`;

    const result = await model.generateContent(prompt);
    const response = result.response.text();

    if (!response) {
      throw new Error('Empty response from Gemini');
    }

    return NextResponse.json({ response });
    
  } catch (error) {
    console.error('Chat API error:', error);
    
    // Более информативные сообщения об ошибках
    if (error instanceof Error) {
      if (error.message.includes('API key')) {
        return NextResponse.json(
          { error: 'Service configuration error' },
          { status: 500 }
        );
      }
      if (error.message.includes('rate limit')) {
        return NextResponse.json(
          { error: 'Service is temporarily unavailable. Please try again later.' },
          { status: 429 }
        );
      }
    }

    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
} 