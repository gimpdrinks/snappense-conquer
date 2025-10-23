import { Button } from "@/components/ui/button";
import logo from "@/assets/snappense-logo.png";
import { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50 transition-shadow ${scrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src={logo} alt="Snappense - AI-powered expense tracking" className="h-8 md:h-10" />
            <span className="font-heading font-bold text-xl md:text-2xl text-foreground">Snappense</span>
          </div>

          {/* Navigation - hidden on mobile, shown on md+ */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('features')} className="text-foreground hover:text-primary transition-colors font-medium">
              Features
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-foreground hover:text-primary transition-colors font-medium">
              How It Works
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-foreground hover:text-primary transition-colors font-medium">
              Pricing
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-foreground hover:text-primary transition-colors font-medium">
              FAQ
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Button 
              onClick={() => scrollToSection('pricing')}
              className="shadow-md hover:shadow-lg"
            >
              Start $1 Trial
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
