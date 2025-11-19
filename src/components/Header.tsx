import { Cloud } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 glass border-b border-white/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* VIT Bhopal Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-weather-vit rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">VIT</span>
            </div>
            <div className="hidden sm:block">
              <h2 className="text-sm font-semibold text-white/90">VIT Bhopal</h2>
              <p className="text-xs text-white/60">University Institute</p>
            </div>
          </div>

          {/* Project Title */}
          <div className="flex items-center gap-2">
            <Cloud className="w-6 h-6 text-white/80" />
            <h1 className="text-lg sm:text-xl font-bold text-white/90">
              Live Weather Dashboard
            </h1>
          </div>

          {/* Student Info */}
          <div className="hidden md:block text-right">
            <p className="text-sm font-semibold text-white/90">Atharva</p>
            <p className="text-xs text-white/60">25BAI10771</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
