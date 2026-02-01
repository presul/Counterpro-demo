/*
 * SMSDemo - Simulated SMS conversation interface with Connor AI
 * Glassmorphism design with cyan accents for messaging
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageSquare, Send } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface Message {
  sender: "connor" | "customer";
  text: string;
  timestamp: Date;
}

const DEMO_SCENARIOS = [
  {
    title: "Quick Inventory Check",
    trigger: "Do you have pallet jacks in stock?",
    responses: [
      { sender: "connor" as const, text: "Hi! Yes, we have pallet jacks in stock. We carry both manual and electric models. What type are you looking for and how many do you need?" },
      { sender: "customer" as const, text: "Manual, need 2" },
      { sender: "connor" as const, text: "Perfect! I have 2 manual pallet jacks (5,500 lb capacity) available. They're $385 each. Would you like me to place the order? I can ship them out today." },
      { sender: "customer" as const, text: "Yes please. Same address as last time" },
      { sender: "connor" as const, text: "✅ Order Confirmed!\n\nOrder #: WD-84721\nItems: 2 manual pallet jacks\nTotal: $855 (includes shipping)\nShip to: 123 Main St, Dallas\n\nYou'll get tracking info within 2 hours. Need anything else?" },
      { sender: "customer" as const, text: "Nope thanks!" },
      { sender: "connor" as const, text: "Anytime! 👍" },
    ],
  },
  {
    title: "Order Status Inquiry",
    trigger: "What's the status of order WD-73924?",
    responses: [
      { sender: "connor" as const, text: "Let me check that for you right away..." },
      { sender: "connor" as const, text: "Order WD-73924 shipped yesterday! 📦\n\nTracking: 1Z999AA10123456784\nCarrier: UPS Ground\nExpected delivery: Thursday by 8pm\n\nYou can track it here: ups.com/track" },
      { sender: "customer" as const, text: "Perfect, thanks!" },
      { sender: "connor" as const, text: "You're welcome! Let me know if you need anything else." },
    ],
  },
  {
    title: "Pricing Question",
    trigger: "What's your best price on industrial cleaning solution? Need 50 drums",
    responses: [
      { sender: "connor" as const, text: "Great question! For 50 drums (5-gallon), I can offer you our volume discount:" },
      { sender: "connor" as const, text: "Regular price: $42/drum\nVolume discount (50+): $38/drum\nTotal: $1,900 + shipping\n\nAll 50 are in stock at our Memphis warehouse. Want me to prepare a quote?" },
      { sender: "customer" as const, text: "Yes, and what's shipping to Chicago?" },
      { sender: "connor" as const, text: "Shipping to Chicago for 50 drums:\n\n• Standard (5-7 days): $185\n• Expedited (2-3 days): $340\n\nTotal with standard: $2,085\n\nShall I send you a formal quote via email?" },
      { sender: "customer" as const, text: "Yes please, send to mike@abcrestaurant.com" },
      { sender: "connor" as const, text: "✅ Quote sent to mike@abcrestaurant.com!\n\nQuote #: Q-2024-1547\nValid for: 14 days\n\nReply here or call us to place the order. Thanks Mike!" },
    ],
  },
];

export default function SMSDemo() {
  const [selectedScenario, setSelectedScenario] = useState<number | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentInput, setCurrentInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [autoPlayIndex, setAutoPlayIndex] = useState(0);
  const [customMessageCount, setCustomMessageCount] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (selectedScenario === null || autoPlayIndex >= DEMO_SCENARIOS[selectedScenario].responses.length) {
      return;
    }

    const nextMessage = DEMO_SCENARIOS[selectedScenario].responses[autoPlayIndex];
    const delay = nextMessage.sender === "connor" ? 1500 : 1000;

    setIsTyping(true);
    const typingTimer = setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { ...nextMessage, timestamp: new Date() },
      ]);
      setAutoPlayIndex((prev) => prev + 1);
    }, delay);

    return () => clearTimeout(typingTimer);
  }, [selectedScenario, autoPlayIndex]);

  const startScenario = (index: number) => {
    setSelectedScenario(index);
    setMessages([
      {
        sender: "customer",
        text: DEMO_SCENARIOS[index].trigger,
        timestamp: new Date(),
      },
    ]);
    setAutoPlayIndex(0);
  };

  const resetDemo = () => {
    setSelectedScenario(null);
    setMessages([]);
    setCurrentInput("");
    setAutoPlayIndex(0);
    setCustomMessageCount(0);
  };

  const sendCustomMessage = () => {
    if (!currentInput.trim()) return;

    const userMessage = currentInput;
    setMessages((prev) => [
      ...prev,
      { sender: "customer", text: userMessage, timestamp: new Date() },
    ]);
    setCurrentInput("");

    // Simulate Connor's response
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      
      let responseText;
      if (customMessageCount === 0) {
        // First custom message - provide a helpful response
        responseText = "Thanks for your message! In the live system, I can check inventory, take orders, provide quotes, and answer questions about products and shipments. For a full demo experience, please schedule a call with our team!";
      } else {
        // Second and subsequent messages - suggest scheduling
        responseText = "I'd love to help you further! To see the full capabilities and discuss your specific needs, let's schedule a quick call. Would you like me to send you a scheduling link?";
      }
      
      setMessages((prev) => [
        ...prev,
        {
          sender: "connor",
          text: responseText,
          timestamp: new Date(),
        },
      ]);
      setCustomMessageCount(prev => prev + 1);
    }, 1500);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {selectedScenario === null ? (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-center mb-6 gradient-text">
            Try SMS Conversations
          </h3>
          {DEMO_SCENARIOS.map((scenario, index) => (
            <Card
              key={index}
              className="glass p-6 hover:glass-strong transition-all duration-300 cursor-pointer group"
              onClick={() => startScenario(index)}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {scenario.title}
                  </h4>
                  <p className="text-sm text-muted-foreground italic">
                    "{scenario.trigger}"
                  </p>
                </div>
                <Button
                  size="lg"
                  className="bg-secondary hover:bg-secondary/80 glow-cyan group-hover:scale-110 transition-transform ml-4"
                >
                  <MessageSquare className="w-5 h-5" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div ref={containerRef}>
        <Card className="glass-strong flex flex-col h-[600px]">
          {/* SMS Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center glow-cyan">
                <MessageSquare className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h4 className="text-base font-semibold text-foreground">Connor AI</h4>
                <p className="text-xs text-muted-foreground">Wholesale Distribution</p>
              </div>
            </div>
            <Button onClick={resetDemo} variant="outline" size="sm" className="glass">
              New Chat
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.sender === "customer" ? "justify-end" : "justify-start"} animate-fade-in-up`}
              >
                <div
                  className={`max-w-[75%] rounded-2xl px-4 py-2 ${
                    message.sender === "connor"
                      ? "glass text-foreground rounded-tl-sm"
                      : "bg-secondary/20 text-foreground border border-secondary/30 rounded-tr-sm"
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-line">{message.text}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start animate-fade-in-up">
                <div className="glass rounded-2xl rounded-tl-sm px-4 py-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-secondary animate-bounce" />
                    <div className="w-2 h-2 rounded-full bg-secondary animate-bounce [animation-delay:0.2s]" />
                    <div className="w-2 h-2 rounded-full bg-secondary animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Input
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendCustomMessage()}
                placeholder="Type a message..."
                className="glass-subtle text-foreground placeholder:text-muted-foreground"
              />
              <Button
                onClick={sendCustomMessage}
                size="icon"
                className="bg-secondary hover:bg-secondary/80 glow-cyan"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
        </div>
      )}
    </div>
  );
}
