/*
 * Home Page - Frank AI Demo
 * Tech-Forward Glassmorphism with AI Command Center
 * Features: Hero with gradient mesh, phone/SMS demo interfaces, capabilities showcase
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PhoneDemo from "@/components/PhoneDemo";
import SMSDemo from "@/components/SMSDemo";
import {
  Phone,
  MessageSquare,
  Zap,
  Shield,
  Clock,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function Home() {
  const capabilities = [
    {
      icon: Phone,
      title: "Voice Calls",
      description: "Natural phone conversations with intelligent order taking and problem solving",
    },
    {
      icon: MessageSquare,
      title: "SMS Messaging",
      description: "Quick text responses with order confirmations and status updates",
    },
    {
      icon: Zap,
      title: "Real-Time Inventory",
      description: "Instant stock checks with alternative solutions for out-of-stock items",
    },
    {
      icon: Shield,
      title: "Smart Escalation",
      description: "Knows when to transfer to human specialists for complex situations",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Never miss an order with round-the-clock AI-powered customer service",
    },
    {
      icon: TrendingUp,
      title: "Business Intelligence",
      description: "Learns from conversations to improve responses and identify trends",
    },
  ];

  const benefits = [
    "Handles routine orders automatically, freeing staff for complex issues",
    "Reduces response time from hours to seconds",
    "Maintains consistent brand voice across all interactions",
    "Scales infinitely without adding headcount",
    "Captures every lead and order opportunity",
    "Provides detailed conversation analytics",
  ];

  return (
    <div className="min-h-screen animated-gradient">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "url(/images/hero-gradient-mesh.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="container relative z-10 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">
                  Powered by GoHighLevel AI
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Meet{" "}
                <span className="gradient-text">Connor</span>
              </h1>

              <p className="text-xl lg:text-2xl text-foreground/80 leading-relaxed">
                Your AI-powered customer service agent for wholesale distribution.
                Handles calls, takes orders, checks inventory, and solves problems
                with human-like intelligence.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/80 text-primary-foreground glow-blue text-lg px-8 py-6"
                  onClick={() => {
                    document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Try Live Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="glass-strong text-lg px-8 py-6"
                  onClick={() => {
                    document.getElementById("capabilities")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Learn More
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">24/7</div>
                  <div className="text-sm text-muted-foreground mt-1">Availability</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">&lt;2s</div>
                  <div className="text-sm text-muted-foreground mt-1">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">100%</div>
                  <div className="text-sm text-muted-foreground mt-1">Accuracy</div>
                </div>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="relative">
              <div className="glass-strong rounded-3xl p-8 glow-blue">
                <img
                  src="/images/ai-agent-visualization.png"
                  alt="AI Agent Visualization"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 glass rounded-2xl p-4 glow-cyan animate-float">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 glow-purple animate-float [animation-delay:1s]">
                <MessageSquare className="w-8 h-8 text-secondary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-20 lg:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Intelligent Capabilities
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Connor combines advanced AI with deep wholesale distribution knowledge
              to deliver exceptional customer experiences across every channel.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <Card
                key={index}
                className="glass p-6 hover:glass-strong transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform glow-blue">
                  <capability.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {capability.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {capability.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 lg:py-32 relative">
        {/* Background accent */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url(/images/warehouse-tech.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />

        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Experience Connor in Action
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Try interactive demos to see how Connor handles real wholesale
              distribution scenarios with intelligence and professionalism.
            </p>
          </div>

          <Tabs defaultValue="phone" className="max-w-4xl mx-auto">
            <TabsList className="glass-strong w-full grid grid-cols-2 p-2 mb-8">
              <TabsTrigger
                value="phone"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-lg py-4"
              >
                <Phone className="w-5 h-5 mr-2" />
                Phone Demo
              </TabsTrigger>
              <TabsTrigger
                value="sms"
                className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground text-lg py-4"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                SMS Demo
              </TabsTrigger>
            </TabsList>

            <TabsContent value="phone" className="mt-0">
              <PhoneDemo />
            </TabsContent>

            <TabsContent value="sms" className="mt-0">
              <SMSDemo />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Transform Your Customer Service
              </h2>
              <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
                Connor doesn't just answer calls - he understands your business,
                solves problems, and delivers experiences that keep customers
                coming back.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-foreground/80 text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <Card className="glass-strong p-8">
                <img
                  src="/images/phone-interface-glow.png"
                  alt="Phone Interface"
                  className="w-full h-auto"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="container">
          <Card className="glass-strong p-12 lg:p-16 text-center glow-blue">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Deploy Connor?
            </h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto mb-8">
              Get started with GoHighLevel AI Agents today and transform your
              wholesale distribution customer service.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/80 text-primary-foreground glow-blue text-lg px-8 py-6"
              >
                Get Started with GHL
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="glass-strong text-lg px-8 py-6"
              >
                Schedule Demo Call
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50">
        <div className="container">
          <div className="text-center text-muted-foreground">
            <p className="text-sm">
              CounterPro.ai - Powered by GoHighLevel AI • Demo for illustration purposes
            </p>
            <p className="text-xs mt-2 opacity-70">
              © 2026 CounterPro.ai. All conversations are simulated for demonstration.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
