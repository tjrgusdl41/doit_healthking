import styled from "styled-components";
import * as S from "./Video.style";
const Video = () => {
  const datas = [
    {
      title: "벤치프레스",
      link: "https://www.youtube.com/watch?v=0DsXTSHo3lU",
    },
    {
      title: "스쿼트",
      link: "https://www.youtube.com/watch?v=Fk9j6pQ6ej8",
    },
    {
      title: "데드리프트",
      link: "https://www.youtube.com/watch?v=EBjYQeeBI-0",
    },
    {
      title: "덤벨컬",
      link: "https://www.youtube.com/watch?v=3t03ehGkH-Q",
    },
    {
      title: "푸쉬업",
      link: "https://www.youtube.com/watch?v=EBjYQeeBI-0",
    },
    {
      title: "플랭크",
      link: "https://www.youtube.com/watch?v=3t03ehGkH-Q",
    },
    {
      title: "풀업",
      link: "https://www.youtube.com/watch?v=EBjYQeeBI-0",
    },
    {
      title: "덤벨컬",
      link: "https://www.youtube.com/watch?v=3t03ehGkH-Q",
    },
  ];
  return (
    <S.Wrapper>
      <S.Dropdown>
        {datas?.map((data) => {
          return (
            <S.YosoWrapper>
              <a
                style={{ fontSize: "40px", lineHeight: "100px" }}
                href={data.link}
                target="_blank"
              >
                {data.title} 영상
              </a>
            </S.YosoWrapper>
          );
        })}
      </S.Dropdown>
    </S.Wrapper>
  );
};
export default Video;
