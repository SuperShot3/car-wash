'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, PaperAirplaneIcon, ChevronUpIcon, ChevronDownIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

type SuggestionCategory = {
  stage: 'initial' | 'services' | 'vehicle' | 'booking' | 'confirmation';
  suggestions: string[];
};

const suggestionsByStage: Record<'en' | 'ru', SuggestionCategory[]> = {
  en: [
    {
      stage: 'initial',
      suggestions: [
        "Show me your services and prices",
        "What's included in each service?",
        "Book a service now",
        "What are your working hours?",
      ]
    },
    {
      stage: 'services',
      suggestions: [
        "What's included in Basic Wash?",
        "Tell me about Deluxe Wash",
        "Premium Detail features?",
        "Price for motorcycle detailing",
      ]
    },
    {
      stage: 'vehicle',
      suggestions: [
        "Prices for small car",
        "Prices for SUV/Crossover",
        "Prices for van/truck",
        "Motorcycle services",
      ]
    },
    {
      stage: 'booking',
      suggestions: [
        "Book exterior wash",
        "Book full service",
        "Available time slots?",
        "How long does it take?",
      ]
    },
    {
      stage: 'confirmation',
      suggestions: [
        "Confirm booking",
        "Change appointment",
        "Cancel booking",
        "Get directions",
      ]
    },
  ],
  ru: [
    {
      stage: 'initial',
      suggestions: [
        "Покажите ваши услуги и цены",
        "Что включено в каждую услугу?",
        "Записаться на сервис",
        "Какой у вас график работы?",
      ]
    },
    {
      stage: 'services',
      suggestions: [
        "Что входит в базовую мойку?",
        "Расскажите о премиум мойке",
        "Особенности детейлинга?",
        "Цена мойки мотоцикла",
      ]
    },
    {
      stage: 'vehicle',
      suggestions: [
        "Цены для легкового авто",
        "Цены для внедорожника",
        "Цены для микроавтобуса",
        "Услуги для мотоциклов",
      ]
    },
    {
      stage: 'booking',
      suggestions: [
        "Записаться на мойку",
        "Записаться на полный сервис",
        "Доступное время?",
        "Сколько времени занимает?",
      ]
    },
    {
      stage: 'confirmation',
      suggestions: [
        "Подтвердить запись",
        "Изменить время",
        "Отменить запись",
        "Как проехать?",
      ]
    },
  ]
};

