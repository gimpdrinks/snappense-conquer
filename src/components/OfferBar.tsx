import { Sparkles } from "lucide-react";

const OfferBar = () => {
  return (
    <div className="bg-primary text-primary-foreground py-3 px-4 sticky top-16 md:top-20 z-40 shadow-md">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center justify-center gap-2 text-sm md:text-base font-medium text-center flex-wrap">
          <Sparkles className="w-4 h-4 flex-shrink-0" />
          <span className="font-bold">Founding 20:</span>
          <span className="hidden sm:inline">$1 trial • 50 AI credits • Done-For-You first report • $12/mo or $99/yr lock-in</span>
          <span className="sm:hidden">$1 trial • 50 AI credits • Price lock</span>
        </div>
      </div>
    </div>
  );
};

export default OfferBar;
