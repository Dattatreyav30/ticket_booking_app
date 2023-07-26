import { useEffect, useState, useContext } from "react";
import DetailsContext from "../../../store/context-details";

const UpperDeck = () => {
  const [upperDeck, setUpperDeck] = useState([]);

  const detailsCtx = useContext(DetailsContext);

  useEffect(() => {
    try {
      const fetchLower = async () => {
        const response = await fetch("http://localhost:5000/get-upper-desks", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setUpperDeck([...data.lists]);
      };
      fetchLower();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const onClickHandler = (deckId) => {
    setUpperDeck((prevDeck) =>
      prevDeck.map((deck) =>
        deck.id === deckId ? { ...deck, isClicked: true } : deck
      )
    );
    detailsCtx.updateUpperDeck(deckId);
    console.log(deckId)
  };

  return (
    <>
      <div className="lower-deck">
        <h2 style={{ marginLeft: "18px" }}>Upper Deck</h2>
        {upperDeck.map((deck) => (
          <button
            disabled={deck.reserved === null || deck.reserved === "bookedred"}
            onClick={() => onClickHandler(deck.id)}
            id={deck.reserved}
            key={deck.id}
            className={`${deck.reserved} ${deck.isClicked ? "clicked" : ""}`}
          >
            {deck.id}
          </button>
        ))}
      </div>
    </>
  );
};

export default UpperDeck;
