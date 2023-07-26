const { createContext } = require("react");

const DetailsContext = createContext({
  updateDetails: () => {},
  updateUpperDeck : ()=>{},
  details: "",
});

export default DetailsContext;
