import ContentBox from "./ContentBox";
import QualityBar from "./QualityBar";
import WeatherData from "../interfaces/WeatherInterface";
import WeatherIcon from "./WeatherIcon";

interface Props {
  info: WeatherData | null;
  error: string | null;
}

function WeatherInfo({ info, error }: Props) {
  console.log(info);
  return info ? (
    <ContentBox>
      <div className="minibox">
        <div className="flex alc">
          <div className="max">
            {info.location?.name ? info.location?.name + ", " : null}
            {info.location?.region ? info.location?.region + ", " : null}
            {info.location?.country ? info.location?.country : null}
          </div>
          <div className="minibox flex alc">
            {info.current?.temp_c}°C
            <WeatherIcon url={info.current?.condition.icon} />
          </div>
        </div>
      </div>
      <div className="sepv"></div>
      <div className="minibox">
        <div className="flex jusc">Detalhes do Tempo</div>
        <div className="sepv"></div>
        <QualityBar quality={info.current?.humidity} max={100} name="Umidade" />
        <div className="minibox mt1">
          Precipitacao: {info.current?.precip_mm} mm
        </div>
        <div className="minibox mt1">Vento: {info.current?.wind_kph} km/h</div>
      </div>
    </ContentBox>
  ) : error ? (
    <ContentBox>
      <div className="minibox flex jusc">{error}</div>
    </ContentBox>
  ) : (
    <ContentBox>
      <div className="minibox flex jusc">digite um local para ver detalhes</div>
    </ContentBox>
  );
}

export default WeatherInfo;
