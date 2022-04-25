import React from 'react';
import RoutineItem from './RoutineItem';
import styled from 'styled-components';
const Title = styled.h2` 
    font-size:50px;
    text-align:center;

`
const Table = styled.table` 
 width: 100%;
    border: 1px solid #444444;
`
const Td = styled.td` 
  border: 1px solid #444444;
`
const RoutineList = ({users, onDel, onEdit}:any) => {
    return (
        <div>
            <Title className="users">루틴 리스트</Title>
            <Table>
                <colgroup>
                    <col className="w1" />
                    <col className="w2" />
                    <col className="w3" />
                </colgroup>
                <thead>
                    <tr>
                        <Td>운동이름</Td>
                        <Td>운동갯수</Td>
                        <Td>관리</Td>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user:any) => <RoutineItem key={user.id} user={user} onDel={onDel} onEdit={onEdit} />)
                    }
                </tbody>
            
            </Table>     
        </div>
    );
};

export default RoutineList;