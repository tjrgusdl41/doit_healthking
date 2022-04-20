import React, { useState } from 'react';
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
const AddRoutine = ({onAdd}:any) => {
    const [form, setForm] = useState({
        name : '',
        job : ''
    })

    const {name, job} = form
    
    const inputChange= (e:any)=>{
        const {value, name} = e.target
        setForm({
            ...form,
            [name] : value
        })
    }
    

    const onSubmit=(e:any)=>{
        e.preventDefault()
        onAdd(form)
        setForm({
            name : "",
            job : ""
        })
    }

    return (
        <form onSubmit={onSubmit}>
            <Title>운동 추가</Title>
            <FormContainer>
            <p>
                <label>운동이름</label>
                <input type="text" name="name" value={name} onChange={inputChange}/>
            </p>
            <p>
                <label>운동갯수</label>
                <input type="text" name="job" value={job} onChange={inputChange} />
            </p>
            <button>추가</button>
            </FormContainer>
        </form>
    );
};

export default AddRoutine;