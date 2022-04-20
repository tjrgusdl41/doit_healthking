import React, { useEffect, useRef, useState } from 'react';
import AddRoutine from './AddRoutine';
import RoutineList from './RoutineList';
import EditRoutine from './EditRoutine';
import Message from './Message';

const MakeRoutine = () => {
    const [isEdit, setIsEdit] = useState(false) //EditUser컴포넌트 사용상태
    const [current, setCurrent] = useState({}) //수정 선택된 사용자
    const no = useRef(3) //id
    const [msg, setMsg] = useState('') //알림 메시지 설정
    const [isShow, setIsShow] = useState(false) //메시지 보이기 상태 
    
    const userData = [
        {id : 1, name : '푸쉬업', job : '60'},
    ]
    const [users, setUsers] = useState(userData) // 전체 Users데이터

	//삭제
    const onDel= (id:any)=>{
        setUsers(users.filter(item => item.id !== id))
        setIsEdit(false)
        setIsShow(true)
        setMsg('운동을 삭제했습니다')
    }
    
    // 추가
    const onAdd = (form:any)=>{
        form.id = no.current++
        setUsers(users.concat(form))
        setIsShow(true)
        setMsg('운동을 추가했습니다')
    }

	//수정
    const onUpdate=(form:any)=>{
        setUsers(users.map(item => item.id=== form.id ? form : item))
        setIsShow(true)
        setMsg(`${form.name}  정보를 수정했습니다`)
    }

	//사용자 수정시 상태 설정
    const onEdit= (user:any)=>{
        setCurrent(user)
        setIsEdit(true)
        setIsShow(true)
        setMsg(`${user.name}  정보를 수정하세요`)
    }

    return (
        <div className="MakeRoutine">
            {
                isShow && <Message msg={msg} setIsShow={setIsShow} isShow={isShow}/> 
            }
            {
                isEdit ? <EditRoutine current={current} onUpdate={onUpdate} setIsEdit={setIsEdit}/> 
                : <AddRoutine onAdd={onAdd}/>
            }
            
            <RoutineList users={users} onDel={onDel} onEdit={onEdit}/>
            
        </div>
    );
};

export default MakeRoutine;