import {  useSetRecoilState } from "recoil";
import { isDarkAtom } from "./atoms";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Helmet } from "react-helmet";
const Container = styled.div`
  width:100%;
   height:100vh;
    display: flex; 
    align-items: center; /* 수직 정렬 */
    justify-content: center; /* 수평 정렬 */
`;
const Title = styled.h1`
  @font-face {
      font-family: 'Pretendard-Regular';
      src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
      font-style: normal;
  }
  margin-top:  36px;
  margin-bottom:41px ;
  font-weight: 600;
  font-size: 44px;
`
const LoginDiv = styled.div`
  justify-content:center;
  user-select:none;
  text-align:center;
  background-color: #121212;
  width:400px;
  border-radius: 10px;
`
const Loader = styled.span` 
text-align:center;
display:block;
`

const Input = styled.input`
    width: 100%;
    border:none;
    outline:none;
    font-size:15px;
    height:25px;
    background: none;
    color:white;
`
const Inputs = styled.div`
    margin:auto;
    width: 352px;
    height: 42px;
    border: 2px solid #6066FF;
    box-sizing: border-box;
    border-radius: 20px;
    padding: 6px 10px;
    margin-bottom:22px;
`
const Button = styled.div`
  &:hover{
    cursor: pointer;  
    background-color: #9CA6FF;
  }
  border: 2px solid #9CA6FF;
  margin : 0 auto;
  background-color:#8B54FF;
  width: 176px;
  height: 42px;
  line-height: 40px;
  border-radius: 20px;
  margin-bottom: 17px;
`
const Expla = styled.div` 
  &:hover{
    cursor: pointer;
  }
`
function Main() {
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDarkAtom = () => setDarkAtom((prev) => !prev);
  return (
    <Container>
      <LoginDiv>
        <Title>켠김에 헬창까지</Title>
        <Inputs>
          <Input placeholder="username"></Input>
        </Inputs>
        <Inputs>
          <Input placeholder="username"></Input>
        </Inputs>
        <Button>LOGIN</Button>
        <Button>REGISTER</Button>
        <Expla>비회원으로 진행하기</Expla>
      </LoginDiv>
    </Container>
  );
}
export default Main;