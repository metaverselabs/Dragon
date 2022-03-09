/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { css } from "@emotion/react";
import { useResponsiveSize } from "../utils/useResponsiveSize";
import { Header } from "../components/Header";
import { mq } from "../styles/globals";
import { DragonImage } from "../components/DragonImage";
import { TextSection } from "../components/TextSection";
import { BtnsImageSection } from "../components/BtnsImageSection/index";
import { FooterContent } from "../components/FooterContent";
import Link from "next/link";
const arrow = require("../../public/stakearrow.png?webp");
import { StakingLabel } from "../components/staking/stakingLabel";

const OuterDivCss = css`
  background-color: black;
  width: 100vw;
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
  return (
    <div css={OuterDivCss}>
      <div css={DivCss}>
        <Header />
        <DragonImage />
        <TextSection />
        <BtnsImageSection />
        {/* <StakingLabel resW={resW} arrow={arrow} /> */}
      </div>
      <footer css={FonterOuterCss}>
        <div css={Fonter}>
          <FooterContent />
        </div>
      </footer>
    </div>
  );
}
