import styled from "styled-components"
import Modal from "react-modal";
import { useState } from "react";
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
    
const customStyles = {
    content: {
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
    const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
    return (
       <ButtonWrapper>
            <Mainbtn onClick={openModal}>루틴만들기</Mainbtn>
            <Modal isOpen={modalIsOpen} style={customStyles}>
            <div>루틴만들기</div>
            <form>
            <input />
            <button>루틴만들기</button>
                </form>
                  <button onClick={closeModal}>close</button>
            </Modal>
            <Mypagebtn >루틴보기</Mypagebtn>
        </ButtonWrapper>
    )
}