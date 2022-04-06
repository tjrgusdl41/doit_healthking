import styled from "styled-components"
const WatchWrapper = styled.div`
    display:flex;
    width:1000px;
    height:150px;
    margin:0 auto;
    border-radius: 20px;
    border:2px solid #fff;
    margin-top:50px;
    justify-content: center;
    `
    const ButtonWrapper = styled.div`
    display:flex;
    width:632px;
    margin:0 auto;
    margin-top:50px;
    justify-content: center;
    `
    const BtnOption = styled.div` 
    font-size: 38px;
    text-align:center;
    `
const StartButton = styled(BtnOption)` 
    width: 316px;
    height: 93px;
    border-radius: 20px;
    line-height :90px;
    color:white; 
    border: 2px solid #FFFFFF;
`
export const StopWatch = () => {
    return (
        <>
            <WatchWrapper>
            00:00:00
            </WatchWrapper>
            <ButtonWrapper>
                <StartButton>
                운동시작
            </StartButton>
            
            </ButtonWrapper>
            
        </>
    )
}