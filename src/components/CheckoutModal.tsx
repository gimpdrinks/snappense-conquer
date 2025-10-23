import { X, CreditCard, CheckCircle, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  billingCycle: "monthly" | "yearly";
}

const CheckoutModal = ({ isOpen, onClose, billingCycle }: CheckoutModalProps) => {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for payment processing
    console.log("Payment submitted");
    setSubmitted(true);
    
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  const price = billingCycle === "monthly" ? "$12/month" : "$99/year";

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card rounded-2xl border border-border shadow-2xl max-w-lg w-full">
        <div className="p-6 border-b border-border flex items-center justify-between">
          <h3 className="font-heading text-2xl font-bold text-foreground">
            Start Your $1 Trial
          </h3>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>
        
        <div className="p-8">
          {!submitted ? (
            <>
              <div className="bg-primary/10 rounded-xl p-4 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-foreground">Trial (14 days)</span>
                  <span className="font-bold text-foreground">$1.00</span>
                </div>
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <span>Then {price}</span>
                  <span>Cancel anytime</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Card Number
                  </label>
                  <Input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Expiry
                    </label>
                    <Input
                      type="text"
                      placeholder="MM/YY"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      CVC
                    </label>
                    <Input
                      type="text"
                      placeholder="123"
                      required
                    />
                  </div>
                </div>
                
                <Button type="submit" size="lg" className="w-full text-lg py-6">
                  <CreditCard className="w-5 h-5 mr-2" />
                  Start $1 Trial
                </Button>
                
                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <Lock className="w-3 h-3" />
                  <span>Secure checkout · Cancel anytime</span>
                </div>
              </form>

              <p className="text-xs text-center text-muted-foreground mt-6">
                This is a placeholder checkout form. In production, this would integrate with Stripe or your payment processor.
              </p>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-accent" />
              </div>
              <h4 className="font-heading text-2xl font-bold text-foreground mb-2">
                Welcome to Snappense!
              </h4>
              <p className="text-muted-foreground">
                Check your email for next steps and access to your dashboard.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
