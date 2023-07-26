import { useEffect, useState, useContext } from "react";
import DetailsContext from "../../../store/context-details";
import "./LowerDeck.css";

const LowerDeck = () => {
  const [lowerdeck, setLowerDeck] = useState([]);
  const detailsCtx = useContext(DetailsContext);

  useEffect(() => {
    try {
      const fetchLower = async () => {
        const response = await fetch("http://localhost:5000/get-lower-desks", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();
        setLowerDeck([...data.lists]);
      };
      fetchLower();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const onClickHandler = async (deckId) => {
    setLowerDeck((prevDeck) =>
      prevDeck.map((deck) =>
        deck.id === deckId ? { ...deck, isClicked: true } : deck
      )
    );
    detailsCtx.updateDetails(deckId)
  };

  return (
    <>
      <div className="lower-deck">
        <h2 style={{ marginLeft: "18px" }}>Lower Deck</h2>
        {lowerdeck.map((deck) => (
          <button
            disabled={deck.reserved === null || deck.reserved === "bookedred"}
            className={`${deck.reserved} ${deck.isClicked ? "clicked" : ""}`}
            onClick={() => onClickHandler(deck.id)}
            key={deck.id}
          >
            {deck.id}
          </button>
        ))}
      </div>
    </>
  );
};

export default LowerDeck;
