import { useState,useRef} from "react";
export default function Player() {
  const [playerName,setPlayerName]=useState(null)
  // const [submitted,setSubmitted]=useState(false)
  const playerNames=useRef()

  function handleClick(){
    console.log(playerNames.current)
    setPlayerName(playerNames.current.value)
    playerNames.current.value=''
  }


  return (
    <section id="player">
      <h2>Welcome {playerName??'unknown entities'}</h2>
      <p>
        <input type="text" ref={playerNames}/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
