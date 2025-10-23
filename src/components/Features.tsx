import { Zap, TrendingUp, Shield, Bell, PieChart, Users } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant categorization",
    description: "Auto-tag expenses in seconds. No manual entry.",
  },
  {
    icon: TrendingUp,
    title: "Real-time analytics",
    description: "See spending trends as they happen. Make faster decisions.",
  },
  {
    icon: Shield,
    title: "Bank-level security",
    description: "256-bit encryption. SOC 2 compliant. Your data is safe.",
  },
  {
    icon: Bell,
    title: "Smart alerts",
    description: "Get notified before you overspend. Stay in control.",
  },
  {
    icon: PieChart,
    title: "Custom reports",
    description: "Build reports your way. Export to Excel, PDF, or CSV.",
  },
  {
    icon: Users,
    title: "Team collaboration",
    description: "Invite your team. Set permissions. Track together.",
  },
];

const Features = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Everything you need to manage expenses
          </h2>
          <p className="text-xl text-muted-foreground">
            Powerful features designed for speed and simplicity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group p-8 rounded-2xl border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
