import styled from "styled-components"
import Modal from "react-modal";
import { useState } from "react";
import AddRoutine from "../Components/Routine/AddRoutine";
import MakeRoutine from "../Components/Routine/MakeRoutine";
import RoutineList from "../Components/Routine/RoutineList";
  const BtnOption = styled.div`
    user-select:none;
    cursor: pointer;
    &:hover{
    cursor: pointer;  
    color: #64BEFF;
    }`
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
    const ButtonWrapper = styled.div`
    display:flex;
    width:632px;
    margin:0 auto;
    margin-top:50px;
    justify-content: center;
    `
    const Mypagebtn = styled(Mainbtn)`
    border-radius: 0px 20px 20px 0px;
    background-color: black ;
    `
export const Routine = () => {
     const [modalIsOpen, setIsOpen] = useState(false);
    const [modalList, setModalList] = useState(false);
const customStyles = {
    content: {
    color:"black",
    width: "500px",
    height: "500px",
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
    function openList() { 
        setModalList(true);
    }
    function closeList() { 
        setModalList(false);
    }
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
    return (
       <ButtonWrapper>
            <Mainbtn onClick={openModal}>운동만들기</Mainbtn>
        <Modal isOpen={modalIsOpen} style={customStyles}>
          <MakeRoutine/>
              <button onClick={closeModal}>close</button>
            </Modal>
            <Mypagebtn onClick={openList}>운동목록</Mypagebtn>
        <Modal isOpen={modalList} style={customStyles}>루틴목록
          <button onClick={closeList}>close</button></Modal>

      </ButtonWrapper>
    )
}