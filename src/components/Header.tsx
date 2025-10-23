import { Button } from "@/components/ui/button";
import logo from "@/assets/snappense-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="Snappense Logo" className="h-8 md:h-10" />
          </div>

          {/* Navigation - hidden on mobile, shown on md+ */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-foreground hover:text-primary transition-colors font-medium">
              Features
            </a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-colors font-medium">
              Testimonials
            </a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-colors font-medium">
              Pricing
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="hidden sm:inline-flex">
              Sign In
            </Button>
            <Button>
              Start Free
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
