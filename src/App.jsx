import { useState } from "react";
import "./App.css";

function App() {
  const [gameID, setGameID] = useState("");
  const [inGame, setInGame] = useState(false);

  const l = (log) => {
    console.log(log);
  };

  const createGame = (gameID) => {
    l(`created game with ${gameID}`);
  };

  const joinGame = (gameID) => {
    l(`joined game with ${gameID}`);
  };

  return (
    <>
      <div className="ChipTacToe">
        <h1>ChipTacToe</h1>
        {!inGame ? (
          <>
            <div className="handler">
              <input
                type="text"
                name=""
                id="gameID"
                value={gameID}
                onChange={(e) => {
                  setGameID(e.target.value);
                }}
              />
              <button
                onClick={() => {
                  joinGame(gameID);
                }}
              >
                Join
              </button>
              <button
                onClick={() => {
                  createGame(gameID);
                }}
              >
                Create
              </button>
              <span>game will be made later innit</span>
            </div>
          </>
        ) : (
          <>Ingame</>
        )}
      </div>
    </>
  );
}

export default App;
