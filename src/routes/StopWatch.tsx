import { useEffect } from "react"
import { useState } from "react"
import styled from "styled-components"
import Timer from "../Components/Timer"
import { Watchbtn } from "../Components/Watchbtn"
const WatchWrapper = styled.div`
    display:flex;
    width:1328px;
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
export const StopWatch = () => {
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [time, setTime] = useState(0);
    useEffect(() => {
        let interval:any = null;
        if (isActive && isPaused === false) {
            interval = setInterval(() => {
                setTime((time) => time + 10);
            }, 10);
        } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [isActive, isPaused]);
    const handleStart = () => {
        setIsActive(true);
        setIsPaused(false);
    };
    const handlePauseResume = () => {
        setIsPaused(!isPaused);
    };
    const handleReset = () => {
        alert(`운동을 ${Math.floor((time / 1000) % 60)} 초동안 하셨습니다`);
        setIsActive(false);
        setTime(0);
    }
    return (
        <>
            <WatchWrapper>
                <Timer time={time}/>
            </WatchWrapper>
            <ButtonWrapper>
                <Watchbtn
                    isActive={isActive}
                    isPaused={isPaused}
                    handleStart={handleStart}
                    handlePauseResume={handlePauseResume}
                    handleReset={handleReset}>

                </Watchbtn>
            </ButtonWrapper>
            
        </>
    )
}