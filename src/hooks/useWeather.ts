import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export interface WeatherData {
  location: {
    name: string;
    region: string;
    country: string;
    localtime: string;
  };
  current: {
    temp_c: number;
    temp_f: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    feelslike_c: number;
    feelslike_f: number;
    humidity: number;
    wind_kph: number;
    wind_mph: number;
    pressure_mb: number;
    vis_km: number;
    uv: number;
  };
  forecast: {
    forecastday: Array<{
      date: string;
      day: {
        maxtemp_c: number;
        maxtemp_f: number;
        mintemp_c: number;
        mintemp_f: number;
        condition: {
          text: string;
          icon: string;
          code: number;
        };
      };
      astro: {
        sunrise: string;
        sunset: string;
      };
      hour: Array<{
        time: string;
        temp_c: number;
        temp_f: number;
        condition: {
          text: string;
          icon: string;
          code: number;
        };
      }>;
    }>;
  };
}

export const useWeather = (initialCity: string = "VIT Bhopal") => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState(initialCity);

  const fetchWeather = async (searchCity: string) => {
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('weather', {
        body: { city: searchCity }
      });

      if (error) {
        console.error('Weather fetch error:', error);
        toast.error('Failed to fetch weather data');
        return;
      }

      if (data.error) {
        toast.error(data.error);
        return;
      }

      setWeather(data);
      setCity(searchCity);
    } catch (error) {
      console.error('Weather fetch error:', error);
      toast.error('An error occurred while fetching weather');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, []);

  return { weather, loading, fetchWeather, city };
};
