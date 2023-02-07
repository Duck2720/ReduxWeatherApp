import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCity } from "../../features/weatherSlice";
import "./Search.scss";

const Search = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const dataCity = useSelector((state) => state.weather.dataCity);

  const filterImg = dataCity?.weather?.[0]?.main
    ? dataCity?.weather?.[0]?.main
    : "atmosphere";

  const handleFindCity = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(getCity(search));
    setSearch("");
  };

  const city = "Hanoi";

  useEffect(() => {
    dispatch(getCity(city));
  }, [dispatch]);

  return (
    <div>
      <div className="search">
        <form onSubmit={onSubmit}>
          <input
            value={search}
            placeholder="Search..."
            className="searchInput"
            type="text"
            onChange={handleFindCity}
          />
        </form>
        <img
          className="side-img"
          src={require(`../../imgs/${filterImg}.png`)}
          alt=""
        />
      </div>
    </div>
  );
};

export default Search;
