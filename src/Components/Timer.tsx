import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
interface IProps{
    time: number;
}
const Digits = styled.span` 
font-size:108px;
line-height:150px;
`
const Timer = ({time}:IProps) => {
    return (
        <div className="timer">
            <Digits>
                {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
            </Digits>
            <Digits>
                {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
            </Digits>
            <Digits>
                {("0" + ((time / 10) % 100)).slice(-2)}
            </Digits>
        </div>
    );
}
export default Timer;