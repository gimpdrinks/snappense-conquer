import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

const FinalCTA = () => {
  const handleStartTrial = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-primary via-primary/90 to-primary/80 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center space-y-8">
          {/* Mini testimonial */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 max-w-2xl mx-auto">
            <div className="flex gap-1 mb-3 justify-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-white text-white" />
              ))}
            </div>
            <p className="text-lg text-white/95 mb-3">
              "I recovered $847 in missed reimbursements using the Recovery Kit. Then signed up and now I never miss an expense."
            </p>
            <p className="text-sm text-white/80">— Alex Thompson, Sales Engineer</p>
          </div>

          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight">
            Stop losing money on unreported expenses
          </h2>
          
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Try Snappense for $1. Get your first compliant report done this week.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-lg px-10 py-6 group bg-white text-primary hover:bg-white/90 shadow-xl"
              onClick={handleStartTrial}
            >
              Start $1 Trial — 50 AI Credits
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 pt-6 text-white/90 text-sm">
            <span>✓ 14-day trial</span>
            <span>✓ 50 AI credits</span>
            <span>✓ Done-For-You first report</span>
            <span>✓ Price lock guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
