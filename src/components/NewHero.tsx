import { Button } from "@/components/ui/button";
import { ArrowRight, Camera, Mic, TrendingUp, FileText } from "lucide-react";
import heroImage from "@/assets/hero-snappense.png";
import { useState } from "react";
import DemoModal from "./DemoModal";

const NewHero = () => {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-accent/5 pt-32 pb-20 md:pt-40 md:pb-28">
        {/* Animated background decoration */}
        <div className="absolute inset-0 bg-grid-primary/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Copy */}
            <div className="space-y-8 text-center lg:text-left">
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Log expenses 5× faster.{" "}
                <span className="text-primary">Get reimbursed on the first submission.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Scan receipts or just say it. AI fills the details, flags compliance risks, and exports a signed PDF.
              </p>

              {/* Key Features Bullets */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
                <div className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2">
                  <Camera className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Receipt Scan</span>
                </div>
                <div className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2">
                  <Mic className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Voice Entry</span>
                </div>
                <div className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">AI Compliance Scan</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Button 
                  size="lg" 
                  className="text-lg px-10 py-7 group shadow-lg hover:shadow-xl transition-all"
                  onClick={() => {
                    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Start $1 Trial — 50 AI Scans
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-10 py-7 border-2"
                  onClick={() => setShowDemo(true)}
                >
                  See 90-sec Demo
                </Button>
              </div>

              {/* Trust row */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-accent" />
                  <span>PDF Export</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-accent" />
                  <span>CSV</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-accent" />
                  <span>Google Sheets Sync</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-accent" />
                  <span>Mileage Log</span>
                </div>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="relative lg:ml-auto">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border bg-card/50 backdrop-blur">
                <img 
                  src={heroImage} 
                  alt="Snappense expense tracking dashboard showing AI-powered receipt scanning and compliance checking" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <DemoModal isOpen={showDemo} onClose={() => setShowDemo(false)} />
    </>
  );
};

export default NewHero;
