import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, Loader2 } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

interface WaitlistFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function WaitlistForm({ open, onOpenChange }: WaitlistFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    website: "",
    email: "",
    phone: "",
    smsConsent: false,
  });

  const submitMutation = trpc.waitlist.submit.useMutation({
    onSuccess: () => {
      toast.success("Thank you for joining the waitlist!", {
        description: "We'll be in touch soon with next steps.",
      });
      
      // Reset form
      setFormData({
        name: "",
        companyName: "",
        website: "",
        email: "",
        phone: "",
        smsConsent: false,
      });
      
      // Close modal after brief delay
      setTimeout(() => {
        onOpenChange(false);
      }, 1500);
    },
    onError: (error) => {
      toast.error("Submission failed", {
        description: error.message || "Please try again later.",
      });
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Please fill in all required fields");
      return;
    }

    submitMutation.mutate(formData);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] glass-strong border-primary/30">
        <DialogHeader>
          <DialogTitle className="text-2xl gradient-text">
            Join the Waitlist
          </DialogTitle>
          <DialogDescription>
            Be among the first to experience AI-powered customer service that actually works.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">
              Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              placeholder="John Smith"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="companyName">Company Name</Label>
            <Input
              id="companyName"
              placeholder="Acme Distribution Co."
              value={formData.companyName}
              onChange={(e) =>
                setFormData({ ...formData, companyName: e.target.value })
              }
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="website">Website</Label>
            <Input
              id="website"
              type="url"
              placeholder="https://example.com"
              value={formData.website}
              onChange={(e) =>
                setFormData({ ...formData, website: e.target.value })
              }
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">
              Email <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">
              Phone <span className="text-destructive">*</span>
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+1 (555) 123-4567"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              required
            />
          </div>

          <div className="flex items-start space-x-2 pt-2">
            <Checkbox
              id="smsConsent"
              checked={formData.smsConsent}
              onCheckedChange={(checked) =>
                setFormData({ ...formData, smsConsent: checked as boolean })
              }
            />
            <Label
              htmlFor="smsConsent"
              className="text-sm font-normal leading-tight cursor-pointer"
            >
              I consent to receive SMS messages from CounterPro.ai about product updates and demos
            </Label>
          </div>

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/80 text-primary-foreground glow-blue"
            disabled={submitMutation.isPending}
          >
            {submitMutation.isPending ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                Submit
                <ArrowRight className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
