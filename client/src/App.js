import UpperDeck from "./components/Seats/UpperDeck/UpperDeck";
import "./App.css";
import LowerDeck from "./components/Seats/LowerDeck/LowerDeck";
import Insights from "./components/Seats/Insights/Insights";
import Header from "./components/Header/Header";
import DetailsProvider from "./store/DetailsProvider";
import Details from "./components/Details/Details";

const App = () => {
  return (
    <DetailsProvider>
      <Header />
      <div className="seats">
        <LowerDeck />
        <Insights />
        <UpperDeck />
      </div>
      <Details />
    </DetailsProvider>

  );
};

export default App;
