interface Props {
  url: string | undefined;
}

function WeatherIcon({ url }: Props) {
  return (
    <img
      src={url}
      alt="Ícone do tempo"
      style={{ width: "32px", height: "32px" }}
    />
  );
}

export default WeatherIcon;
