import styled from "styled-components";
import {motion} from "framer-motion";

export const Main = styled.main`
  .first {
    background: #c38440;
    overflow: hidden;

    .offset {
      width: 100%;
      height: 100%;
    }

    .a {
      background: #fdfdfd;
      height: 100%;
      display: flex;
      align-items: flex-end;

      .left-side {
        width: 50%;
        height: 100%;
        background: #0D0D0D;
      }

      .right-side {
        width: 50%;
        height: 100%;

        .right-image {
          background: #0D0D0D;
          width: 100%;
          height: 100%;
        }
      }
    }

    .b {
      background: #582534;
      width: 100%;
      height: 100%;
    }

    .c {
      background: #0a7397;
      width: 100%;
      height: 100%;
    }
  }

  .second {
    background: #42b079;
  }

  .third {
    background: #c87fe4;
  }

  .fourth {
    background: #368cdc;
  }
`;
export const Section = styled.div`
  position: relative;
`;
export const Sticky = styled(motion.div)`
  position: sticky;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
`;

