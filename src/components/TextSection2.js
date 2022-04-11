import { css } from "@emotion/react";
import { useResponsiveSize } from "../utils/useResponsiveSize";
import { mq } from "../styles/globals";
import { VerticalGap } from "./VerticalGap";
import { BottomImage } from "./BottomImage";
import textImg from "../../public/text.png";
import { BreakLine } from "./BreakLine";
import { TOKEN_ADDR } from "../../constants";
const Colorspan = ({ children }) => (
  <span
    css={css`
      color: white;
    `}
  >
    {children}
  </span>
);

const aCSS = css`
  ${"" /* color: #f9f600; */}
  cursor: pointer;
`;

export const TextSection = () => {
  const { resH } = useResponsiveSize();
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        z-index: 1;
      `}
    >
      <VerticalGap val={resH(44)} />
      <div
        css={css`
          font-family: "Poppins";
          width: 79.8%;
          color: #e9e9e9;
          text-align: justify;
          font-size: ${resH(16)}px;
          line-height: ${resH(28)}px;
          ${mq[1]} {
            width: 70%;
            font-size: ${resH(16)}px;
            line-height: ${resH(28)}px;
          }
          ${mq[0]} {
            width: 80%;
            font-size: ${resH(16)}px;
            line-height: ${resH(28)}px;
          }

          > p:not(:last-child) {
            margin-bottom: 10px;
          }
        `}
      >
        <p>
          Dragon or Dragon Metaverse, is a collective space initially built on
          our first cultural community, Dragon City (Genesis), Decentraland.
          Dragon is expected to be a fantasy world native to the Metaverse,
          consisting of cities built on different Metaverse platforms and
          governed through Dragon DAO, a decentralized autonomous organization.
        </p>
        <p>
          With the launch of CHI, a governance token of Dragon DAO, we are going
          to unleash the ultimate potential of the Metaverse. CHI, with no
          economic value, performs as a fluid medium in Dragon, irrigates the
          community, fertilizes the talents, encourages creativity, and links
          the people togethΞr to build an open world.
        </p>
        <p>
          CHI (Ξ) is deployed on the Ethereum mainnet at{" "}
          <a
            css={aCSS}
            href={`https://etherscan.io/address/${TOKEN_ADDR}`}
            target="_blank"
            rel="noreferrer"
          >
            {TOKEN_ADDR}
          </a>
          .
        </p>
      </div>
    </div>
  );
};

// {/* <h1
//   css={css`
//     font-family: Poppins;
//     font-size: 56px;
//     line-height: 56px;
//     color: #ffffff;
//     font-weight: 500;
//     letter-spacing: 0.04em;
//     ${mq[1]} {
//       font-size: 40px;
//     }
//     ${mq[0]} {
//       font-size: 35px;
//     }
//   `}
// >
//   D<Colorspan>R</Colorspan>A<Colorspan>G</Colorspan>O
//   <Colorspan>N</Colorspan>
// </h1>
// {/* <BottomImage
//   src={textImg}
//   alt={"dragon"}
//   width={`${resH(234)}px`}
//   height={`${resH(71)}px`}
// /> */}
// <VerticalGap val={resH(12)} />
// <span
//   css={css`
//     font-size: 16px;
//     line-height: 20px;
//     color: #8b8b8b;
//     /* font-weight: bold; */
//     font-family: Poppins-Bold;
//     font-style: normal;
//     font-weight: normal;
//     font-size: 20px;
//     line-height: 20px;
//     ${mq[1]} {
//       font-size: 17px;
//     }
//     ${mq[0]} {
//       font-size: 14px;
//     }
//   `}
// >
//   A Metaverse Token
// </span>{" "}
// */}
