import { Cloud, CloudRain, Sun } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface HourData {
  time: string;
  temp: number;
  icon: React.ReactNode;
}

const HourlyForecast = () => {
  const hours: HourData[] = [
    { time: "Now", temp: 28, icon: <Sun className="w-8 h-8" /> },
    { time: "2 PM", temp: 30, icon: <Sun className="w-8 h-8" /> },
    { time: "3 PM", temp: 31, icon: <Cloud className="w-8 h-8" /> },
    { time: "4 PM", temp: 29, icon: <Cloud className="w-8 h-8" /> },
    { time: "5 PM", temp: 27, icon: <CloudRain className="w-8 h-8" /> },
    { time: "6 PM", temp: 25, icon: <CloudRain className="w-8 h-8" /> },
    { time: "7 PM", temp: 24, icon: <Cloud className="w-8 h-8" /> },
    { time: "8 PM", temp: 23, icon: <Cloud className="w-8 h-8" /> },
    { time: "9 PM", temp: 22, icon: <Cloud className="w-8 h-8" /> },
    { time: "10 PM", temp: 21, icon: <Cloud className="w-8 h-8" /> },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-white text-center mb-8">
        Hourly Forecast
      </h2>
      <ScrollArea className="w-full whitespace-nowrap rounded-2xl">
        <div className="flex gap-4 p-4">
          {hours.map((hour, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 min-w-[120px] hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              <p className="text-white/80 text-sm font-medium text-center mb-3">
                {hour.time}
              </p>
              <div className="flex justify-center mb-3 text-white/80">
                {hour.icon}
              </div>
              <p className="text-white text-2xl font-bold text-center">
                {hour.temp}°
              </p>
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default HourlyForecast;
