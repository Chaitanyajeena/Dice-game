import { useState } from "react";
import styled from "styled-components"

const NumberSelector = ({seterror,error,Number,setNumber}) => {
    const arrnumber = [1, 2, 3, 4, 5, 6];

    const numberselectorhandler = (value) =>{
        setNumber(value)
        seterror("");
    }

    return (
        <NumberSelectorContainer>
            <p className="err">{error}</p>
            <div className="flex">
                {arrnumber.map((value, i) => (
                    <Box
                        isselected={
                            value === Number
                        }
                        key={i} 
                        onClick={() => numberselectorhandler(value) }
                        >{value}</Box>
                ))}
            </div>
            <p>Select Number</p>
        </NumberSelectorContainer>
    )
}

export default NumberSelector
const NumberSelectorContainer = styled.div`
        display: flex;
        flex-direction: column;
        text-align: end;
.flex{
    display: flex;
    gap: 24px;
    cursor: pointer;
}
p{
    font-size: 24px;
    font-weight: 700;
    font-family: "poppins",sans-serif;
}
.err{
    color: red;
}


`
const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    font-family: "poppins",sans-serif;
    background-color: ${(props) => props.isselected ? "black" : "white"};
    color: ${(props) => props.isselected ? "white" : "black"};    
` 