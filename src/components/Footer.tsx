import logo from "@/assets/snappense-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <img src={logo} alt="Snappense" className="h-8 mb-4 brightness-0 invert" />
            <p className="text-background/70 text-sm">
              Smart expense tracking for modern businesses.
            </p>
          </div>

          {/* Product Column */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Features</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Pricing</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Security</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Roadmap</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">About</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Blog</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Careers</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Privacy</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Terms</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <p className="text-center text-sm text-background/60">
            © 2025 Snappense. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
