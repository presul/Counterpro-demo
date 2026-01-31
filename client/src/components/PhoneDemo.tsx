/*
 * PhoneDemo - Simulated phone call interface with Frank AI
 * Glassmorphism design with electric blue accents
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, PhoneOff, Volume2 } from "lucide-react";
import { useState, useEffect } from "react";

interface Message {
  speaker: "frank" | "customer";
  text: string;
  timestamp: Date;
}

const DEMO_CONVERSATIONS = [
  {
    title: "Successful Order - All In Stock",
    messages: [
      { speaker: "frank" as const, text: "Thank you for calling! This is Frank. How can I help you today?" },
      { speaker: "customer" as const, text: "Hi Frank, I need to place an order for 10 cases of paper towels and 5 boxes of trash bags." },
      { speaker: "frank" as const, text: "Perfect! Let me check that for you... Good news - I have both items in stock and ready to ship today. Can I confirm your delivery address?" },
      { speaker: "customer" as const, text: "Yes, 123 Main Street, Dallas, Texas." },
      { speaker: "frank" as const, text: "Excellent. Your total comes to $487.50 including shipping. I can have this shipped out today for delivery by Thursday. Would you like me to text you an order confirmation?" },
      { speaker: "customer" as const, text: "Yes, please!" },
      { speaker: "frank" as const, text: "Perfect! Your order number is WD-73924. I'm sending the confirmation to your phone now. Is there anything else I can help you with today?" },
    ],
  },
  {
    title: "Limited Availability - Memphis Warehouse",
    messages: [
      { speaker: "frank" as const, text: "Thank you for calling! This is Frank. How can I help you today?" },
      { speaker: "customer" as const, text: "Do you have Industrial Cleaning Solution in stock? I need 20 drums." },
      { speaker: "frank" as const, text: "Let me check that for you right away... I see that the 5-gallon drums are currently out of stock at our main warehouse, but I do have them available at our Memphis facility. I can ship those out within 24 hours." },
      { speaker: "frank" as const, text: "Would you prefer expedited shipping for $45 to get them faster, or standard 3-day shipping at our regular rate of $85?" },
      { speaker: "customer" as const, text: "Let's do standard shipping." },
      { speaker: "frank" as const, text: "Perfect choice! I'll get that order processed from Memphis right away. Your order number is WD-84512, and you'll receive them by Friday. Sending confirmation now!" },
    ],
  },
  {
    title: "Out of Stock - Offering Solutions",
    messages: [
      { speaker: "frank" as const, text: "Thank you for calling! This is Frank. How can I help you today?" },
      { speaker: "customer" as const, text: "I need 50 Heavy-Duty Floor Mats." },
      { speaker: "frank" as const, text: "Let me check availability... I'm showing that our Heavy-Duty Floor Mats are temporarily out of stock, but here's the good news - we have a shipment arriving in 2 days." },
      { speaker: "frank" as const, text: "I can place your order on backorder with a guaranteed ship date, or I can offer you our Premium Floor Mat model which is in stock and actually has better durability ratings. Which would you prefer?" },
      { speaker: "customer" as const, text: "What's the price difference?" },
      { speaker: "frank" as const, text: "The Premium model is about $3 more per mat with a 5-year warranty instead of 3-year. For 50 mats, that's a $150 difference but much better long-term value." },
      { speaker: "customer" as const, text: "Hmm, let me think about it. Can I get a callback?" },
      { speaker: "frank" as const, text: "Absolutely! I can have one of our product specialists give you a call to go over the detailed comparison. Let me transfer you to Sarah in our product team right now..." },
    ],
  },
];

export default function PhoneDemo() {
  const [isCallActive, setIsCallActive] = useState(false);
  const [currentConversation, setCurrentConversation] = useState(0);
  const [displayedMessages, setDisplayedMessages] = useState<Message[]>([]);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    if (!isCallActive) {
      setDisplayedMessages([]);
      setMessageIndex(0);
      return;
    }

    if (messageIndex >= DEMO_CONVERSATIONS[currentConversation].messages.length) {
      return;
    }

    const timer = setTimeout(() => {
      const nextMessage = DEMO_CONVERSATIONS[currentConversation].messages[messageIndex];
      setDisplayedMessages((prev) => [
        ...prev,
        { ...nextMessage, timestamp: new Date() },
      ]);
      setMessageIndex((prev) => prev + 1);
    }, 2000);

    return () => clearTimeout(timer);
  }, [isCallActive, messageIndex, currentConversation]);

  const startCall = (conversationIndex: number) => {
    setCurrentConversation(conversationIndex);
    setIsCallActive(true);
    setDisplayedMessages([]);
    setMessageIndex(0);
  };

  const endCall = () => {
    setIsCallActive(false);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {!isCallActive ? (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-center mb-6 gradient-text">
            Try a Demo Call
          </h3>
          {DEMO_CONVERSATIONS.map((conv, index) => (
            <Card
              key={index}
              className="glass p-6 hover:glass-strong transition-all duration-300 cursor-pointer group"
              onClick={() => startCall(index)}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-1">
                    {conv.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {conv.messages.length} messages • ~{conv.messages.length * 2}s
                  </p>
                </div>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/80 glow-blue group-hover:scale-110 transition-transform"
                >
                  <Phone className="w-5 h-5" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="glass-strong p-6">
          {/* Call Header */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center glow-blue">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground">Frank AI</h4>
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <Volume2 className="w-4 h-4 animate-pulse" />
                  Call in progress
                </p>
              </div>
            </div>
            <Button
              onClick={endCall}
              size="lg"
              variant="destructive"
              className="glow-purple"
            >
              <PhoneOff className="w-5 h-5" />
            </Button>
          </div>

          {/* Conversation */}
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {displayedMessages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.speaker === "customer" ? "justify-end" : "justify-start"} animate-fade-in-up`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.speaker === "frank"
                      ? "glass-strong text-foreground"
                      : "bg-primary/20 text-foreground border border-primary/30"
                  }`}
                >
                  <p className="text-sm font-medium mb-1 opacity-70">
                    {message.speaker === "frank" ? "Frank" : "You"}
                  </p>
                  <p className="text-base leading-relaxed">{message.text}</p>
                </div>
              </div>
            ))}
            {messageIndex < DEMO_CONVERSATIONS[currentConversation].messages.length && (
              <div className="flex justify-start">
                <div className="glass-strong rounded-2xl px-4 py-3">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary animate-bounce" />
                    <div className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:0.2s]" />
                    <div className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </Card>
      )}
    </div>
  );
}
