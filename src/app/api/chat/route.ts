import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

// Инициализация Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(req: Request) {
  try {
    const { message, history } = await req.json();
    
    // Проверяем наличие вопроса о ценах
    const priceKeywords = ['price', 'cost', 'how much', 'pricing', 'rates', 'fee'];
    const isPriceQuestion = priceKeywords.some(keyword => 
      message.toLowerCase().includes(keyword)
    );

    if (isPriceQuestion) {
      return NextResponse.json({
        response: "Let me show you our pricing page for detailed information about our services and rates.",
        redirect: '/pricing'
      });
    }

    // Получаем ответ от Gemini
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    
    // Формируем контекст для чата
    const context = `You are a helpful assistant for a car wash service called Car Spa. 
    You should be friendly and professional. 
    Our services include: Basic Wash ($30-45), Deluxe Wash ($50-75), and Premium Detail ($150-220).
    Working hours: Mon-Fri 9:00 AM - 8:00 PM, Sat-Sun 10:00 AM - 6:00 PM.
    Location: [Your Location]
    Contact: +1 (555) 123-4567, info@carspa.com`;

    const chat = model.startChat({
      history: history,
      generationConfig: {
        maxOutputTokens: 200,
      },
    });

    const result = await chat.sendMessage(context + "\n\nUser: " + message);
    const response = result.response.text();

    return NextResponse.json({ response });
    
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
} 