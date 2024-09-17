import { useState } from "react";

interface Props {
  onSearch: Function;
}

function SearchBar({ onSearch }: Props) {
  const [location, setLocation] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(location);
  };

  return (
    <>
      <div className="flex mb1 max">
        <input
          type="text"
          id="regionInput"
          className="max"
          placeholder="Digite o local..."
          onChange={handleInputChange}
        ></input>
        <button className="bt search flex alc" onClick={handleSearchClick}>
          <i
            className="fa fa-search alc"
            style={{ fontSize: "small", color: "white" }}
          ></i>
        </button>
      </div>
    </>
  );
}

export default SearchBar;
