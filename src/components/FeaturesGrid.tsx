import { Camera, Mic, Map, Shield, FileDown } from "lucide-react";
import receiptScanImg from "@/assets/feature-receipt-scan.png";
import voiceEntryImg from "@/assets/feature-voice-entry.png";
import mileageImg from "@/assets/feature-mileage.png";
import complianceImg from "@/assets/feature-compliance.png";
import exportsImg from "@/assets/feature-exports.png";

const features = [
  {
    icon: Camera,
    title: "Scan a Receipt (AI)",
    description: "Upload a photo. We extract name, amount, date, category, purpose.",
    image: receiptScanImg,
  },
  {
    icon: Mic,
    title: "Use Your Voice (AI)",
    description: "Say: 'Parking $5 today, travel.' We do the rest.",
    image: voiceEntryImg,
  },
  {
    icon: Map,
    title: "Mileage Log",
    description: "Enter start/end, distance. We auto-calculate at $0.67/mi.",
    image: mileageImg,
  },
  {
    icon: Shield,
    title: "AI Compliance Analyst",
    description: "We flag missing 'Purpose' or 'Client' and vague descriptions.",
    image: complianceImg,
  },
  {
    icon: FileDown,
    title: "Exports + Sync",
    description: "PDF (with signature line), CSV, and Google Sheets sync.",
    image: exportsImg,
  },
];

const FeaturesGrid = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-background scroll-mt-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Everything you need. Nothing you don't.
          </h2>
          <p className="text-xl text-muted-foreground">
            Five core features that save you hours every week.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group p-8 rounded-2xl border border-border bg-card hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {feature.description}
                </p>
                {/* Feature screenshot */}
                <div className="rounded-xl overflow-hidden border border-border shadow-sm bg-secondary/20">
                  <img 
                    src={feature.image} 
                    alt={`${feature.title} interface screenshot`}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
