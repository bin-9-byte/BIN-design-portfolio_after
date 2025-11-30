import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Sparkles, User, Bot } from 'lucide-react';
import { DURATIONS, EASE_DEFAULT } from '../constants/animations';

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'ai';
    timestamp: Date;
}

const INITIAL_MESSAGE: Message = {
    id: 'init-1',
    text: "Hello. I'm BIN AI. I can help you leave a message for the designer or answer simple questions about his work philosophy. How can I assist you today?",
    sender: 'ai',
    timestamp: new Date(),
};

export const AIChat: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSendMessage = async (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!inputValue.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            text: inputValue,
            sender: 'user',
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInputValue('');
        setIsTyping(true);

        // Simulate AI processing delay
        setTimeout(() => {
            const aiResponse: Message = {
                id: (Date.now() + 1).toString(),
                text: generateResponse(userMessage.text),
                sender: 'ai',
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, aiResponse]);
            setIsTyping(false);
        }, 1500);
    };

    const generateResponse = (input: string): string => {
        const lowerInput = input.toLowerCase();
        if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('hire')) {
            return "I've noted your interest. You can reach the designer directly at roclee24@163.com. Would you like me to save a draft message for him?";
        }
        if (lowerInput.includes('project') || lowerInput.includes('work')) {
            return "The projects focus on the wabi-sabi philosophy—finding beauty in imperfection. Which project caught your eye?";
        }
        return "Thank you for sharing. I've recorded your message. The designer will review it and get back to you if needed. Is there anything else?";
    };

    return (
        <div className="w-full bg-white/50 backdrop-blur-sm border border-stone-200 rounded-2xl overflow-hidden shadow-sm h-[500px] flex flex-col">
            {/* Header */}
            <div className="px-6 py-4 border-b border-stone-100 flex items-center justify-between bg-white/60">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-stone-600">
                        <Sparkles size={16} />
                    </div>
                    <div>
                        <h3 className="font-serif text-stone-800 leading-none">AI Assistant</h3>
                        <span className="text-[10px] uppercase tracking-widest text-stone-400">Online</span>
                    </div>
                </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth">
                {messages.map((msg) => (
                    <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: DURATIONS.fast, ease: EASE_DEFAULT }}
                        className={`flex gap-4 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
                    >
                        <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${msg.sender === 'user' ? 'bg-stone-800 text-white' : 'bg-stone-100 text-stone-600'
                            }`}>
                            {msg.sender === 'user' ? <User size={14} /> : <Bot size={14} />}
                        </div>
                        <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${msg.sender === 'user'
                            ? 'bg-stone-800 text-stone-50 rounded-tr-none'
                            : 'bg-white border border-stone-100 text-stone-600 rounded-tl-none shadow-sm'
                            }`}>
                            {msg.text}
                        </div>
                    </motion.div>
                ))}

                {isTyping && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex gap-4"
                    >
                        <div className="w-8 h-8 rounded-full bg-stone-100 flex-shrink-0 flex items-center justify-center text-stone-600">
                            <Bot size={14} />
                        </div>
                        <div className="bg-white border border-stone-100 px-4 py-3 rounded-2xl rounded-tl-none shadow-sm flex gap-1 items-center h-10">
                            <span className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                            <span className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                            <span className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                        </div>
                    </motion.div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="px-6 py-4 bg-white/60 border-t border-stone-100">
                <form
                    onSubmit={handleSendMessage}
                    className="relative flex items-center gap-2"
                >
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Type a message..."
                        className="w-full bg-stone-100/50 border-none rounded-full py-3 pl-5 pr-12 text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-200 transition-all"
                    />
                    <button
                        type="submit"
                        disabled={!inputValue.trim()}
                        className="absolute right-2 p-2 rounded-full bg-stone-800 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-stone-700 transition-colors"
                    >
                        <Send size={16} />
                    </button>
                </form>
            </div>
        </div>
    );
};
