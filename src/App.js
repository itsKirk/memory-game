import { useEffect, useState } from "react";
import Card from "./components/Card";
import "./index.css";
const faces = [
  { src: "/imgs/choco-1.jpg", matched: false },
  { src: "/imgs/crotchet-1.jpg", matched: false },
  { src: "/imgs/crystal-1.jpg", matched: false },
  { src: "/imgs/nuts-1.jpg", matched: false },
  { src: "/imgs/panes-1.jpg", matched: false },
  { src: "/imgs/petals-1.jpg", matched: false },
  { src: "/imgs/prism-1.jpg", matched: false },
  { src: "/imgs/yoke-1.jpg", matched: false },
];
function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const shuffle = () => {
    const newSet = [...faces, ...faces]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(newSet);
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(0);
  };
  useEffect(() => {
    setGameOver(cards.every((card) => card.matched));
  }, [turns]);
  useEffect(() => {
    shuffle();
  }, []);
  useEffect(() => {
    if (gameOver) {
    }
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceTwo.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetMoves();
      } else {
        setTimeout(() => resetMoves(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);
  const resetMoves = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurn) => prevTurn + 1);
    setDisabled(false);
  };
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };
  return (
    <div className="app">
      <h3 className="title">Memory Game</h3>
      <button onClick={shuffle}>New Game</button>
      <div className="card-grid">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
      <p>
        {gameOver && turns > 0
          ? `Game Over! You made ${turns} moves.`
          : `Turns Played: ${turns}`}
      </p>
    </div>
  );
}

export default App;
