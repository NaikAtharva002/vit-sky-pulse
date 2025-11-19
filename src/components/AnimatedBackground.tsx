import { useEffect, useState } from "react";

const AnimatedBackground = () => {
  const [weatherType] = useState<"sunny" | "cloudy" | "rainy" | "night">("sunny");

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient background */}
      <div className={`absolute inset-0 bg-${weatherType} transition-all duration-1000`} />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Animated clouds */}
      <div className="absolute inset-0 opacity-30">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-64 h-32 bg-white/10 rounded-full blur-3xl animate-cloud"
            style={{
              top: `${20 + i * 30}%`,
              animationDelay: `${i * 10}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground;
