'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, PaperAirplaneIcon, ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

type Message = {
  role: 'user' | 'bot';
  content: string;
};

type SuggestionCategory = {
  stage: 'initial' | 'services' | 'vehicle' | 'booking' | 'confirmation';
  suggestions: string[];
};

const suggestionsByStage: SuggestionCategory[] = [
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
];

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', content: 'Hello! Welcome to Car Spa. How can I help you today?' }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentStage, setCurrentStage] = useState<SuggestionCategory['stage']>('initial');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Определяем текущий этап разговора на основе последних сообщений
  useEffect(() => {
    if (messages.length > 1) {
      const lastBotMessage = messages.filter(m => m.role === 'bot').pop()?.content.toLowerCase() || '';
      
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = inputMessage.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage,
          history: messages.map(m => ({
            role: m.role,
            content: m.content
          }))
        })
      });

      const data = await response.json();

      if (data.redirect) {
        router.push(data.redirect);
      }

      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: data.response 
      }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Sorry, I encountered an error. Please try again.' 
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

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed ${isOpen ? 'hidden' : 'flex'} bottom-4 right-4 items-center gap-2 bg-gradient-to-r from-gold to-amber-500 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
      >
        <span className="text-sm font-medium">Chat with Us</span>
        <PaperAirplaneIcon className="h-5 w-5" />
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-4 right-4 w-96 bg-white rounded-lg shadow-2xl z-50 overflow-hidden"
          >
            {/* Header - всегда видимый */}
            <div className="p-4 bg-gradient-to-r from-gold to-amber-500 text-white rounded-t-lg flex justify-between items-center">
              <h3 className="font-playfair text-lg">Car Spa Assistant</h3>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1 hover:bg-white/20 rounded-full transition-colors"
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
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Содержимое чата - сворачиваемая часть */}
            <motion.div
              animate={{ 
                height: isMinimized ? 0 : 'auto',
                opacity: isMinimized ? 0 : 1
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              {/* Messages */}
              <div className="h-[400px] overflow-y-auto p-4 space-y-4 bg-gray-50">
                <div className="h-6" />
                
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-2xl ${
                        message.role === 'user'
                          ? 'bg-gradient-to-r from-gold to-amber-500 text-white ml-4'
                          : 'bg-white border border-gray-200 text-gray-800 mr-4'
                      } shadow-md`}
                      dangerouslySetInnerHTML={{ __html: message.content }}
                    />
                  </motion.div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white border border-gray-200 p-3 rounded-2xl shadow-md">
                      <span className="animate-pulse">Typing...</span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Suggested Messages with Toggle */}
              <div className="p-4 border-t border-gray-100 bg-white space-y-4">
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => setShowSuggestions(!showSuggestions)}
                    className="text-sm text-zinc-600 hover:text-gold transition-colors flex items-center gap-2"
                  >
                    {showSuggestions ? (
                      <>
                        <ChevronUpIcon className="h-4 w-4" />
                        Hide suggestions
                      </>
                    ) : (
                      <>
                        <ChevronDownIcon className="h-4 w-4" />
                        Show suggestions
                      </>
                    )}
                  </button>
                </div>

                {showSuggestions && (
                  <div className="flex flex-wrap gap-2">
                    {suggestionsByStage
                      .find(s => s.stage === currentStage)
                      ?.suggestions.map((msg) => (
                        <button
                          key={msg}
                          onClick={() => setInputMessage(msg)}
                          className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1.5 rounded-full transition-colors"
                        >
                          {msg}
                        </button>
                      ))}
                  </div>
                )}

                {/* Input */}
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSubmit(e)}
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent bg-gray-50"
                  />
                  <button
                    onClick={handleSubmit}
                    disabled={isLoading || !inputMessage.trim()}
                    className="bg-gradient-to-r from-gold to-amber-500 text-white p-2 rounded-full hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <PaperAirplaneIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 