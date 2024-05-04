import { useState } from "react";
import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RoleDice from './RoleDice'

const GamePlay = () => {
  const [score,setscore] = useState(0);
  const [Number, setNumber] = useState();
  const [currentDice,setcurrentDice] = useState(1);
  const [error,seterror] = useState("");

  const genrate = (min,max) => {
    // console.log(Math.floor(Math.random() * (max - min) + min));
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if(!Number){
      seterror("You have not selected any number");
      return;
    }
    
    const randomnumber =  genrate(1,7);

    setcurrentDice((prev) => randomnumber);

    if(Number === randomnumber){
      setscore((prev)=> prev + randomnumber);
    }else{
      setscore((prev)=> prev - 2);
    }

    setNumber(undefined);
  }



  return (
    <Maincontainer>
        <div className='top_section'>
        <TotalScore score={score}/>
        <NumberSelector
        error = {error}
        seterror ={seterror}
        Number = {Number}
        setNumber = {setNumber}
        />
        </div>
        <RoleDice 
        currentDice = {currentDice}
        roleDice = {roleDice}
        />
    </Maincontainer>
  )
}

export default GamePlay

const Maincontainer = styled.main`
padding-top: 10px;
.top_section{
    display: flex;
    justify-content: space-around;
    align-items: end;
}
`