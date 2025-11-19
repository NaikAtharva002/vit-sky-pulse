import Header from "@/components/Header";
import AnimatedBackground from "@/components/AnimatedBackground";
import WeatherHero from "@/components/WeatherHero";
import SearchBar from "@/components/SearchBar";
import WeatherDetails from "@/components/WeatherDetails";
import HourlyForecast from "@/components/HourlyForecast";
import WeeklyForecast from "@/components/WeeklyForecast";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Header />
      <main>
        <WeatherHero />
        <SearchBar />
        <WeatherDetails />
        <HourlyForecast />
        <WeeklyForecast />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
