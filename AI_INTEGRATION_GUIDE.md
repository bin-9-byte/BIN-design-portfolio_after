# AI Assistant API Integration Guide

Currently, the AI assistant uses a mock response system (`generateResponse` function) in `components/AIChat.tsx`. To make it "real" by connecting to an LLM (Large Language Model) API like OpenAI (GPT), Anthropic (Claude), or Google (Gemini), follow these steps.

## 1. Backend Setup (Crucial for Security)

**⚠️ NEVER use your API keys directly in the frontend code.**
If you put an API key in `AIChat.tsx`, anyone can view the source code and steal your key.

You need a small backend service (Serverless Function, Next.js API Route, or a separate Node/Python server) to act as a middleman.

### Example: Next.js API Route (if you migrate to Next.js) or a simple Express server

**Request Flow:**
`Frontend (User Message)` -> `Your Backend (Adds API Key)` -> `LLM Provider (OpenAI/Gemini)`

## 2. Modify Frontend (`AIChat.tsx`)

You need to replace the `setTimeout` mock logic with a real `fetch` call to your backend.

### Updated `handleSendMessage` Example

```typescript
const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;

    // 1. Add User Message to UI immediately
    const userMessage: Message = {
        id: Date.now().toString(),
        text: inputValue,
        sender: 'user',
        timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
        // 2. Call your backend API
        const response = await fetch('https://your-backend-api.com/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: userMessage.text }),
        });

        const data = await response.json();

        // 3. Add AI Response to UI
        const aiResponse: Message = {
            id: (Date.now() + 1).toString(),
            text: data.reply, // Assuming backend returns { reply: "..." }
            sender: 'ai',
            timestamp: new Date(),
        };
        setMessages((prev) => [...prev, aiResponse]);
    } catch (error) {
        console.error('Error sending message:', error);
        // Optional: Add an error message to the chat
    } finally {
        setIsTyping(false);
    }
};
```

## 3. Recommended API Providers

- **OpenAI API (GPT-4o/GPT-3.5)**: Standard choice, easy to use.
- **Anthropic API (Claude 3.5 Sonnet)**: Great for natural, human-like conversation.
- **Google Gemini API**: Fast and cost-effective.
- **Vercel AI SDK**: If you use Next.js, this library makes streaming responses (typing effect) very easy.

## 4. System Prompt (The "Personality")

When you send the message to the AI, you should also send a "System Prompt" to tell the AI who it is.

**Example System Prompt:**
> "You are Komorebi AI, a helpful assistant for a design portfolio website. The designer is Rick, who specializes in wabi-sabi aesthetics. Be polite, concise, and use a calm, professional tone. If asked about contact info, provide 'roclee24@163.com'."

This ensures the AI stays in character and answers questions relevant to your portfolio.
