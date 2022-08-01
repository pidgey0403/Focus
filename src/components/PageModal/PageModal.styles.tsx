import styled from "styled-components";
import img from "/Users/alexn/Documents/GitHub/Focus/src/background.jpg";

export const StyledModal = styled.div`
  width: 45%;
  margin: 0 auto;
  text-align: center;
  padding: 15px;
  padding-top: 50px;
  padding-bottom: 50px;

  justify-content: center;
  align-items: center;
  gap: 16px;

  position: relative;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);

  background: #282828;
  color: white;
  opacity: 1;
  mix-blend-mode: normal;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15),
    0px 25px 30px rgba(0, 0, 0, 0.35);
  border-radius: 10px;
`;

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  background: #9da9a0;
  background-image: url(${img});
  background-size: 100% 100%;
`;
