import Home from "./pages/home";
import ReactGA from "react-ga4";

function App() {
  ReactGA.initialize("G-SDYWBF9SHY");
  ReactGA.send("pageview");
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
