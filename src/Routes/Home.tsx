import { useState } from "react";
import WeatherData from "../interfaces/WeatherInterface";
import WeatherInfo from "../components/WeatherInfo";
import SearchBar from "../components/SearchBar";
import Page from "../components/Page";

const apiKey = "95f8c464f5404ef5be9214520241709";

function Home() {
  const [wData, setWdata] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function getWdata(location: string) {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&lang=pt`
    );

    if (response.ok) {
      setError(null);
      const data = await response.json();
      setWdata(data);
    } else {
      setWdata(null);
      if (response.status == 400) {
        setError("Local nao encontrado, Verifique a digitacao");
      } else {
        setError("Erro inesperado.");
      }
    }
  }

  return (
    <Page pageWidth="35vw">
      <SearchBar onSearch={getWdata} />
      <WeatherInfo info={wData} error={error}></WeatherInfo>
    </Page>
  );
}

export default Home;
