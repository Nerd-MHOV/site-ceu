import styled from "styled-components";
import {motion} from "framer-motion";

export const Container = styled(motion.header)`
  width: 100%;
  height: 80px;
  position: fixed;
  top:0;
  z-index: 999;
  padding: 10px 40px;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1000px;
    margin: 0 auto;
    div {
      display: flex;
      align-items: center;
      gap: 30px;
      height: 60px;
      text-transform: uppercase;
      h3 {
        font-weight: 300;
      }
      img {
        height: 100%;
      }
    }
    
  }
`