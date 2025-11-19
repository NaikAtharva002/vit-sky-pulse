import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { city } = await req.json();
    const weatherApiKey = Deno.env.get('WEATHER_API_KEY');

    if (!weatherApiKey) {
      throw new Error('WEATHER_API_KEY is not configured');
    }

    if (!city) {
      return new Response(
        JSON.stringify({ error: 'City parameter is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Fetching weather for:', city);

    // Fetch current weather and forecast
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${encodeURIComponent(city)}&days=7&aqi=yes`
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('WeatherAPI error:', response.status, errorText);
      
      if (response.status === 400) {
        return new Response(
          JSON.stringify({ error: 'City not found' }),
          { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      
      throw new Error(`WeatherAPI returned status ${response.status}`);
    }

    const data = await response.json();
    console.log('Weather data fetched successfully');

    // Transform the data to match our frontend structure
    const weatherData = {
      location: {
        name: data.location.name,
        region: data.location.region,
        country: data.location.country,
        localtime: data.location.localtime,
      },
      current: {
        temp_c: data.current.temp_c,
        temp_f: data.current.temp_f,
        condition: {
          text: data.current.condition.text,
          icon: data.current.condition.icon,
          code: data.current.condition.code,
        },
        feelslike_c: data.current.feelslike_c,
        feelslike_f: data.current.feelslike_f,
        humidity: data.current.humidity,
        wind_kph: data.current.wind_kph,
        wind_mph: data.current.wind_mph,
        pressure_mb: data.current.pressure_mb,
        vis_km: data.current.vis_km,
        uv: data.current.uv,
      },
      forecast: {
        forecastday: data.forecast.forecastday.map((day: any) => ({
          date: day.date,
          day: {
            maxtemp_c: day.day.maxtemp_c,
            maxtemp_f: day.day.maxtemp_f,
            mintemp_c: day.day.mintemp_c,
            mintemp_f: day.day.mintemp_f,
            condition: {
              text: day.day.condition.text,
              icon: day.day.condition.icon,
              code: day.day.condition.code,
            },
          },
          astro: {
            sunrise: day.astro.sunrise,
            sunset: day.astro.sunset,
          },
          hour: day.hour.map((h: any) => ({
            time: h.time,
            temp_c: h.temp_c,
            temp_f: h.temp_f,
            condition: {
              text: h.condition.text,
              icon: h.condition.icon,
              code: h.condition.code,
            },
          })),
        })),
      },
    };

    return new Response(JSON.stringify(weatherData), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in weather function:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'An unknown error occurred' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
