import { Cloud, CloudRain, Sun } from "lucide-react";

interface DayData {
  day: string;
  icon: React.ReactNode;
  high: number;
  low: number;
}

const WeeklyForecast = () => {
  const days: DayData[] = [
    { day: "Monday", icon: <Sun className="w-8 h-8" />, high: 32, low: 22 },
    { day: "Tuesday", icon: <Cloud className="w-8 h-8" />, high: 30, low: 21 },
    { day: "Wednesday", icon: <CloudRain className="w-8 h-8" />, high: 27, low: 20 },
    { day: "Thursday", icon: <Cloud className="w-8 h-8" />, high: 29, low: 21 },
    { day: "Friday", icon: <Sun className="w-8 h-8" />, high: 31, low: 23 },
    { day: "Saturday", icon: <Sun className="w-8 h-8" />, high: 33, low: 24 },
    { day: "Sunday", icon: <Cloud className="w-8 h-8" />, high: 30, low: 22 },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-white text-center mb-8">
        7-Day Forecast
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4 max-w-7xl mx-auto">
        {days.map((day, index) => (
          <div
            key={index}
            className="glass-card rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl"
          >
            <p className="text-white font-semibold text-center mb-4">
              {day.day}
            </p>
            <div className="flex justify-center mb-4 text-white/80">
              {day.icon}
            </div>
            <div className="flex justify-center gap-2 text-white">
              <span className="font-bold text-lg">{day.high}°</span>
              <span className="text-white/60 text-lg">{day.low}°</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyForecast;
