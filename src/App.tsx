import Navbar from "./components/Navbar";
import WeatherInfo from "./components/WeatherInfo";
import Page from "./components/Page";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import WeatherData from "./components/WeatherData";

const apiKey = "";

function App() {
  const [wData, setWdata] = useState<WeatherData | null>(null);

  async function getWdata(location: string) {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&lang=pt`
    );

    if (response.ok) {
      const data = await response.json();
      setWdata(data);
    }
  }

  return (
    <>
      <Navbar
        links={[{ nome: "weatherapi", url: "https://www.weatherapi.com/" }]}
      />
      <Page pageWidth="35vw">
        <SearchBar onSearch={getWdata} />
        <WeatherInfo info={wData}></WeatherInfo>
      </Page>
    </>
  );
}

export default App;
