import "./Page.scss";
import Search from "../search/Search";
import CurrentWeather from "../current-weather/CurrentWeather";
import Content from "../../layouts/content/Content";

const Page = () => {
  return (
    <div className="homepage">
      <div className="left">
        <Search />
        <CurrentWeather />
      </div>
      <Content />
    </div>
  );
};

export default Page;
