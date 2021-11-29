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
        <div
          css={css`
            display: flex;
            flex-direction: row;
            align-items: center;
            position: absolute;
            right: 0;
            bottom: ${resW(68)}px;
            cursor: pointer;
          `}
        >
          <Link href="/staking">
            <a>
              <span
                css={css`
                  font-family: Poppins;
                  font-style: normal;
                  font-weight: normal;
                  font-size: ${resW(28)}px;
                  line-height: 24px;
                  color: #8b8b8b;

                  ${mq[1]} {
                    font-size: ${resW(28) * 1.2}px;
                  }
                  ${mq[0]} {
                    font-size: ${resW(28) * 2}px;
                  }
                `}
              >
                Staking
              </span>

              <img
                src={arrow}
                alt={"arrow"}
                css={css`
                  margin-left: 9px;
                  width: ${resW(18)}px;
                  height: ${resW(16)}px;
                  ${mq[1]} {
                    width: ${resW(18) * 1.2}px;
                    height: ${resW(16) * 1.2}px;
                  }
                  ${mq[0]} {
                    width: ${resW(18) * 2}px;
                    height: ${resW(16) * 2}px;
                  }
                  object-fit: contain;
                `}
              />
            </a>
          </Link>
        </div>
      </div>
      <footer css={FonterOuterCss}>
        <div css={Fonter}>
          <FooterContent />
        </div>
      </footer>
    </div>
  );
}
