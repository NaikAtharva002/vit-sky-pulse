import { Cloud } from "lucide-react";

const Footer = () => {
  return (
    <footer className="glass border-t border-border mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Powered By */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <Cloud className="w-4 h-4" />
            <span className="text-sm font-medium">Powered by WeatherAPI.com</span>
          </div>

          {/* Student Info */}
          <div className="text-center md:text-right text-muted-foreground">
            <p className="text-sm font-semibold">
              Atharva - 25BAI10771
            </p>
            <p className="text-xs">First Year Python Project</p>
          </div>

          {/* Copyright */}
          <div className="text-muted-foreground text-sm font-medium">
            VIT Bhopal © 2025
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
