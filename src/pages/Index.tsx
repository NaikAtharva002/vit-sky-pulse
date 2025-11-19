import Header from "@/components/Header";
import AnimatedBackground from "@/components/AnimatedBackground";
import WeatherHero from "@/components/WeatherHero";
import SearchBar from "@/components/SearchBar";
import WeatherDetails from "@/components/WeatherDetails";
import HourlyForecast from "@/components/HourlyForecast";
import WeeklyForecast from "@/components/WeeklyForecast";
import Footer from "@/components/Footer";
import { useWeather } from "@/hooks/useWeather";

const Index = () => {
  const { weather, loading, fetchWeather } = useWeather("VIT Bhopal");

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Header />
      <main>
        <WeatherHero weather={weather} loading={loading} />
        <SearchBar onSearch={fetchWeather} />
        <WeatherDetails weather={weather} />
        <HourlyForecast weather={weather} />
        <WeeklyForecast weather={weather} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
