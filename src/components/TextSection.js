import { css } from "@emotion/react";
import { useResponsiveSize } from "../utils/useResponsiveSize";
import { mq } from "../styles/globals";
import { VerticalGap } from "./VerticalGap";
import { BottomImage } from "./BottomImage";
import textImg from "../../public/text.png";
import { BreakLine } from "./BreakLine";

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
          font-family: KH;
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
          DRAGON is a metaverse token and created to release the unlimited
          potential of the Metaverse. Starting with our first collective
          metaverse estate - Dragon City (Genesis), Decentraland - a community
          district consisting of 6,485 parcels of Lands contributed by hundreds
          of members worldwide in 2017, we aim to build a brand-new{" "}
          <a
            css={aCSS}
            href="https://metaverse.finance"
            target="_blank"
            rel="noreferrer"
          >
            Metaverse Finance (MeFi)
          </a>{" "}
          in this disruptive space. There will be more Dragon Cities being built
          on different metaverse projects. After a long time of construction, we
          decided to go further. We create a{" "}
          <a
            css={aCSS}
            href="https://dragondao.io"
            target="_blank"
            rel="noreferrer"
          >
            Dragon DAO
          </a>
          , which is a Decentralized Autonomous Organization coordinating the
          future development of Dragon Cities. DRAGON also acts as the
          governance token in this organization.This is only the beginning, we
          will continue acquiring crypto lands and other metaverse assets funded
          by our DAO treasury.
        </p>
        <p>
          To celebrate the launch event of DRAGON, our first piece of DRAGON
          artwork Kios in Chaos, a mysterious ancient creature, will be
          auctioned on{" "}
          <a
            css={aCSS}
            style={{
              textDecoration: "underline",
            }}
            href="https://dragon.art"
            target="_blank"
            rel="noreferrer"
          >
            OpenSea
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
