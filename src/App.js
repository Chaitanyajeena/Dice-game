import { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";

function App() {
  const [gamestart,setgamestart] = useState(false);

  const togglegamepaly = () =>{
    setgamestart((prev)=>(!prev));
  }



  return (
    <>
    {
      gamestart ? <GamePlay/> :  <StartGame toggle={togglegamepaly}/>
    }
    </>
  );
}

export default App;