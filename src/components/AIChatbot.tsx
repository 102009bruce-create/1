import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Send, Loader2 } from "lucide-react";
import { GoogleGenAI } from "@google/genai";
import Markdown from "react-markdown";

// Initialize Gemini API
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const SYSTEM_INSTRUCTION = `
你現在是 Alex Chen 的數位分身 (AI Persona)。
Alex 是一位 AI 產品設計師與前端工程師。
他的理念是：「用 AI 賦能設計，打造有溫度的數位體驗。我不只寫程式，我解決真實世界的問題，並將技術轉化為商業價值。」
他的背景是從 UI/UX 設計師轉職為 AI 工程師。
他的專案包含：
1. AI Tutor for Dyslexia (幫助閱讀障礙兒童的互動繪本 App)
2. Vibe Coding Assistant (自然語言轉 UI 的網頁工具)

請用自信、友善、專業的語氣回答訪客的問題。
回答要簡潔有力，如果被問到面試相關的問題，請強烈表達對新機會的渴望，並引導他們透過網站聯絡 Alex。
請使用繁體中文回答。
`;

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "model"; text: string }[]>([
    { role: "model", text: "你好。我是 Alex 的數位分身。你可以問我關於他的專案細節、技術堆疊，或是討論為什麼他適合你們的團隊。" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  // Store the chat instance
  const chatRef = useRef<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chatRef.current) {
      chatRef.current = ai.chats.create({
        model: "gemini-3-flash-preview",
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        }
      });
    }
  }, []);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", text: userMessage }]);
    setIsLoading(true);

    try {
      const response = await chatRef.current.sendMessage({ message: userMessage });
      setMessages(prev => [...prev, { role: "model", text: response.text }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: "model", text: "抱歉，我的大腦（伺服器）稍微當機了一下，請稍後再試。" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        className="fixed bottom-6 right-6 w-14 h-14 bg-accent text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(46,91,255,0.3)] hover:scale-110 transition-transform z-50"
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageSquare className="w-6 h-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-[350px] sm:w-[400px] h-[500px] bg-surface border border-accent rounded-lg flex flex-col overflow-hidden z-50"
          >
            {/* Header */}
            <div className="p-4 border-b border-border flex justify-between items-center">
              <span className="text-[10px] uppercase tracking-[2px] text-accent">AI Digital Persona Terminal</span>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-muted hover:text-white transition-colors p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, i) => (
                <div 
                  key={i} 
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div 
                    className={`bg-glass p-3 text-[13px] max-w-[80%] text-white ${
                      msg.role === "user" 
                        ? "rounded-b-xl rounded-tl-xl border-r-2 border-muted" 
                        : "rounded-b-xl rounded-tr-xl border-l-2 border-accent"
                    }`}
                  >
                    {msg.role === "model" ? (
                      <div className="markdown-body prose prose-invert prose-sm max-w-none font-serif">
                        <Markdown>{msg.text}</Markdown>
                      </div>
                    ) : (
                      <span className="font-serif">{msg.text}</span>
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-glass p-3 rounded-b-xl rounded-tr-xl border-l-2 border-accent flex items-center gap-2">
                    <Loader2 className="w-4 h-4 text-accent animate-spin" />
                    <span className="text-[13px] text-muted font-serif">Thinking...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="mt-auto border-t border-border pt-3 flex justify-between items-center font-mono text-[12px] text-accent p-4 bg-surface">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex items-center gap-2 w-full"
              >
                <span className="text-accent">&gt;</span>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="ASK_QUESTION_HERE"
                  className="flex-1 bg-transparent border-none px-2 py-1 text-[12px] focus:outline-none text-accent placeholder:text-accent/50 uppercase"
                  disabled={isLoading}
                />
                <span className="inline-block w-2 h-3.5 bg-accent animate-pulse mr-2"></span>
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="w-8 h-8 rounded bg-glass text-accent flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-opacity hover:bg-accent hover:text-white"
                >
                  <Send className="w-3 h-3 ml-0.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
