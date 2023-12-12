import React, { useEffect, useState } from "react"
function App() {
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState();
  const [score, setScore] = useState(0);
  const [rules, setRules] = useState(false);
  const [selected, setSelectd] = useState();
  const [housePick, setHousePick] = useState();
  const options = ["scissors", "spock", "paper", 'lizard', 'rock'];

  function checkResult() {
    if (!housePick) return;
    if (selected == 'scissors') {
      switch (housePick) {
        case 'scissors':
          setResult('DRAW');
          break;
        case 'spock':
          setResult('LOSE');
          handleScore(-1);
          break;
        case 'paper':
          setResult('WON');
          handleScore(1);
          break;
        case 'lizard':
          setResult('WON');
          handleScore(1);
          break;
        case 'rock':
          setResult('LOSE');
          handleScore(-1);
          break;
      }
    } else if (selected == 'spock') {
      switch (housePick) {
        case 'scissors':
          setResult('WON');
          handleScore(1);
          break;
        case 'spock':
          setResult('DRAW');
          break;
        case 'paper':
          setResult('LOSE');
          handleScore(-1);
          break;
        case 'lizard':
          setResult('LOSE');
          handleScore(-1);
          break;
        case 'rock':
          setResult('WON');
          handleScore(1);
          break;
      }
    } else if (selected == 'paper') {
      switch (housePick) {
        case 'scissors':
          setResult('LOSE');
          handleScore(-1);
          break;
        case 'spock':
          setResult('WON');
          handleScore(1);
          break;
        case 'paper':
          setResult('DRAW');
          break;
        case 'lizard':
          setResult('LOSE');
          handleScore(-1);
          break;
        case 'rock':
          setResult('WON');
          handleScore(1);
          break;
      }
    } else if (selected == 'lizard') {
      switch (housePick) {
        case 'scissors':
          setResult('LOSE');
          handleScore(-1);
          break;
        case 'spock':
          setResult('WON');
          handleScore(1);
          break;
        case 'paper':
          setResult('WON');
          handleScore(1);
          break;
        case 'lizard':
          setResult('DRAW');
          break;
        case 'rock':
          setResult('LOSE');
          handleScore(-1);
          break;
      }
    } else if (selected == 'rock') {
      switch (housePick) {
        case 'scissors':
          setResult('WON');
          handleScore(1);
          break;
        case 'spock':
          setResult('LOSE');
          handleScore(-1);
          break;
        case 'paper':
          setResult('LOSE');
          handleScore(-1);
          break;
        case 'lizard':
          setResult('WON');
          handleScore(1);
          break;
        case 'rock':
          setResult('DRAW');
          break;
      }
    }
  }

  function handleClick(button) {
    setShowResult(true);
    setSelectd(button);
    const num = Math.floor(Math.random() * (5));
    setTimeout(() => {
      setHousePick(options[num]);
      checkResult();
    }, 500);
  }

  function handleScore(last) {
    let temp = score;
    temp = temp + last;
    if (temp <= 0) {
      temp = 0;
    }
    setScore(temp);
  }

  function handleTryAgain() {
    setHousePick();
    setResult();
    setShowResult(false);
    setSelectd();
  }

  useEffect(() => {
    checkResult();
  }, [housePick]);

  return (
    <main className="game">
      <div className="game_header">
        <div onClick={handleTryAgain} className="game_header_title">
          <p>ROCK</p>
          <p>PAPER</p>
          <p>SCISSORS</p>
          <p>LIZARD</p>
          <p>SPOCK</p>
        </div>
        <div className="game_header_score">
          <div className="title">SCORE</div>
          <div className="score">{score}</div>
        </div>
      </div>
      <div className={`${showResult ? 'hide' : 'show'} game_playing`}>
        <div className="row1">
          <div onClick={() => handleClick('scissors')} className="scissors button"><img src="public\icon-scissors.svg" alt="" /></div>
        </div>
        <div className="row2">
          <div onClick={() => handleClick('spock')} className="spock button"><img src="public\icon-spock.svg" alt="" /></div>
          <div onClick={() => handleClick('paper')} className="paper button"><img src="public\icon-paper.svg" alt="" /></div>
        </div>
        <div className="row3">
          <div onClick={() => handleClick('lizard')} className="lizard button"><img src="public\icon-lizard.svg" alt="" /></div>
          <div onClick={() => handleClick('rock')} className="rock button"><img src="public\icon-rock.svg" alt="" /></div>
        </div>
      </div>
      <div className={`${showResult ? 'show' : 'hide'} game_result`} >
        <div className="game_result_left">
          <p>YOU PICKED</p>
          <div className={`${selected} button`}><img src={`../public/icon-${selected}.svg`} alt="" /></div>
        </div>
        <div className="game_result_right">
          <p>THE HOUSE PICKED</p>
          {housePick ? <div className={`${housePick} button`}><img src={`../public/icon-${housePick}.svg`} alt="" /></div> : <div className="loading"></div>}
        </div>
        {result ? <div className="game_result_middle">
          <p>YOU {result}</p>
          <button onClick={handleTryAgain}>PLAY AGAIN</button>
        </div>
          :
          <></>
        }
      </div>
      <div className="game_rules" onClick={() => setRules(true)}>Rules</div>
      <div onClick={() => setRules(false)} className={`${rules ? 'show' : 'hide'} game_popup`}>
        <div className="game_popup_content">
          <p>RULES</p>
          <img src="public\image-rules-bonus.svg" alt="" />
        </div>
      </div>
    </main>

  )
}

export default App
