/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { css } from "@emotion/react";
import { useResponsiveSize } from "../utils/useResponsiveSize";
import { Header } from "../components/Header";
import { mq } from "../styles/globals";
import { DragonImage } from "../components/DragonImage";
import { TextSection } from "../components/TextSection2";
import { BtnsImageSection } from "../components/BtnsImageSection/index";
import Link from "next/link";
const arrow = require("../../public/stakearrow.png?webp");
import { StakingLabel } from "../components/staking/stakingLabel";
import { BreakLine } from "../components/BreakLine";
import { VerticalGap } from "../components/VerticalGap";
import { useWindowSize } from "../utils/useWindowSize";
import { FooterWrapper } from "../components/FooterWrapper";

const OuterDivCss = css`
  background-color: black;
  width: 100%;
  min-height: 100vh;

  display: flex;
  align-items: center;
  ${"" /* justify-content: center; */}
  flex-direction: column;
`;

const DivCss = css`
  flex: 1;
  width: 72.5%;
  min-height: 95%;
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

export default function Home() {
  const { resH, resW } = useResponsiveSize();
  const { winWidth } = useWindowSize();
  return (
    <div css={OuterDivCss}>
      <div css={DivCss}>
        <Head>
          <title>Dragon Metaverse | DragonDAO (CHI)</title>
        </Head>
        <Header />
        <BreakLine
          cssStyle={css`
            width: ${winWidth - 15}px;

            height: 1px;
            background-color: #505050;
          `}
        />
        <VerticalGap val={42} />
        <DragonImage />
        <TextSection />

        <BtnsImageSection />
        <BreakLine
          cssStyle={css`
            width: ${winWidth - 15}px;
            height: 1px;
            background-color: #505050;
          `}
        />
        {/* <StakingLabel resW={resW} arrow={arrow} /> */}
      </div>
      <FooterWrapper />
    </div>
  );
}
