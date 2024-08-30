import React, { useEffect, useState } from "react";
import "./App.css";
import GirlsImg from "./girls-image.jpg";
import BoysImg from "./boys-image.jpg";
import ImageMinus from "./minus.png";
import ImagePlus from "./add.png";

const ScoreCard = ({ teamName, teamDescription, teamImage, changeScore }) => {
  const [score, setScore] = useState(1);

  const updateScore = (type) => {
    if (type === "plus") {
      setScore(score + 1);
    } else if (type === "minus") {
      setScore(score - 1);
    }
  };

  useEffect(() => {
    changeScore(score);
  }, [score]);

  return (
    <div className="body-container">
      <div className="card-container">
        <img src={teamImage} alt="Pizza" className="card-image" />
        <h2 className="card-title">{teamName}</h2>
        <p className="card-description">{teamDescription}</p>

        <div className="card-score-conatainer">
          <img
            src={ImageMinus}
            alt="Minus"
            className="card-score-symbol"
            onClick={() => {
              //setQuantity(quantity-1)
              updateScore("minus");
            }}
          />
          <span className="card-score">{score}</span>

          <img
            src={ImagePlus}
            alt="Plus"
            className="card-score-symbol"
            onClick={() => {
              //setQuantity(quantity+1)
              updateScore("plus");
            }}
          />
        </div>
      </div>
    </div>
  );
};

const WinnerCard = ({ score1, score2, setShowWinner }) => {
  let winner = "";

  if (score1 === score2) {
    winner = " Match is Draw"
  }
  else if(score1 > score1){
    winner = "Team 1 Won"
  }
  else{
    winner = "Team 2 Won"
  }

  return (<div className="winner-card">
    <div className="winner-text">
    {winner}
    <button 
    type="button" 
    className="close-button" 
    onClick={()=>setShowWinner(false)}>Close</button>
    </div>
    
    </div>);
};

function App() {
  const [team1Score, setTeam1Score] = useState(0);
  const [team2Score, setTeam2Score] = useState(0);
  const [showWinner, setShowWinner] = useState(false);

  return (
    <div className="scorecard-main-conatiner">
      <h1 className="heading"> 🎯🏑⚽Score Keeper⚽🏑🎯</h1>

      <div className="scorecard-container">
        <ScoreCard
          teamName={"Nagpur Queens"}
          teamDescription={"We are the Queens of Nagpur"}
          teamImage={GirlsImg}
          changeScore={setTeam1Score}
        />
        <ScoreCard
          teamName={"Nagpur Kings"}
          teamDescription={"We are the Kings of Nagpur"}
          teamImage={BoysImg}
          changeScore={setTeam2Score}
        />
      </div>

      {showWinner ? (
        <WinnerCard score1={team1Score} score2={team2Score} setShowWinner={setShowWinner}/>
      ) : null}
      <button type="button" className="card-btn" onClick={()=>setShowWinner(true)}>
        Who won?
      </button>
    </div>
  );
}

export default App;
