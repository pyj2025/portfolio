import { useEffect, useState } from "react";

export type DailyForecast = {
  date: string;
  code: number;
  max: number;
  min: number;
};

export type Weather = {
  temp: number;
  feelsLike: number;
  humidity: number;
  wind: number;
  code: number;
  isDay: boolean;
  high: number;
  low: number;
  daily: DailyForecast[];
};

// Vancouver, BC
const WEATHER_URL =
  "https://api.open-meteo.com/v1/forecast" +
  "?latitude=49.2827&longitude=-123.1207" +
  "&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,is_day" +
  "&daily=weather_code,temperature_2m_max,temperature_2m_min" +
  "&timezone=America%2FVancouver&forecast_days=7";

/** Fetches current + 7-day Vancouver weather from the free (key-less) Open-Meteo API. */
const useWeather = () => {
  const [data, setData] = useState<Weather | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    fetch(WEATHER_URL)
      .then(res => {
        if (!res.ok) throw new Error(String(res.status));
        return res.json();
      })
      .then(json => {
        if (cancelled) return;
        const d = json.daily;
        const daily: DailyForecast[] = d.time.map((date: string, i: number) => ({
          date,
          code: d.weather_code[i],
          max: Math.round(d.temperature_2m_max[i]),
          min: Math.round(d.temperature_2m_min[i]),
        }));
        setData({
          temp: Math.round(json.current.temperature_2m),
          feelsLike: Math.round(json.current.apparent_temperature),
          humidity: Math.round(json.current.relative_humidity_2m),
          wind: Math.round(json.current.wind_speed_10m),
          code: json.current.weather_code,
          isDay: json.current.is_day === 1,
          high: daily[0].max,
          low: daily[0].min,
          daily,
        });
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { data, error, loading: !data && !error };
};

export default useWeather;
