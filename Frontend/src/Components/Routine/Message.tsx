import React, { useEffect } from 'react';

const Message = ({msg, isShow, setIsShow}:any) => {
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setIsShow(false)
        }, 3000)
        return()=>{
            clearTimeout(timer)
        }
    },[])
    return (
        <div className={`message ${isShow ? 'on' : ''}`}>
            {msg}
            
        </div>
    );
};

export default Message;