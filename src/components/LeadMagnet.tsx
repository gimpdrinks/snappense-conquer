import { Button } from "@/components/ui/button";
import { Gift, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import EmailCaptureModal from "./EmailCaptureModal";

const benefits = [
  "5 'Purpose' templates for common expenses",
  "Mileage calculator spreadsheet",
  "Receipt-to-report checklist",
  "Manager-proof policy guide",
];

const LeadMagnet = () => {
  const [showEmailModal, setShowEmailModal] = useState(false);

  return (
    <>
      <section className="py-20 md:py-28 bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Gift className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
                  Expense Reimbursement Recovery Kit
                </h2>
                <p className="text-xl text-muted-foreground">
                  Recover missed reimbursements in minutes.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Button 
                size="lg" 
                className="text-lg px-10 py-6 w-full sm:w-auto"
                onClick={() => setShowEmailModal(true)}
              >
                Get the Kit Free
              </Button>
              <p className="text-sm text-muted-foreground">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      <EmailCaptureModal 
        isOpen={showEmailModal} 
        onClose={() => setShowEmailModal(false)} 
      />
    </>
  );
};

export default LeadMagnet;
