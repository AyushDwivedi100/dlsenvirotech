import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { QUICK_CHAT_MESSAGES } from "@/lib/constants";
import { ChatMessage } from "@/types";

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [sessionId] = useState(() => Math.random().toString(36).substring(7));
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const chatMutation = useMutation({
    mutationFn: async ({ message }: { message: string }) => {
      const response = await apiRequest("POST", "/api/chat", {
        message,
        sessionId,
      });
      return response.json();
    },
    onSuccess: (data, variables) => {
      const userMessage: ChatMessage = {
        id: Math.random().toString(),
        message: variables.message,
        response: "",
        isUser: true,
        timestamp: new Date(),
      };
      
      const botMessage: ChatMessage = {
        id: Math.random().toString(),
        message: "",
        response: data.response,
        isUser: false,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, userMessage, botMessage]);
    },
  });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: ChatMessage = {
        id: "welcome",
        message: "",
        response: "👋 Hello! I'm here to help with your water treatment questions. You can ask me about:\n\n• STP & ETP systems\n• Capacity calculations\n• Technology selection\n• Pricing estimates",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, messages.length]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    chatMutation.mutate({ message: inputValue });
    setInputValue("");
  };

  const handleQuickMessage = (message: string) => {
    chatMutation.mutate({ message });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="h-14 w-14 rounded-full shadow-lg"
        size="icon"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {/* Chat Panel */}
      {isOpen && (
        <Card className="absolute bottom-16 right-0 w-80 sm:w-96 h-[500px] flex flex-col shadow-2xl">
          {/* Header */}
          <div className="bg-primary text-white p-4 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <Bot className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold">Technical Support</h4>
                  <p className="text-xs opacity-90">Online now</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white hover:bg-opacity-20"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-xs rounded-lg p-3 ${
                    message.isUser
                      ? "bg-primary text-white"
                      : "bg-industrial-100 text-industrial-800"
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {!message.isUser && (
                      <Bot className="h-4 w-4 mt-0.5 text-primary" />
                    )}
                    {message.isUser && (
                      <User className="h-4 w-4 mt-0.5" />
                    )}
                    <p className="text-sm whitespace-pre-line">
                      {message.isUser ? message.message : message.response}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            {chatMutation.isPending && (
              <div className="flex justify-start">
                <div className="bg-industrial-100 text-industrial-800 max-w-xs rounded-lg p-3">
                  <div className="flex items-center space-x-2">
                    <Bot className="h-4 w-4 text-primary" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-industrial-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-industrial-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                      <div className="w-2 h-2 bg-industrial-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-industrial-200">
            <div className="flex gap-2 mb-3">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your question..."
                className="text-sm"
                disabled={chatMutation.isPending}
              />
              <Button
                onClick={handleSendMessage}
                size="icon"
                disabled={!inputValue.trim() || chatMutation.isPending}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            
            {/* Quick Message Buttons */}
            <div className="flex gap-2 flex-wrap">
              {QUICK_CHAT_MESSAGES.slice(0, 3).map((message) => (
                <Button
                  key={message}
                  variant="outline"
                  size="sm"
                  onClick={() => handleQuickMessage(message)}
                  className="text-xs px-3 py-1 h-auto"
                  disabled={chatMutation.isPending}
                >
                  {message.split(" ").slice(0, 2).join(" ")}
                </Button>
              ))}
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default ChatbotWidget;
