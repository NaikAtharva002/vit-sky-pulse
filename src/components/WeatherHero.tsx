import { useState, useEffect } from "react";
import { MapPin, Thermometer } from "lucide-react";

interface WeatherData {
  location: string;
  temperature: number;
  condition: string;
  feelsLike: number;
}

const WeatherHero = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [weather] = useState<WeatherData>({
    location: "VIT Bhopal",
    temperature: 28,
    condition: "Partly Cloudy",
    feelsLike: 30,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Main Weather Card */}
          <div className="glass-card rounded-3xl p-8 sm:p-12 animate-float shadow-2xl">
            {/* Location */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <MapPin className="w-5 h-5 text-white/80" />
              <h2 className="text-xl sm:text-2xl font-semibold text-white/90">
                {weather.location}
              </h2>
            </div>

            {/* Temperature Display */}
            <div className="text-center mb-8">
              <div className="text-8xl sm:text-9xl font-bold text-white/95 mb-4">
                {weather.temperature}°
              </div>
              <p className="text-2xl sm:text-3xl text-white/85 font-medium mb-2">
                {weather.condition}
              </p>
              <div className="flex items-center justify-center gap-2 text-white/60">
                <Thermometer className="w-4 h-4" />
                <span className="text-sm">Feels like {weather.feelsLike}°</span>
              </div>
            </div>

            {/* Date & Time */}
            <div className="text-center text-white/70 space-y-1">
              <p className="text-lg font-medium">
                {currentTime.toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p className="text-2xl font-semibold">
                {currentTime.toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherHero;
