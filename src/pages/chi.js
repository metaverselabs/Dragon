/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { css } from "@emotion/react";
import { useResponsiveSize } from "../utils/useResponsiveSize";
import { Header } from "../components/Header";
import { mq } from "../styles/globals";
import { FooterContent } from "../components/FooterContent";
import { LeftNav } from "../components/staking/LeftNav";
import { VerticalGap } from "../components/VerticalGap";
import { InfoDisplay } from "../components/staking/InfoDisplay";
import { StakePanel } from "../components/staking/StakePanel";
import { ClaimPanel } from "../components/staking/ClaimPanel";
import { FooterWrapper } from "../components/FooterWrapper";
import { BreakLine } from "../components/BreakLine";
import { useWindowSize } from "../utils/useWindowSize";

const OuterDivCss = css`
  background-color: black;
  width: 100%;
  /* min-height: 100vh; */

  display: flex;
  align-items: center;
  ${"" /* justify-content: center; */}
  flex-direction: column;
`;

const DivCss = css`
  flex: 1;
  width: 72.5%;
  /* min-height: 95%; */
  /* background-color: aliceblue; */
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  ${mq[1]} {
    width: 80%;
  }
  ${mq[0]} {
    width: 90%;
  }
`;

const FonterOuterCss = css`
  ${
    "" /* position: fixed;
  bottom: 0; */
  }
  height: 5%;
  width: 100%;
  /* background-color: aliceblue; */
  /* border-top: 1px solid rgba(255, 255, 255, 0.3); */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Fonter = css`
  height: 5%;
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

export default function Home() {
  const { resH, resW } = useResponsiveSize();
  const { winWidth } = useWindowSize();
  return (
    <div css={OuterDivCss}>
      <div css={DivCss}>
        <Header />
        <BreakLine
          cssStyle={css`
            width: ${winWidth - 15}px;
            height: 1px;
            background-color: #505050;
          `}
        />
        {/* <LeftNav /> */}
        <VerticalGap val={190} />

        <InfoDisplay />
        <VerticalGap val={resH(30)} />
        <div
          css={css`
            width: ${resW(980)}px;
            height: ${resH(170)}px;
            display: flex;
            flex: 1;
            flex-direction: row;
            justify-content: space-between;
            ${mq[1]} {
              flex-direction: column;
              justify-content: flex-start;
            }
            ${mq[0]} {
              flex-direction: column;
            }
          `}
        >
          <StakePanel />
          <ClaimPanel />
        </div>
      </div>
      <VerticalGap val={186} />
      <BreakLine
        cssStyle={css`
          width: ${winWidth - 15}px;
          height: 1px;
          background-color: #505050;
        `}
      />
      <FooterWrapper />
    </div>
  );
}
