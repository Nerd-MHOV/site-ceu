import styled, {keyframes} from "styled-components";

export const colorCycle = keyframes`
    0%, 55% {
      filter: brightness(0);
    }
    11%, 33% {
      filter: none;
    }
`

export const TypographyHead = styled.div`
  position: absolute;
  top: 80px;
  text-align: center;
  width: 100%;
  padding: 40px;

  .titleHead {
    filter: brightness(0);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    animation: ${colorCycle} 8s ease-in-out infinite;
  }

  .titleHead:nth-child(1) {
    background-image: linear-gradient(90deg, #007cf0, #8ffffa);
  }

  .titleHead:nth-child(2) {
    background-image: linear-gradient(90deg, #656565, #fdcd30);
    animation-delay: 2.66s
  }

  .titleHead:nth-child(3) {
    background-image: linear-gradient(90deg, #ff4d4d, #f9cb28);
    animation-delay: 5.33s
  }
  p {
    color: gray;
    font-weight: 300;
    margin: 90px auto;
    @media (max-width: 800px) {
      margin-top: 40px;
    }
    @media (max-width: 600px) {
      opacity: 0;
    }
  }
`

