import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { X } from "lucide-react";

interface ScreenshotModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  title: string;
}

const ScreenshotModal = ({ isOpen, onClose, image, title }: ScreenshotModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl w-full p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="font-heading text-2xl">{title}</DialogTitle>
        </DialogHeader>
        <div className="p-6 pt-4">
          <img 
            src={image} 
            alt={`${title} - Full size view`}
            className="w-full h-auto rounded-lg border border-border"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ScreenshotModal;
