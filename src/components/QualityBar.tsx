interface Props {
  quality: number | undefined;
  max: number;
  name: string;
}

function QualityBar({ quality, name, max }: Props) {
  const qualityValue = quality ?? 0;
  const maxValue = max ?? 0;
  const restoBar = maxValue - qualityValue;

  return (
    <>
      <div className="minibox mt1">
        {name}
        <div className="flex max">
          <div
            className={restoBar != 0 ? "flex bar1 alc" : "flex bar1 alc full"}
            style={{ width: quality + "%", color: "white" }}
          >
            {quality + "%"}
          </div>
          <div
            className={restoBar != 0 ? "flex bar2" : "hide"}
            style={{ width: restoBar + "%" }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default QualityBar;
