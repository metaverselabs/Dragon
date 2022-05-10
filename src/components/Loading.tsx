import { css, keyframes } from "@emotion/react";
import { GlobalStyle } from "../styles/globals";

const spinning = keyframes`
      0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }

`;
const spinner = css`
  width: 50px;
  height: 50px;
  border: 5px solid #f3f3f3; /* Light grey */
  border-top: 5px solid #383636; /* Black */
  border-radius: 50%;
  animation: ${spinning} 1.5s linear infinite;
`;

export const Loading = () => {
  return (
    <>
      <GlobalStyle />
      <div
        css={css`
          background-color: black;
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      >
        <div css={spinner} />
      </div>
    </>
  );
};
