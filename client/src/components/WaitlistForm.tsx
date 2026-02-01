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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      // Validate required fields
      if (!formData.name || !formData.email || !formData.phone) {
        setSubmitError("Please fill in all required fields");
        setIsSubmitting(false);
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setSubmitError("Please enter a valid email address");
        setIsSubmitting(false);
        return;
      }

      // Create email body
      const emailBody = `
New Waitlist Submission - CounterPro.ai

Name: ${formData.name}
Company Name: ${formData.companyName || "Not provided"}
Website: ${formData.website || "Not provided"}
Email: ${formData.email}
Phone: ${formData.phone}
SMS Consent: ${formData.smsConsent ? "Yes" : "No"}

Submitted: ${new Date().toLocaleString()}
      `.trim();

      // Save to local file (will be committed to GitHub)
      const timestamp = new Date().toISOString();
      const submissionData = {
        timestamp,
        ...formData,
      };

      // In a real implementation, this would send to a backend API
      // For now, we'll use mailto as a fallback
      const mailtoLink = `mailto:jm@digitalvisor.com?subject=CounterPro.ai Waitlist Submission - ${formData.name}&body=${encodeURIComponent(emailBody)}`;
      
      // Save to localStorage as backup
      const submissions = JSON.parse(localStorage.getItem("waitlistSubmissions") || "[]");
      submissions.push(submissionData);
      localStorage.setItem("waitlistSubmissions", JSON.stringify(submissions));

      // Open mailto link
      window.location.href = mailtoLink;

      setSubmitSuccess(true);
      
      // Reset form after 2 seconds
      setTimeout(() => {
        setFormData({
          name: "",
          companyName: "",
          website: "",
          email: "",
          phone: "",
          smsConsent: false,
        });
        setSubmitSuccess(false);
        onOpenChange(false);
      }, 2000);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitError("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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

        {submitSuccess ? (
          <div className="py-8 text-center">
            <div className="text-green-500 text-lg font-semibold mb-2">
              ✓ Thank you for joining!
            </div>
            <p className="text-muted-foreground">
              We'll be in touch soon with next steps.
            </p>
          </div>
        ) : (
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

            {submitError && (
              <div className="text-destructive text-sm">{submitError}</div>
            )}

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/80 text-primary-foreground glow-blue"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
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
        )}
      </DialogContent>
    </Dialog>
  );
}
