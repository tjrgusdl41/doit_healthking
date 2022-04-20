import React from 'react';
import styled from 'styled-components';

const Td = styled.td` 
 border: 1px solid #444444;
`
const UserItem = ({user, onDel, onEdit}:any) => {
    const {id, name, job} = user

    return (
            <tr>
                <Td>{name}</Td>
                <Td>{job}</Td>
                <Td>
                    <button onClick={()=>onEdit(user)}>수정</button>
                    <button onClick={()=>onDel(id)}>운동끝</button>
                </Td>
            </tr>
    );
};

export default UserItem;