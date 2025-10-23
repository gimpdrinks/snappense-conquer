import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-primary to-primary/80 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,black)]" />
      
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center space-y-8">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Start saving money today
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Join 10,000+ businesses who've already taken control of their spending.
            No credit card required.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-lg px-10 py-6 group bg-white text-primary hover:bg-white/90"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-10 py-6 border-white/30 text-white hover:bg-white/10 hover:text-white"
            >
              Schedule Demo
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 pt-6 text-white/80 text-sm">
            <span>✓ 14-day free trial</span>
            <span>✓ No credit card required</span>
            <span>✓ Cancel anytime</span>
            <span>✓ Setup in 5 minutes</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
