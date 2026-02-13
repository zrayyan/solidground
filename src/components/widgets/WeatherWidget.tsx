'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cloud, Sun, CloudRain, Thermometer, Droplets, Wind } from 'lucide-react';

interface WeatherData {
  temperature: number;
  humidity: number;
  windSpeed: number;
  condition: 'sunny' | 'cloudy' | 'rainy';
  pouringConditions: 'good' | 'fair' | 'poor';
  forecast: string;
}

export default function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call for weather data
    const fetchWeather = async () => {
      // In a real app, this would call a weather API
      const mockWeather: WeatherData = {
        temperature: 72,
        humidity: 45,
        windSpeed: 8,
        condition: 'sunny',
        pouringConditions: 'good',
        forecast: 'Clear skies, perfect for concrete work',
      };

      setTimeout(() => {
        setWeather(mockWeather);
        setIsLoading(false);
      }, 1000);
    };

    fetchWeather();
  }, []);

  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case 'sunny':
        return <Sun className="w-8 h-8 text-yellow-500" />;
      case 'cloudy':
        return <Cloud className="w-8 h-8 text-gray-500" />;
      case 'rainy':
        return <CloudRain className="w-8 h-8 text-blue-500" />;
      default:
        return <Sun className="w-8 h-8 text-yellow-500" />;
    }
  };

  const getPouringColor = (conditions: string) => {
    switch (conditions) {
      case 'good':
        return 'text-green-600 bg-green-50';
      case 'fair':
        return 'text-yellow-600 bg-yellow-50';
      case 'poor':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-lg shadow-lg p-6 max-w-sm"
      >
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-8 bg-gray-200 rounded w-1/2 mb-4"></div>
          <div className="space-y-2">
            <div className="h-3 bg-gray-200 rounded"></div>
            <div className="h-3 bg-gray-200 rounded w-5/6"></div>
          </div>
        </div>
      </motion.div>
    );
  }

  if (!weather) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-lg p-6 max-w-sm"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-concrete-gray">Pouring Conditions</h3>
        {getWeatherIcon(weather.condition)}
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Thermometer className="w-4 h-4 text-red-500" />
            <span className="text-sm text-gray-600">Temperature</span>
          </div>
          <span className="font-semibold">{weather.temperature}°F</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Droplets className="w-4 h-4 text-blue-500" />
            <span className="text-sm text-gray-600">Humidity</span>
          </div>
          <span className="font-semibold">{weather.humidity}%</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Wind className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600">Wind</span>
          </div>
          <span className="font-semibold">{weather.windSpeed} mph</span>
        </div>
      </div>

      <div className={`mt-4 p-3 rounded-lg ${getPouringColor(weather.pouringConditions)}`}>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Pouring Conditions:</span>
          <span className="text-sm font-bold capitalize">{weather.pouringConditions}</span>
        </div>
        <p className="text-xs mt-1 opacity-80">{weather.forecast}</p>
      </div>

      <div className="mt-4 text-xs text-gray-500">
        Last updated: {new Date().toLocaleTimeString()}
      </div>
    </motion.div>
  );
}