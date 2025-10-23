import { Check, X } from "lucide-react";

const comparisons = [
  { feature: "Time per report", manual: "45-60 min", snappense: "<5 min" },
  { feature: "Error rate", manual: "High", snappense: "Near zero" },
  { feature: "Approval rate", manual: "60-70%", snappense: "95%+" },
  { feature: "Export formats", manual: "Excel only", snappense: "PDF, CSV, Sheets" },
  { feature: "Mileage tracking", manual: "Manual calc", snappense: "Auto $0.67/mi" },
  { feature: "Compliance flags", manual: "None", snappense: "AI-powered" },
  { feature: "Monthly cost", manual: "$0 (time cost high)", snappense: "$12" },
];

const ComparisonTable = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Manual vs. Snappense
          </h2>
          <p className="text-xl text-muted-foreground">
            See why thousands switched to automated expense tracking.
          </p>
        </div>

        {/* Mobile: Stacked Cards */}
        <div className="block md:hidden space-y-4">
          {comparisons.map((row, index) => (
            <div 
              key={index} 
              className="bg-card rounded-xl border border-border shadow-md p-4"
            >
              <h3 className="font-semibold text-foreground text-base mb-3">
                {row.feature}
              </h3>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <X className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">Manual</p>
                    <p className="text-sm text-muted-foreground">{row.manual}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 bg-primary/5 p-2 rounded-lg">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-primary font-medium">Snappense</p>
                    <p className="text-sm font-semibold text-foreground break-words">{row.snappense}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Table Layout */}
        <div className="hidden md:block bg-card rounded-2xl border border-border shadow-lg overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-3 bg-secondary/30 border-b border-border">
            <div className="p-4 md:p-6">
              <p className="font-semibold text-foreground text-base md:text-lg">Feature</p>
            </div>
            <div className="p-4 md:p-6 border-l border-border text-center">
              <p className="font-semibold text-muted-foreground text-base md:text-lg">Manual</p>
            </div>
            <div className="p-4 md:p-6 border-l border-border text-center bg-primary/5">
              <p className="font-semibold text-primary text-base md:text-lg">Snappense</p>
            </div>
          </div>

          {/* Rows */}
          {comparisons.map((row, index) => (
            <div 
              key={index} 
              className={`grid grid-cols-3 ${index !== comparisons.length - 1 ? 'border-b border-border' : ''}`}
            >
              <div className="p-4 md:p-6">
                <p className="font-medium text-foreground text-sm md:text-base break-words">{row.feature}</p>
              </div>
              <div className="p-4 md:p-6 border-l border-border text-center">
                <p className="text-muted-foreground text-sm md:text-base break-words">{row.manual}</p>
              </div>
              <div className="p-4 md:p-6 border-l border-border text-center bg-primary/5">
                <p className="font-semibold text-foreground text-sm md:text-base break-words">{row.snappense}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
