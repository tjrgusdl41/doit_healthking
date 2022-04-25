import styled from "styled-components"
interface IBtnProps{
    isActive : boolean,
    isPaused: boolean,
    handleStart: any,
    handlePauseResume: any,
    handleReset: any,
}
const BtnOption = styled.div` 
    font-size: 38px;
    text-align:center;
    user-select:none;
    cursor: pointer;
    &:hover{
    cursor: pointer;  
    color: #64BEFF;
    }
    `
    const ResetBtn = styled(BtnOption)` 
    font-size: 38px;
    text-align:center;
    color:black;
    width: 316px;
    height: 93px;
    border-radius: 20px 0px 0px 20px;
    line-height :90px;
    color:white; 
    border: 2px solid #FFFFFF;
` 
const PasueBtn = styled(ResetBtn)` 
    border-radius: 0px 20px 20px 0px;
    background-color: black ;
`
const StartButton = styled(BtnOption)` 
    width: 316px;
    height: 93px;
    border-radius: 20px;
    line-height :90px;
    color:white; 
    border: 2px solid #FFFFFF;
`
export const Watchbtn = ({ isActive, isPaused, handleStart, handlePauseResume, handleReset }: any) => {
    
    return (
        <>{isActive ?  <>
        <ResetBtn onClick={handleReset}>운동종료</ResetBtn>
            <PasueBtn onClick={handlePauseResume}>{isPaused ? "계속" :"퍼즈" }</PasueBtn>
        </> : <StartButton onClick={handleStart}>운동시작</StartButton> }</>
    )
}