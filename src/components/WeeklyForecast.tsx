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

interface WeeklyForecastProps {
  weather: WeatherData | null;
}

const WeeklyForecast = ({ weather }: WeeklyForecastProps) => {
  if (!weather) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-foreground text-center mb-8" style={{ textShadow: '0px 1px 4px rgba(31, 41, 55, 0.1)' }}>
        7-Day Forecast
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4 max-w-7xl mx-auto">
        {weather.forecast.forecastday.map((day, index) => {
          const date = new Date(day.date);
          const dayName = index === 0 ? "Today" : date.toLocaleDateString("en-US", { weekday: "long" });
          
          return (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              <p className="text-foreground font-bold text-center mb-4">
                {dayName}
              </p>
              <div className="flex justify-center mb-4 text-4xl">
                {getWeatherIcon(day.day.condition.code)}
              </div>
              <div className="flex justify-center gap-2 text-foreground">
                <span className="font-bold text-lg" style={{ textShadow: '0px 1px 3px rgba(31, 41, 55, 0.1)' }}>{Math.round(day.day.maxtemp_c)}°</span>
                <span className="text-muted-foreground text-lg font-medium">{Math.round(day.day.mintemp_c)}°</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeeklyForecast;
