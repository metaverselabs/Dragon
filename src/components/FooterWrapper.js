import { css } from "@emotion/react";
import { mq } from "../styles/globals";
import { FooterContent } from "./FooterContent";
import { VerticalGap } from "./VerticalGap";

export const FooterWrapper = () => {
  return (
    <footer css={FonterOuterCss}>
      <VerticalGap val={47} />
      <div css={Fonter}>
        <FooterContent />
      </div>
      <VerticalGap val={44} />
      <span
        css={css`
          font-family: "Poppins";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          color: #8b8b8b;
          /* line-height: 28px; */
          /* identical to box height, or 175% */

          text-align: center;
        `}
      >
        {"Follow us! More will come soon!"}
      </span>
    </footer>
  );
};
const FonterOuterCss = css`
  ${
    "" /* position: fixed;
bottom: 0; */
  }
  height: 190px;
  width: 100%;
  /* background-color: aliceblue; */
  /* border-top: 1px solid rgba(255, 255, 255, 0.3); */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
`;
const Fonter = css`
  width: 72.5%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  ${mq[1]} {
    width: 80%;
  }
  ${mq[0]} {
    width: 90%;
  }
`;
