import styled from "styled-components"

export const MainPage = () => {
    const Wrapper = styled.div`
    width:100%;
    height:100vh;
    display: flex; 
    align-items: center; /* 수직 정렬 */
    justify-content: center; /* 수평 정렬 */
    `
    const Main = styled.div` 
    width: 1760px;
    height: 800px;
    margin:auto;
    border: 3px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 20px;
    `
    const YoosoWrapper = styled.div` 
    display:flex;
    width:1328px;
    margin:0 auto;
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
    const BtnOption = styled.div `
    user-select:none;
    cursor: pointer;
    &:hover{
    cursor: pointer;  
    color: #64BEFF;
  }
    `
    const Mainbtn = styled(BtnOption)` 
    cursor: pointer;
    font-size: 38px;
    text-align:center;
    color:black;
    width: 316px;
    height: 93px;
    left: 644px;
    top: 144px;
    border-radius: 20px 0px 0px 20px;
    line-height :90px;
    color:white; 
    border: 2px solid #FFFFFF;
    `
    const Mypagebtn = styled(Mainbtn)`
    border-radius: 0px 20px 20px 0px;
    background-color: black ;
    `
    const Yoosobtn = styled(BtnOption)`
    font-size: 38px;
    text-align:center;
    border: 2px solid #FFFFFF;
    color:white;
    width: 212px;
    height: 104px;
    line-height :100px;
    margin-left:67px;
    border-radius: 20px;
    `
    return (
        <Wrapper>
            <Main>
                <ButtonWrapper>
                    <Mainbtn >메인페이지</Mainbtn>
                    <Mypagebtn>마이페이지</Mypagebtn>
                </ButtonWrapper>
                <YoosoWrapper>
                    <Yoosobtn>기록 </Yoosobtn>
                    <Yoosobtn>루틴</Yoosobtn>
                    <Yoosobtn>날짜</Yoosobtn>
                    <Yoosobtn>운동영상</Yoosobtn>
                    <Yoosobtn>커뮤니티</Yoosobtn>
                </YoosoWrapper>
            </Main>
        </Wrapper>
    )
}