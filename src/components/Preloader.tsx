import { useEffect, useState } from "react";

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 300); // Wait for fade out animation
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) {
    return (
      <div className="fixed inset-0 bg-background z-50 flex items-center justify-center animate-fade-out">
        <div className="text-center animate-scale-out">
          <img 
            src="/lovable-uploads/30084cf3-1406-4e7a-9689-5a5c9a0eef41.png" 
            alt="Pro Mentor LLC" 
            className="h-20 w-auto mx-auto mb-6"
          />
          <div className="w-16 h-1 bg-primary/20 rounded-full mx-auto overflow-hidden">
            <div className="h-full bg-primary rounded-full animate-[loading_1.5s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center animate-fade-in">
      <div className="text-center animate-scale-in">
        <img 
          src="/lovable-uploads/30084cf3-1406-4e7a-9689-5a5c9a0eef41.png" 
          alt="Pro Mentor LLC" 
          className="h-20 w-auto mx-auto mb-6 animate-pulse"
        />
        <div className="w-16 h-1 bg-primary/20 rounded-full mx-auto overflow-hidden">
          <div className="h-full bg-primary rounded-full animate-[loading_1.5s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
};

export default Preloader;