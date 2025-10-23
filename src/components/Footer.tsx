import { useState } from "react";
import logo from "@/assets/snappense-logo.png";
import PrivacyPolicyModal from "./PrivacyPolicyModal";
import TermsOfServiceModal from "./TermsOfServiceModal";
import ContactModal from "./ContactModal";

const Footer = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary/20 border-t border-border py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <img src={logo} alt="Snappense - AI expense tracking" className="h-8 mb-4" />
            <p className="text-muted-foreground max-w-md">
              Log expenses 5× faster. Get reimbursed on the first submission.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection('features')} className="text-muted-foreground hover:text-primary transition-colors">Features</button></li>
              <li><button onClick={() => scrollToSection('pricing')} className="text-muted-foreground hover:text-primary transition-colors">Pricing</button></li>
              <li><button onClick={() => scrollToSection('how-it-works')} className="text-muted-foreground hover:text-primary transition-colors">How It Works</button></li>
              <li><button onClick={() => scrollToSection('faq')} className="text-muted-foreground hover:text-primary transition-colors">FAQ</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => setPrivacyOpen(true)}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setTermsOpen(true)}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setContactOpen(true)}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Snappense. All rights reserved.
          </p>
        </div>
      </div>

      <PrivacyPolicyModal open={privacyOpen} onOpenChange={setPrivacyOpen} />
      <TermsOfServiceModal open={termsOpen} onOpenChange={setTermsOpen} />
      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
    </footer>
  );
};

export default Footer;
