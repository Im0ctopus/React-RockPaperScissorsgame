import React, { useEffect, useState } from "react"
function App() {
  const [result, setResult] = useState(false);
  const [score, setScore] = useState(0);
  const [rules, setRules] = useState(false);
  const [selected, setSelectd] = useState();

  function handleClick(button) {
    setResult(true);
    setSelectd(button);
  }

  useEffect(() => {
    //TODO - FAZER O ALEATORIO E VERIFICAR QUEM VENCEU
  }, [selected]);

  return (
    <main className="game">
      <div className="game_header">
        <div className="game_header_title">
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
      <div className={`${result ? 'hide' : 'show'} game_playing`}>
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
      <div className={`${result ? 'show' : 'hide'} game_result`} ></div>
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
