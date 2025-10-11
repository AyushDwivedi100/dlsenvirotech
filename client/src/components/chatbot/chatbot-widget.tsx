import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, Send, X } from "lucide-react";
import { mockApi } from "@/lib/mockApi";
import dlsLogo from "@assets/dls-envirotech-logo.png";

interface ChatMessage {
  id: string;
  message: string;
  isUser: boolean;
  timestamp: Date;
}

export default function ChatbotWidget() {
  // Ref to auto-scroll the chat area when new messages arrive
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      message: "Hello! I'm here to help you. How can I assist you today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [sessionId] = useState(() => `session_${Date.now()}`);
  const inputRef = useRef<HTMLInputElement>(null);
  const [chatHeight, setChatHeight] = useState("500px");

  useEffect(() => {
    const scroll = scrollRef.current;
    if (scroll) {
      setTimeout(() => {
        scroll.scrollIntoView({ behavior: "smooth", block: "end" });
      }, 500);
    }
  }, [messages, isOpen]);

  useEffect(() => {
    const calculateChatHeight = () => {
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 80; // Default to 80px if header not found
      const buttonSpace = 96; // Space for toggle button (h-14 = 56px) + margins (bottom-6 = 24px) + chat window margin (bottom-24 = 96px)
      const topBarHeight = 40; // Approximate height of top bar
      const availableHeight = window.innerHeight - headerHeight - topBarHeight - buttonSpace;
      const maxHeight = Math.min(availableHeight, 600); // Cap at 600px max
      const minHeight = Math.max(maxHeight, 300); // Ensure minimum 300px
      setChatHeight(`${minHeight}px`);
    };

    calculateChatHeight();
    window.addEventListener('resize', calculateChatHeight);
    
    return () => {
      window.removeEventListener('resize', calculateChatHeight);
    };
  }, []);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      message: inputMessage,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const currentMessage = inputMessage;
    setInputMessage("");

    try {
      const response = await mockApi.sendChatMessage(currentMessage, sessionId);

      // Redirect after displaying message (if redirectUrl exists)
      if (response.redirectUrl) {
        setTimeout(() => {
          window.location.href = response.redirectUrl!;
        }, 1500); // delay to show bot message before redirect
      }

      const botResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        message: response.response,
        isUser: false,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botResponse]);
    } catch (error) {
      const errorResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        message:
          "I'm sorry, I'm having trouble responding right now. Please try again or contact us directly for assistance.",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorResponse]);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Blur overlay excluding top bar */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-40 transition-all"
          style={{ top: '120px' }} // Start below top bar and header
          onClick={() => setIsOpen(false)} // Clicking the blurred background closes the chat
        ></div>
      )}
      {/* Chat Button */}
      <Button
        // Toggle chat window open/close when chat icon is clicked
        onClick={() => {
          setIsOpen((prev) => !prev);
          setTimeout(() => inputRef.current?.focus(), 300);
        }}
        size="lg"
        className="fixed bottom-6 right-6 rounded-full h-14 w-14 shadow-lg z-50"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-2 left-2 sm:right-6 sm:left-auto w-auto sm:w-80 md:w-96 max-w-full shadow-xl z-50 flex flex-col transition-all duration-300 ease-in-out transform scale-95 opacity-0 animate-fade-in opacity-100 scale-100" style={{ height: chatHeight }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-[whitesmoke] rounded-lg">
            <div className="flex items-center gap-2">
              <img src={dlsLogo} alt="DLS Envirotech" className="h-6 w-auto" />
              <CardTitle className="text-sm">DLS Support Chat</CardTitle>
            </div>
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="flex flex-col p-0 flex-grow overflow-hidden">
            <ScrollArea className="flex-grow p-4 overflow-y-auto">
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${
                      msg.isUser ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg text-sm ${
                        msg.isUser
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                      }`}
                    >
                      {msg.message}
                    </div>
                  </div>
                ))}
                <div ref={scrollRef} />
              </div>
            </ScrollArea>
            <div className="p-4 border-t bg-background sticky bottom-0 rounded-b-lg">
              <div className="flex space-x-2">
                <Input
                  ref={inputRef}
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 focus:ring-0 focus:ring-offset-0 focus:outline-none"
                />
                <Button onClick={handleSendMessage} size="sm">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
}
