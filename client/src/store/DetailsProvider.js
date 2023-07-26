import { useState } from "react";
import DetailsContext from "./context-details";

const DetailsProvider = (props) => {
  const [details, setDetails] = useState([]);

  const detailsHandler = async (id) => {
    const response = await fetch(`http://localhost:5000/fetch-item/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setDetails((prevItems) => {
      return [...prevItems, { ...data.item }];
    });
  };

  const updateUpperDeck = async (id) => {
    const response = await fetch(
      `http://localhost:5000/fetch-item-upper/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    setDetails((prevItems) => {
      return [...prevItems, { ...data.item }];
    });
    console.log(data);
  };
  const detailsContext = {
    updateDetails: detailsHandler,
    updateUpperDeck: updateUpperDeck,
    details: details,
  };
  return (
    <DetailsContext.Provider value={detailsContext}>
      {props.children}
    </DetailsContext.Provider>
  );
};
export default DetailsProvider;
