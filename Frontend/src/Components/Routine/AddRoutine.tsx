import { BorderBottom } from '@material-ui/icons';
import React, { useState } from 'react';
import styled from 'styled-components';
const Title = styled.h2` 
    font-size:50px;
    text-align:center;

`
const FormContainer = styled.div` 
    text-align:center;
    width:100%;
`
const Input = styled.input`
border:0;
border-bottom:1px solid skyblue;
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
                <label>운동이름</label >
                    <Input type="text" name="name" value={name} onChange={inputChange}/>
                </p>
                <br></br>
            <p>
                <label>운동갯수</label>
                    <Input type="text" name="job" value={job} onChange={inputChange} />
                </p>
                    <br></br>
            <button>추가</button>
            </FormContainer>
        </form>
    );
};

export default AddRoutine;