export default function ChatBot() {
  const { language, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'assistant', 
      content: language === 'ru' 
        ? 'Здравствуйте! Добро пожаловать в автосервис. Как я могу вам помочь?' 
        : 'Hello! Welcome to Car Service. How can I help you today?' 
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentStage, setCurrentStage] = useState<SuggestionCategory['stage']>('initial');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Определяем текущий этап разговора на основе последних сообщений
  useEffect(() => {
    if (messages.length > 1) {
      const lastBotMessage = messages
        .filter(m => m.role === 'assistant')
        .pop()
        ?.content
        ?.toLowerCase() || '';
      
      if (lastBotMessage.includes('service') || lastBotMessage.includes('offer')) {
        setCurrentStage('services');
      } else if (lastBotMessage.includes('book') || lastBotMessage.includes('appointment')) {
        setCurrentStage('booking');
      } else if (lastBotMessage.includes('price') || lastBotMessage.includes('cost')) {
        setCurrentStage('vehicle');
      } else if (lastBotMessage.includes('confirm') || lastBotMessage.includes('scheduled')) {
        setCurrentStage('confirmation');
      }
    }
  }, [messages]);

  useEffect(() => {
    // Добавляем обработчик для клика по ссылке на цены
    const handlePricingClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.getAttribute('data-action') === 'pricing') {
        e.preventDefault();
        if (window.location.pathname !== '/') {
          window.location.href = '/#pricing';
        } else {
          const pricingSection = document.getElementById('pricing');
          if (pricingSection) {
            pricingSection.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
          }
        }
      }
    };

    document.addEventListener('click', handlePricingClick);
    return () => document.removeEventListener('click', handlePricingClick);
  }, [setIsOpen]);

  const handleBooking = () => {
    const pricingSection = document.getElementById('pricing');
    if (window.location.pathname !== '/contact') {
      window.location.href = '/contact';
    }
    setIsOpen(false);
  };

  const detectLanguage = (text: string): 'en' | 'ru' => {
    // Simple detection: if text contains Cyrillic characters, assume Russian
    return /[а-яА-Я]/.test(text) ? 'ru' : 'en';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = inputMessage.trim();
    const detectedLang = detectLanguage(userMessage);
    
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setInputMessage('');
    setIsLoading(true);

    try {
      // Simulate AI response based on detected language
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      let response = '';
      if (detectedLang === 'ru') {
        if (userMessage.toLowerCase().includes('цен')) {
          response = 'Вы можете посмотреть наши цены в разделе "Цены". Хотите, я покажу вам?';
        } else if (userMessage.toLowerCase().includes('запис')) {
          response = 'Я могу помочь вам записаться на обслуживание. Хотите записаться прямо сейчас?';
        } else {
          response = 'Чем я могу помочь вам? Вы можете спросить о наших услугах, ценах или записаться на обслуживание.';
        }
      } else {
        if (userMessage.toLowerCase().includes('price')) {
          response = 'You can check our prices in the Pricing section. Would you like me to show you?';
        } else if (userMessage.toLowerCase().includes('book')) {
          response = 'I can help you book a service. Would you like to make a booking now?';
        } else {
          response = 'How can I assist you? You can ask about our services, prices, or book an appointment.';
        }
      }

      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: language === 'ru'
          ? 'Извините, произошла ошибка. Пожалуйста, попробуйте еще раз.'
          : 'Sorry, I encountered an error. Please try again.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // В useEffect добавим обработчик для кнопки бронирования
    const handleActionClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.getAttribute('data-action') === 'booking') {
        e.preventDefault();
        handleBooking();
      }
    };

    document.addEventListener('click', handleActionClick);
    return () => document.removeEventListener('click', handleActionClick);
  }, [setIsOpen]);

  // Get current suggestions based on language and stage
  const getCurrentSuggestions = () => {
    return suggestionsByStage[language].find(cat => cat.stage === currentStage)?.suggestions || [];
  };

  // Add this to your JSX where you want to show suggestions
  const renderSuggestions = () => {
    if (!showSuggestions) return null;
    
    const suggestions = getCurrentSuggestions();
    
    return (
      <div className="p-4 border-t">
        <div className="flex flex-wrap gap-2">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => {
                setInputMessage(suggestion);
                handleSubmit(new Event('submit') as any);
              }}
              className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full transition-colors duration-300"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Кнопка открытия чата */}
      {!isOpen && (
        <motion.button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 bg-gold text-white p-4 rounded-full shadow-lg hover:bg-amber-600 transition-colors duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChatBubbleLeftIcon className="h-6 w-6" />
        </motion.button>
      )}

      {/* Окно чата */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat-window"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-4 right-4 w-96 bg-white rounded-lg shadow-2xl z-50 overflow-hidden"
          >
            {/* Заголовок */}
            <div className="p-4 bg-gradient-to-r from-gold to-amber-500 text-white rounded-t-lg flex justify-between items-center">
              <h3 className="font-playfair text-lg">{t('chat.title')}</h3>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1 hover:bg-white/20 rounded-full transition-colors"
                  title={isMinimized ? t('chat.maximize') : t('chat.minimize')}
                >
                  {isMinimized ? (
                    <ChevronUpIcon className="h-5 w-5" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5" />
                  )}
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-white/20 rounded-full transition-colors"
                  title={t('chat.close')}
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Содержимое чата */}
            <AnimatePresence>
              {!isMinimized && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  exit={{ height: 0 }}
                  className="overflow-hidden"
                >
                  {/* Сообщения */}
                  <div className="h-96 overflow-y-auto p-4 space-y-4">
                    {messages.map((message, index) => (
                      <div
                        key={index}
                        className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`max-w-[80%] p-3 rounded-lg ${
                          message.role === 'user' 
                            ? 'bg-gold text-white' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {message.content}
                        </div>
                      </div>
                    ))}
                    {isLoading && (
                      <div className="flex justify-start">
                        <div className="bg-gray-100 text-gray-800 p-3 rounded-lg">
                          {t('chat.loading')}
                        </div>
                      </div>
                    )}
                  </div>

                  {renderSuggestions()}

                  {/* Форма ввода */}
                  <form onSubmit={handleSubmit} className="p-4 border-t">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        placeholder={t('chat.placeholder')}
                        className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                      />
                      <button
                        type="submit"
                        disabled={!inputMessage.trim() || isLoading}
                        className="bg-gold text-white px-6 py-2 rounded-full hover:bg-amber-600 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {t('chat.send')}
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 