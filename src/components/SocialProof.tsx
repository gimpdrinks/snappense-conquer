import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CFO, TechStart Inc",
    content: "Cut our expense processing time by 80%. Snappense paid for itself in month one.",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "Founder, GrowthLabs",
    content: "Finally stopped overspending. We saved $18k last quarter. Simple as that.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "Finance Manager, Bloom Co",
    content: "The reports are incredible. I can show our board exactly where money goes in seconds.",
    rating: 5,
  },
];

const SocialProof = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Loved by finance teams
          </h2>
          <p className="text-xl text-muted-foreground">
            Join thousands who've already simplified their expense tracking.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6 text-lg">
                "{testimonial.content}"
              </p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <p className="font-heading text-4xl md:text-5xl font-bold text-primary mb-2">10k+</p>
            <p className="text-muted-foreground">Active users</p>
          </div>
          <div className="text-center">
            <p className="font-heading text-4xl md:text-5xl font-bold text-primary mb-2">$2.8M</p>
            <p className="text-muted-foreground">Avg. saved/year</p>
          </div>
          <div className="text-center">
            <p className="font-heading text-4xl md:text-5xl font-bold text-primary mb-2">4.9/5</p>
            <p className="text-muted-foreground">User rating</p>
          </div>
          <div className="text-center">
            <p className="font-heading text-4xl md:text-5xl font-bold text-primary mb-2">99.9%</p>
            <p className="text-muted-foreground">Uptime</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
