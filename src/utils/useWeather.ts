import { useEffect, useState } from "react";

export type Weather = {
  temp: number;
  high: number;
  low: number;
  code: number;
  isDay: boolean;
};

// Vancouver, BC
const WEATHER_URL =
  "https://api.open-meteo.com/v1/forecast" +
  "?latitude=49.2827&longitude=-123.1207" +
  "&current=temperature_2m,weather_code,is_day" +
  "&daily=temperature_2m_max,temperature_2m_min" +
  "&timezone=America%2FVancouver&forecast_days=1";

/** Fetches current Vancouver weather from the free (key-less) Open-Meteo API. */
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
        setData({
          temp: Math.round(json.current.temperature_2m),
          code: json.current.weather_code,
          isDay: json.current.is_day === 1,
          high: Math.round(json.daily.temperature_2m_max[0]),
          low: Math.round(json.daily.temperature_2m_min[0]),
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
