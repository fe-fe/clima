import Page from "../components/Page";
import MiniTitle from "../components/MiniTitle";

function Sobre() {
  return (
    <Page pageWidth="35vw">
      <MiniTitle>Sobre</MiniTitle>
      <div className="contentbox brtop">
        <div className="minibox">
          <p>
            Este projeto é um estudo React. Ele busca pelo local inserido e, se
            encontrado, retorna as informações do clima atual. Os dados são
            retirados da API gratuita WeatherAPI, portanto, podem estar
            incorretos ou atrasados.
          </p>
        </div>
      </div>
    </Page>
  );
}

export default Sobre;
