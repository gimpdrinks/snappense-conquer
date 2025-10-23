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

        <div className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-3 bg-secondary/30 border-b border-border">
            <div className="p-4 md:p-6">
              <p className="font-semibold text-foreground text-lg">Feature</p>
            </div>
            <div className="p-4 md:p-6 border-l border-border text-center">
              <p className="font-semibold text-muted-foreground text-lg">Manual</p>
            </div>
            <div className="p-4 md:p-6 border-l border-border text-center bg-primary/5">
              <p className="font-semibold text-primary text-lg">Snappense</p>
            </div>
          </div>

          {/* Rows */}
          {comparisons.map((row, index) => (
            <div 
              key={index} 
              className={`grid grid-cols-3 ${index !== comparisons.length - 1 ? 'border-b border-border' : ''}`}
            >
              <div className="p-4 md:p-6">
                <p className="font-medium text-foreground">{row.feature}</p>
              </div>
              <div className="p-4 md:p-6 border-l border-border text-center">
                <p className="text-muted-foreground">{row.manual}</p>
              </div>
              <div className="p-4 md:p-6 border-l border-border text-center bg-primary/5">
                <p className="font-semibold text-foreground">{row.snappense}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
