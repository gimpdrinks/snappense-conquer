import { Plus, AlertCircle, Download } from "lucide-react";

const steps = [
  {
    icon: Plus,
    number: "1",
    title: "Add an expense",
    description: "Scan a receipt, use your voice, or tap a preset. Takes 10 seconds.",
  },
  {
    icon: AlertCircle,
    number: "2",
    title: "Fix flags",
    description: "AI highlights compliance risks. One-click fixes for missing fields.",
  },
  {
    icon: Download,
    number: "3",
    title: "Export & submit",
    description: "PDF with signature line, CSV, or sync to Google Sheets. Done.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            How it works
          </h2>
          <p className="text-xl text-muted-foreground">
            Three steps. Five minutes. Manager-ready reports.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-lg transition-all h-full">
                  {/* Step number badge */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl shadow-lg">
                    {step.number}
                  </div>
                  
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 mt-2">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {step.description}
                  </p>
                </div>

                {/* Connector arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
