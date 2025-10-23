import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoModal = ({ isOpen, onClose }: DemoModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card rounded-2xl border border-border shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-auto">
        <div className="p-6 border-b border-border flex items-center justify-between">
          <h3 className="font-heading text-2xl font-bold text-foreground">
            See Snappense in Action
          </h3>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>
        
        <div className="p-8">
          {/* Placeholder for demo video */}
          <div className="aspect-video bg-secondary rounded-xl flex items-center justify-center">
            <div className="text-center">
              <p className="text-xl font-semibold text-foreground mb-2">
                90-Second Product Demo
              </p>
              <p className="text-muted-foreground">
                Video demo will be embedded here
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                (Placeholder for mp4/YouTube embed)
              </p>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <Button 
              size="lg" 
              onClick={() => {
                onClose();
                document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Start $1 Trial
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoModal;
