import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Page from "./components/page/Page";
import WeatherDay from "./components/weatherDay/WeatherDay";
import WeatherHour from "./components/weatherHour/WeatherHour";
import WeatherWeek from "./components/weatherWeek/WeatherWeek";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Page />}>
          <Route path="/" element={<WeatherDay />} />
          <Route path="week" element={<WeatherWeek />} />
          <Route path="hour" element={<WeatherHour />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
