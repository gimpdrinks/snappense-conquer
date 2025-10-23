import { X, Mail, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface EmailCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EmailCaptureModal = ({ isOpen, onClose }: EmailCaptureModalProps) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for email submission logic
    console.log("Email submitted:", email);
    setSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card rounded-2xl border border-border shadow-2xl max-w-lg w-full">
        <div className="p-6 border-b border-border flex items-center justify-between">
          <h3 className="font-heading text-2xl font-bold text-foreground">
            Get Your Free Recovery Kit
          </h3>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>
        
        <div className="p-8">
          {!submitted ? (
            <>
              <div className="mb-6">
                <p className="text-muted-foreground mb-4">
                  Instant access to templates, calculators, and checklists to recover missed reimbursements.
                </p>
                <div className="space-y-2 text-sm">
                  <p className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>5 'Purpose' templates</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>Mileage calculator</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>Receipt checklist</span>
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="text-lg py-6"
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full text-lg py-6">
                  <Mail className="w-5 h-5 mr-2" />
                  Send Me the Kit
                </Button>
                
                <p className="text-xs text-center text-muted-foreground">
                  We respect your privacy. Unsubscribe anytime.
                </p>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-accent" />
              </div>
              <h4 className="font-heading text-2xl font-bold text-foreground mb-2">
                Check your email!
              </h4>
              <p className="text-muted-foreground">
                Your Recovery Kit is on its way to {email}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmailCaptureModal;
