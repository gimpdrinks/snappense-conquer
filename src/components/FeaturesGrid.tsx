import { Camera, Mic, Map, Shield, FileDown, Maximize2 } from "lucide-react";
import { useState } from "react";
import receiptScanImg from "@/assets/feature-receipt-scan.png";
import voiceEntryImg from "@/assets/feature-voice-entry.png";
import mileageImg from "@/assets/feature-mileage.png";
import complianceImg from "@/assets/feature-compliance.png";
import exportsImg from "@/assets/feature-exports.png";
import ScreenshotModal from "./ScreenshotModal";

const features = [
  {
    icon: Camera,
    title: "No More Manual Data Entry",
    description: "Upload a photo. We extract name, amount, date, category, purpose.",
    image: receiptScanImg,
  },
  {
    icon: Mic,
    title: "Log Expenses On The Go",
    description: "Say: 'Parking $5 today, travel.' We do the rest.",
    image: voiceEntryImg,
  },
  {
    icon: Map,
    title: "Capture Every Deductible Mile",
    description: "Enter start/end, distance. We auto-calculate at $0.67/mi.",
    image: mileageImg,
  },
  {
    icon: Shield,
    title: "Avoid Audit Headaches",
    description: "We flag missing 'Purpose' or 'Client' and vague descriptions.",
    image: complianceImg,
  },
  {
    icon: FileDown,
    title: "Share Reports in Seconds",
    description: "PDF (with signature line), CSV, and Google Sheets sync.",
    image: exportsImg,
  },
];

const FeaturesGrid = () => {
  const [selectedImage, setSelectedImage] = useState<{ image: string; title: string } | null>(null);

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
                className="group p-6 rounded-2xl border border-border bg-card hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all flex-shrink-0">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {feature.description}
                </p>
                {/* Feature screenshot - clickable */}
                <div 
                  className="relative rounded-xl overflow-hidden border border-border shadow-sm bg-secondary/20 cursor-pointer group/image hover:border-primary/50 transition-all"
                  onClick={() => setSelectedImage({ image: feature.image, title: feature.title })}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedImage({ image: feature.image, title: feature.title });
                    }
                  }}
                  aria-label={`View larger version of ${feature.title} screenshot`}
                >
                  <img 
                    src={feature.image} 
                    alt={`${feature.title} interface screenshot`}
                    className="w-full h-auto transition-transform group-hover/image:scale-105"
                  />
                  {/* Expand icon overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/40 transition-all flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-primary/0 group-hover/image:bg-primary flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-all transform scale-75 group-hover/image:scale-100">
                      <Maximize2 className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Screenshot Modal */}
      {selectedImage && (
        <ScreenshotModal
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          image={selectedImage.image}
          title={selectedImage.title}
        />
      )}
    </section>
  );
};

export default FeaturesGrid;
