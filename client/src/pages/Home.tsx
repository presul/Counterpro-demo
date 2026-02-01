/**
 * Home Page - CounterPro.ai Demo
 * Tech-Forward Glassmorphism with AI Command Center
 * Features: Hero with animated electrons, phone/SMS demo interfaces, capabilities showcase
 */

import { useState } from "react";
import { useAuth } from "@/_core/hooks/useAuth";
import { trackButtonClick, trackDemoInteraction } from "@/lib/tracking";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PhoneDemo from "@/components/PhoneDemo";
import SMSDemo from "@/components/SMSDemo";
import { WaitlistForm } from "@/components/WaitlistForm";
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
  Bot,
} from "lucide-react";

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  const [waitlistOpen, setWaitlistOpen] = useState(false);
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

  const handleChatClick = () => {
    trackButtonClick('AI Chat Icon');
    alert("AI Chat: CounterPro.ai handles phone calls, SMS messages, takes orders, checks inventory in real-time, and intelligently transfers complex issues to your team. Available 24/7 to capture every revenue opportunity!");
  };

  const handleLearnMore = () => {
    trackButtonClick('Learn More');
    window.open("https://calendly.com/joemeyer/counterpro-ai-intro-demo", "_blank");
  };

  const handleJoinWaitlist = () => {
    trackButtonClick('Join the Waitlist');
    setWaitlistOpen(true);
  };

  return (
    <div className="min-h-screen animated-gradient">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Hero Background with Electron Animation */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage: "url(/images/hero-digital-counter.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          {/* Electron particles overlay */}
          <div className="electron-container">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="electron"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${3 + Math.random() * 4}s`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="container relative z-10 py-8 lg:py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              {/* Logo - Raised with enhanced liquid glass effect */}
              <div className="mb-16 inline-flex items-center gap-4 glass-strong rounded-2xl px-6 py-3 backdrop-blur-2xl bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95 border-2 border-cyan-400/80 shadow-[0_0_50px_rgba(6,182,212,0.6),inset_0_0_30px_rgba(6,182,212,0.2)]">
                <img
                  src="/images/counterpro-logo-transparent.png"
                  alt="CounterPro.ai Logo"
                  className="h-16 w-auto"
                />
                <div className="text-4xl font-bold tracking-tight" style={{ fontFamily: '"Orbitron", "Rajdhani", sans-serif' }}>
                  <span className="gradient-text">CounterPro.ai</span>
                </div>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Your AI powered{" "}
                <span className="gradient-text">Client Success Agent</span>
              </h1>

              <p className="text-xl lg:text-2xl text-foreground/90 leading-relaxed">
                Your AI-powered customer service agent for wholesale distribution.
                Handles calls, takes orders, checks inventory, and solves problems
                with human-like intelligence.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/80 text-primary-foreground glow-blue text-lg px-8 py-6"
                  onClick={() => {
                    trackButtonClick('Try Live Demo');
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
                  onClick={handleLearnMore}
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
                  <div className="text-3xl font-bold gradient-text">99.97%</div>
                  <div className="text-sm text-muted-foreground mt-1">Accuracy</div>
                </div>
              </div>
            </div>

            {/* Right Column - Visual with Floating Icons */}
            <div className="relative">
              {/* Floating Phone Icon */}
              <button
                onClick={() => {
                  document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="absolute -top-6 -right-6 glass rounded-2xl p-4 glow-cyan animate-float hover:scale-110 transition-transform cursor-pointer z-20"
              >
                <Phone className="w-8 h-8 text-primary" />
              </button>
              {/* Floating Chat Icon */}
              <button
                onClick={handleChatClick}
                className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 glow-purple animate-float [animation-delay:1s] hover:scale-110 transition-transform cursor-pointer z-20"
              >
                <Bot className="w-8 h-8 text-secondary" />
              </button>
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

      {/* Why CounterPro - Revenue Focus Section */}
      <section className="py-20 lg:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Why <span className="gradient-text">CounterPro</span>?
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Every missed call is revenue walking out the door. CounterPro ensures
              you capture every opportunity and maximize every transaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Revenue Card 1 */}
            <Card className="glass-strong p-8 hover:scale-105 transition-transform duration-300 flex flex-col">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 glow-blue mx-auto">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground text-center">Zero Missed Revenue</h3>
              <p className="text-foreground/70 mb-4 leading-relaxed text-center">
                Never lose a sale to a competitor because you couldn't answer the phone.
                Connor handles unlimited calls simultaneously, 24/7/365.
              </p>
              <div className="glass rounded-lg p-4 mt-auto mx-auto w-full text-center">
                <div className="text-3xl font-bold gradient-text">+34%*</div>
                <div className="text-sm text-muted-foreground mt-1">Average revenue increase</div>
              </div>
            </Card>

            {/* Revenue Card 2 */}
            <Card className="glass-strong p-8 hover:scale-105 transition-transform duration-300 flex flex-col">
              <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center mb-6 glow-cyan mx-auto">
                <Sparkles className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground text-center">Intelligent Upselling</h3>
              <p className="text-foreground/70 mb-4 leading-relaxed text-center">
                Connor analyzes order patterns and suggests complementary products,
                volume discounts, and premium alternatives at the perfect moment.
              </p>
              <div className="glass rounded-lg p-4 mt-auto mx-auto w-full text-center">
                <div className="text-3xl font-bold gradient-text">+$127*</div>
                <div className="text-sm text-muted-foreground mt-1">Average order value lift</div>
              </div>
            </Card>

            {/* Revenue Card 3 */}
            <Card className="glass-strong p-8 hover:scale-105 transition-transform duration-300 flex flex-col">
              <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-6 glow-purple mx-auto">
                <CheckCircle2 className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground text-center">Perfect Order Accuracy</h3>
              <p className="text-foreground/70 mb-4 leading-relaxed text-center">
                Eliminate costly errors, returns, and chargebacks. Connor confirms
                every detail before processing orders.
              </p>
              <div className="glass rounded-lg p-4 mt-auto mx-auto w-full text-center">
                <div className="text-3xl font-bold gradient-text">-89%*</div>
                <div className="text-sm text-muted-foreground mt-1">Order error reduction</div>
              </div>
            </Card>

            {/* Revenue Card 4 */}
            <Card className="glass-strong p-8 hover:scale-105 transition-transform duration-300 flex flex-col">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 glow-blue mx-auto">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground text-center">Instant Response</h3>
              <p className="text-foreground/70 mb-4 leading-relaxed text-center">
                Customers get answers in under 2 seconds. No hold music, no waiting,
                no frustration driving them to competitors.
              </p>
              <div className="glass rounded-lg p-4 mt-auto mx-auto w-full text-center">
                <div className="text-3xl font-bold gradient-text">&lt;2s</div>
                <div className="text-sm text-muted-foreground mt-1">Average response time</div>
              </div>
            </Card>

            {/* Revenue Card 5 */}
            <Card className="glass-strong p-8 hover:scale-105 transition-transform duration-300 flex flex-col">
              <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center mb-6 glow-cyan mx-auto">
                <Zap className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground text-center">Faster Processing</h3>
              <p className="text-foreground/70 mb-4 leading-relaxed text-center">
                Connor processes orders 3x faster than human reps, reducing cart
                abandonment and increasing throughput.
              </p>
              <div className="glass rounded-lg p-4 mt-auto mx-auto w-full text-center">
                <div className="text-3xl font-bold gradient-text">3x</div>
                <div className="text-sm text-muted-foreground mt-1">Processing speed increase</div>
              </div>
            </Card>

            {/* Revenue Card 6 */}
            <Card className="glass-strong p-8 hover:scale-105 transition-transform duration-300 flex flex-col">
              <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-6 glow-purple mx-auto">
                <TrendingUp className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground text-center">Customer Retention</h3>
              <p className="text-foreground/70 mb-4 leading-relaxed text-center">
                Consistent, professional service builds loyalty. Customers stay longer
                and order more frequently.
              </p>
              <div className="glass rounded-lg p-4 mt-auto mx-auto w-full text-center">
                <div className="text-3xl font-bold gradient-text">+42%</div>
                <div className="text-sm text-muted-foreground mt-1">Retention improvement</div>
              </div>
            </Card>
          </div>

          {/* ROI Highlight */}
          <div className="mt-16 text-center">
            <Card className="glass-strong p-12 max-w-4xl mx-auto glow-blue">
              <h3 className="text-3xl font-bold mb-4 gradient-text">
                Average First-Year ROI
              </h3>
              <div className="text-6xl font-bold mb-4 text-foreground">487%</div>
              <p className="text-xl text-foreground/80 mb-6">
                Typical wholesale distributors see significant revenue growth from implementing CounterPro
              </p>
              <p className="text-sm text-muted-foreground italic">
                *Your results may vary
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 lg:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              See Connor in Action
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Experience how Connor handles real customer interactions. Try the
              interactive demos below to see it respond to calls and messages.
            </p>
          </div>

          <Card className="glass-strong p-8 max-w-5xl mx-auto">
            <Tabs defaultValue="phone" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8 glass">
                <TabsTrigger value="phone" className="flex items-center gap-2 data-[state=active]:glass-strong">
                  <Phone className="w-5 h-5" />
                  <span>Phone Demo</span>
                </TabsTrigger>
                <TabsTrigger value="sms" className="flex items-center gap-2 data-[state=active]:glass-strong">
                  <MessageSquare className="w-5 h-5" />
                  <span>SMS Demo</span>
                </TabsTrigger>
              </TabsList>
              <TabsContent value="phone" className="mt-0">
                <PhoneDemo />
              </TabsContent>
              <TabsContent value="sms" className="mt-0">
                <SMSDemo />
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="container">
          <Card className="glass-strong p-12 lg:p-16 text-center glow-blue">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Customer Service?
            </h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto mb-8">
              Join the waitlist and be among the first to experience AI-powered
              customer service that actually works.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/80 text-primary-foreground glow-blue text-lg px-12 py-6"
              onClick={handleJoinWaitlist}
            >
              Join the Waitlist
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <img
                src="/images/counterpro-logo.png"
                alt="CounterPro.ai"
                className="h-8 w-auto"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              © 2026 CounterPro.ai. Transforming wholesale distribution with AI.
            </p>
          </div>
        </div>
      </footer>

      {/* Waitlist Form Modal */}
      <WaitlistForm open={waitlistOpen} onOpenChange={setWaitlistOpen} />
    </div>
  );
}
