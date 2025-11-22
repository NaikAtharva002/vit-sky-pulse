import { Droplets, Wind, Gauge, Eye, Sun, Sunrise, Sunset } from "lucide-react";
import { WeatherData } from "@/hooks/useWeather";

interface DetailCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const DetailCard = ({ icon, label, value }: DetailCardProps) => (
  <div className="glass-card rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl group">
    <div className="flex items-start gap-4">
      <div className="text-primary group-hover:text-primary/80 transition-colors">
        {icon}
      </div>
      <div className="flex-1">
        <p className="text-muted-foreground text-sm mb-1 font-medium">{label}</p>
        <p className="text-foreground text-2xl font-bold" style={{ textShadow: '0px 1px 3px rgba(31, 41, 55, 0.1)' }}>{value}</p>
      </div>
    </div>
  </div>
);

interface WeatherDetailsProps {
  weather: WeatherData | null;
}

const WeatherDetails = ({ weather }: WeatherDetailsProps) => {
  if (!weather) return null;

  const sunrise = weather.forecast.forecastday[0]?.astro.sunrise || "N/A";
  const sunset = weather.forecast.forecastday[0]?.astro.sunset || "N/A";

  const details = [
    { icon: <Droplets className="w-8 h-8" />, label: "Humidity", value: `${weather.current.humidity}%` },
    { icon: <Wind className="w-8 h-8" />, label: "Wind Speed", value: `${weather.current.wind_kph} km/h` },
    { icon: <Gauge className="w-8 h-8" />, label: "Pressure", value: `${weather.current.pressure_mb} hPa` },
    { icon: <Eye className="w-8 h-8" />, label: "Visibility", value: `${weather.current.vis_km} km` },
    { icon: <Sun className="w-8 h-8" />, label: "UV Index", value: `${weather.current.uv}` },
    { icon: <Sunrise className="w-8 h-8" />, label: "Sunrise", value: sunrise },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-foreground text-center mb-8" style={{ textShadow: '0px 1px 4px rgba(31, 41, 55, 0.1)' }}>
        Weather Details
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {details.map((detail, index) => (
          <DetailCard key={index} {...detail} />
        ))}
      </div>
    </div>
  );
};

export default WeatherDetails;
