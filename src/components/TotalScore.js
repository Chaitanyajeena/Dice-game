import styled from "styled-components"

const TotalScore = ({score,setscore}) => {
  return (
    <>
      <ScoreContainer>
            <h1>{score}</h1>
            <p>Total Score</p>
        </ScoreContainer>
    </>
  )
}

export default TotalScore

const ScoreContainer = styled.div`
max-width: 200px;
text-align: center;
    h1{
        font-size: 100px;
        font-family: "poppins",sans-serif;
        line-height: 100px;
    }
    p{
        font-size: 24px;
        font-family: "poppins",sans-serif;
        font-weight: 600;
    }


`