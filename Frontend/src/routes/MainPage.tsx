import { useRouteMatch,Link, Switch, Route } from "react-router-dom"
import styled from "styled-components"
import { Calender } from "./Calender"
import { Routine } from "./Routine"
import { StopWatch } from "./StopWatch"
import Video from "./Video/Video"

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
    width:1300px;
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
    const BtnOption = styled.div`
    user-select:none;
    cursor: pointer;
    &:hover{
    cursor: pointer;  
    color: #64BEFF;
    }
    `
    const Mainbtn = styled(BtnOption)` 
    font-size: 38px;
    text-align:center;
    color:white;
    width: 316px;
    height: 93px;
    border-radius: 20px 0px 0px 20px;
    line-height :90px;
    color:white; 
    border: 2px solid #FFFFFF;
    `
    const Mypagebtn = styled(Mainbtn)`
    border-radius: 0px 20px 20px 0px;
    background-color: black ;
    `
    const Yoosobtn = styled(BtnOption)<{isActive:boolean}>`
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
    const FirstBtn = styled(Yoosobtn)` 
    margin:0;
    `
export const MainPage = () => {
    const dayMatch = useRouteMatch("/mainpage/calendar");
    const routineMatch = useRouteMatch("/mainpage/routine");
    const watchMatch = useRouteMatch("/mainpage/stopwatch");
    return (
        <Wrapper>
            <Main>
                <ButtonWrapper>
                    <Mainbtn>
                        <Link to={`/mainpage`}>
                            메인페이지
                        </Link>
                    </Mainbtn>
                    <Mypagebtn>마이페이지</Mypagebtn>
                </ButtonWrapper>
                <YoosoWrapper>
                    <FirstBtn isActive={dayMatch! == null}>
                        <Link to={`/mainpage/stopwatch`}>
                            기록
                        </Link>
                    </FirstBtn>
                    <Yoosobtn isActive={routineMatch! == null}>
                        <Link to={`/mainpage/routine`}>
                            운동
                        </Link>
                    </Yoosobtn>
                    <Yoosobtn isActive={dayMatch! == null}>
                        <Link to={`/mainpage/calendar`}>
                            날짜
                        </Link>
                    </Yoosobtn>
                    <Yoosobtn isActive={dayMatch! == null}>
                        <Link to={`/mainpage/video`}>
                            영상
                        </Link>
                    </Yoosobtn>
                    <Yoosobtn isActive={dayMatch! == null}>
                        <Link to={`/mainpage/`}>
                            커뮤
                        </Link>
                    </Yoosobtn>
                    
                </YoosoWrapper>
                <Switch>
                    <Route path={`/mainpage/routine`}>
                        <Routine/>
                    </Route>
                    <Route path={`/mainpage/stopwatch`}>
                        <StopWatch/>
                    </Route>
                    <Route path={`/mainpage/video`}>
                        <Video/>
                    </Route>
                    <Route path={`/mainpage/calendar`}>
                        <Calender/>
                    </Route>
                </Switch>
            </Main>
        </Wrapper>
    )
}