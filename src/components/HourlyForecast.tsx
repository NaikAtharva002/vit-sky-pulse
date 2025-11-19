import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { WeatherData } from "@/hooks/useWeather";

const getWeatherIcon = (code: number) => {
  // Weather condition codes from WeatherAPI
  if (code === 1000) return "☀️"; // Sunny
  if ([1003, 1006, 1009].includes(code)) return "☁️"; // Cloudy
  if ([1063, 1180, 1183, 1186, 1189, 1192, 1195, 1240, 1243, 1246].includes(code)) return "🌧️"; // Rain
  if ([1066, 1114, 1210, 1213, 1216, 1219, 1222, 1225, 1255, 1258].includes(code)) return "❄️"; // Snow
  if ([1087, 1273, 1276, 1279, 1282].includes(code)) return "⛈️"; // Thunder
  return "🌤️"; // Partly cloudy default
};

interface HourlyForecastProps {
  weather: WeatherData | null;
}

const HourlyForecast = ({ weather }: HourlyForecastProps) => {
  if (!weather) return null;

  // Get the next 12 hours from current time
  const allHours = weather.forecast.forecastday.flatMap(day => day.hour);
  const currentHour = new Date().getHours();
  const next12Hours = allHours.slice(currentHour, currentHour + 12);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-white/90 text-center mb-8">
        Hourly Forecast
      </h2>
      <ScrollArea className="w-full whitespace-nowrap rounded-2xl">
        <div className="flex gap-4 p-4">
          {next12Hours.map((hour, index) => {
            const hourTime = new Date(hour.time).getHours();
            const displayTime = index === 0 ? "Now" : `${hourTime % 12 || 12} ${hourTime >= 12 ? 'PM' : 'AM'}`;
            
            return (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 min-w-[120px] hover:scale-105 transition-all duration-300 hover:shadow-xl"
              >
                <p className="text-white/70 text-sm font-medium text-center mb-3">
                  {displayTime}
                </p>
                <div className="flex justify-center mb-3 text-4xl">
                  {getWeatherIcon(hour.condition.code)}
                </div>
                <p className="text-white/90 text-2xl font-bold text-center">
                  {Math.round(hour.temp_c)}°
                </p>
              </div>
            );
          })}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default HourlyForecast;
