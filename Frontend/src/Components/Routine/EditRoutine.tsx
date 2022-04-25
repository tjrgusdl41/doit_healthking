import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
const Title = styled.h2` 
    font-size:50px;
    background: skyblue ;
    text-align:center;

`
const FormContainer = styled.div` 
    text-align:center;
    background:pink ;
    width:100%;
`
const EditUser = ({current, onUpdate, setIsEdit}:any) => {
    const [update, setUpdate] = useState(current)
    const {id, name, job} = update

    const inputChange=(e:any)=>{
        const {value, name} = e.target
        setUpdate({
            ...update,
            [name] : value
        })
    }

    useEffect(()=>{
        setUpdate(current)
    },[current]) //화면이 그려진 뒤에도 클릭한 current에 따라 setUpdate를 바꿔줘!

    const onSubmit=(e:any) =>{
        e.preventDefault()
        onUpdate(update)
        setIsEdit(false)
    }

    return (
        <form onSubmit={onSubmit}>
            <Title>운동수정</Title>
            <FormContainer>
            <p>
                <label>운동이름</label>
                <input type="text" value={name} name="name" onChange={inputChange}/>
            </p>
            <p>
                <label>운동개수</label>
                <input type="text" value={job} name="job" onChange={inputChange}/>
            </p>
            <p>
                <button type="submit">수정</button>
                <button type="button" onClick={()=>setIsEdit(false)}>취소</button>
                </p>
                </FormContainer>
        </form>
    );
};

export default EditUser;