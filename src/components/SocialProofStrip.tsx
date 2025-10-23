import { Star, Clock } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Jake Martinez",
    role: "Sales Rep, TechCorp",
    content: "I used to spend an hour each week on expense reports. Now it's 10 minutes. Total game-changer.",
    rating: 5,
  },
  {
    name: "Rachel Kim",
    role: "Freelance Consultant",
    content: "My manager approved my first Snappense report immediately. No questions, no fixes needed.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Field Engineer",
    content: "Voice entry while driving is incredible. 'Parking $5 today' and it's logged. Brilliant.",
    rating: 5,
  },
];

const SocialProofStrip = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-12 bg-secondary/30 border-y border-border">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Rotating Testimonial */}
          <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
            <div className="flex gap-1 mb-4">
              {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-foreground leading-relaxed mb-4 text-lg">
              "{currentTestimonial.content}"
            </p>
            <div>
              <p className="font-semibold text-foreground">{currentTestimonial.name}</p>
              <p className="text-sm text-muted-foreground">{currentTestimonial.role}</p>
            </div>
            
            {/* Dots indicator */}
            <div className="flex gap-2 mt-4">
              {testimonials.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all ${
                    i === currentIndex ? "w-8 bg-primary" : "w-1.5 bg-border"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Micro-metric */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-3 bg-card border border-border rounded-xl shadow-sm p-6">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                <Clock className="w-7 h-7 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Average time to first report</p>
                <p className="text-3xl font-bold text-primary">{"<4 minutes"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofStrip;
