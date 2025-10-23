import { Button } from "@/components/ui/button";
import { Check, Zap, ArrowRight } from "lucide-react";
import { useState } from "react";
import CheckoutModal from "./CheckoutModal";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const [showCheckout, setShowCheckout] = useState(false);

  const benefits = [
    "50 AI credits included in trial",
    "Receipt scanning with AI extraction",
    "Voice-to-expense entry",
    "Mileage tracking at $0.67/mi",
    "AI compliance analyst",
    "PDF export with signature line",
    "CSV and Google Sheets sync",
    "Done-For-You first expense report",
    "14-day money-back guarantee",
  ];

  return (
    <>
      <section id="pricing" className="py-20 md:py-28 bg-gradient-to-br from-primary/10 via-background to-accent/10 scroll-mt-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Start your $1 trial. Ship your first compliant report this week.
            </h2>
            <p className="text-xl text-muted-foreground">
              Join the Founding 20 and lock in the lowest price forever.
            </p>
          </div>

          {/* Billing Toggle */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-secondary rounded-full p-1 border border-border">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  billingCycle === "monthly"
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("yearly")}
                className={`px-6 py-2 rounded-full font-medium transition-all relative ${
                  billingCycle === "yearly"
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Yearly
                <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs px-2 py-0.5 rounded-full">
                  Save $45
                </span>
              </button>
            </div>
          </div>

          {/* Pricing Card */}
          <div className="bg-card rounded-3xl p-8 md:p-12 border-2 border-primary shadow-2xl max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Zap className="w-4 h-4" />
                Founding 20 Offer
              </div>
              
              <div className="mb-4">
                <span className="text-5xl md:text-6xl font-bold text-foreground">$1</span>
                <span className="text-xl text-muted-foreground ml-2">for 14 days</span>
              </div>
              
              <p className="text-muted-foreground mb-2">Then</p>
              
              <div className="text-3xl font-bold text-foreground">
                {billingCycle === "monthly" ? (
                  <>
                    $12<span className="text-xl text-muted-foreground">/month</span>
                  </>
                ) : (
                  <>
                    $99<span className="text-xl text-muted-foreground">/year</span>
                  </>
                )}
              </div>
              
              {billingCycle === "yearly" && (
                <p className="text-sm text-accent mt-2">
                  That's $8.25/month — save $45/year
                </p>
              )}
            </div>

            {/* Benefits */}
            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Button 
              size="lg" 
              className="w-full text-lg py-7 group shadow-lg hover:shadow-xl"
              onClick={() => setShowCheckout(true)}
            >
              Start $1 Trial Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            {/* Guarantee */}
            <div className="mt-6 p-4 bg-accent/10 rounded-xl border border-accent/20">
              <p className="text-sm text-center text-foreground font-medium">
                <span className="font-bold">Guarantee:</span> If you don't submit one compliant expense report in 14 days, month 1 is on us.
              </p>
            </div>

            {/* Slots indicator */}
            <div className="mt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Founding 20 slots</span>
                <span className="text-sm font-semibold text-primary">7 left</span>
              </div>
              <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: "65%" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CheckoutModal 
        isOpen={showCheckout} 
        onClose={() => setShowCheckout(false)}
        billingCycle={billingCycle}
      />
    </>
  );
};

export default Pricing;
