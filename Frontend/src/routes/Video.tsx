import styled from "styled-components";

const Wrapper = styled.div`
    display:flex;
    width:1328px;
    height:150px;
    margin:0 auto;
    border-radius: 20px;
    border:2px solid #fff;
    margin-top:50px;
    justify-content: center;
    `
const Video = () => {
    return (
        <div>
            <Wrapper>
                <a style={{fontSize:"40px"}}href="https://www.youtube.com/watch?v=0DsXTSHo3lU">벤치프레스 영상</a>
            </Wrapper>
        </div>
    )
}
export default Video;