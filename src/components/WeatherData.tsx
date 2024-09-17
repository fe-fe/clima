interface WeatherData {
  location?: {
    name: string;
    region: string;
    country: string;
  };
  current?: {
    temp_c: number;
    condition: {
      text: string;
      icon: string | undefined;
    };
    precip_mm: number;
    wind_kph: number;
    humidity: number;
  };
}

export default WeatherData;
