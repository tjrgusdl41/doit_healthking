import {  useSetRecoilState } from "recoil";
import { isDarkAtom } from "../atoms";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import * as S from "./Login.style"
function Login() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    console.log(data)
    const body = {
      id: data.idform,
      pw: data.pwform,
    };
    // login통신 로직 로그인 되면 usestate true로 바꿔줘야함
    const AdminLogin = async () => {
      try {
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/login`, body);
        if (response.status == 200) {
          console.log(response);
          alert("로그인에 성공하였습니다");
          window.location.href="/mainpage"
        }
      } catch (err) {
        alert("로그인에 실패하였습니다");
        console.log(err);
      }
    };
    AdminLogin();
  };
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDarkAtom = () => setDarkAtom((prev) => !prev);
  return (
    <S.Container>
      <S.LoginDiv>
        <form onSubmit={handleSubmit(onSubmit)}>
        <S.Title>켠김에 헬창까지</S.Title>
        <S.Inputs>
          <S.Input
          type="text"
          placeholder="아이디"
          {...register("idform", {
            required: true,
          })}
        />
        </S.Inputs>
        <S.Inputs>
           <S.Input
          placeholder="비밀번호"
          type="password"
          {...register("pwform", {
            required: true,

          })}
        />
        </S.Inputs>
          <S.Button onSubmit={onSubmit} type="submit">LOGIN</S.Button>
          </form>
        <S.Button>REGISTER</S.Button>
        <Link to='/mainpage'><S.Expla>비회원으로 진행하기</S.Expla></Link>
      </S.LoginDiv>
      
    </S.Container>
  );
}
export default Login;