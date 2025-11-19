import { Droplets, Wind, Gauge, Eye, Sun, Sunrise, Sunset } from "lucide-react";

interface DetailCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const DetailCard = ({ icon, label, value }: DetailCardProps) => (
  <div className="glass-card rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl group">
    <div className="flex items-start gap-4">
      <div className="text-white/80 group-hover:text-white transition-colors">
        {icon}
      </div>
      <div className="flex-1">
        <p className="text-white/60 text-sm mb-1">{label}</p>
        <p className="text-white text-2xl font-bold">{value}</p>
      </div>
    </div>
  </div>
);

const WeatherDetails = () => {
  const details = [
    { icon: <Droplets className="w-8 h-8" />, label: "Humidity", value: "65%" },
    { icon: <Wind className="w-8 h-8" />, label: "Wind Speed", value: "12 km/h" },
    { icon: <Gauge className="w-8 h-8" />, label: "Pressure", value: "1013 hPa" },
    { icon: <Eye className="w-8 h-8" />, label: "Visibility", value: "10 km" },
    { icon: <Sun className="w-8 h-8" />, label: "UV Index", value: "5" },
    { icon: <Sunrise className="w-8 h-8" />, label: "Sunrise", value: "6:24 AM" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-white text-center mb-8">
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
