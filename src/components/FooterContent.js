import { css } from "@emotion/react";
import { BottomImage } from "./BottomImage";
import doc from "../../public/doc.png?inline";
// import twitter from "../../public/twitter.png";
// import discord from "../../public/discord.png";
// import github from "../../public/github.png";
// import mirror from "../../public/mirror.png";
import { useResponsiveSize } from "../utils/useResponsiveSize";
import { mq } from "../styles/globals";
const twitter = require("../../public/twitter.png?inline");
const discord = require("../../public/discord.png?inline");
const github = require("../../public/github.png?inline");
const medium = require("../../public/medium.png?inline");
const box = require("../../public/box.png?inline");
// const mirror = require("../../public/mirror.png?inline");

const imgs = [
  {
    src: twitter,
    alt: "Twitter",
    href: "https://twitter.com/dragondao_",
  },
  {
    src: discord,
    alt: "Discord",
    href: "https://dsc.gg/DragonMetaverse",
  },
  // {
  //   src: github,
  //   alt: "Github",
  //   href: "https://github.com/CHItoken",
  // },
  {
    src: medium,
    alt: "Mirror",
    href: "https://mirror.xyz/dragonmetaverse.eth",
  },
];

const Right = ({ cssstyle }) => {
  return (
    <div
      css={css`
        display: flex;
        width: 515px;
        justify-content: space-around; /* margin-left: auto; */
        /* margin-right: 10%; */
        ${cssstyle}
        ${mq[1]} {
          width: 70%;
        }
      `}
    >
      {imgs.map((obj) => {
        return (
          <a
            css={css`
              margin-left: 24px;
              font-family: "Poppins";
              font-style: normal;
              font-weight: 400;
              font-size: 16px;
              /* line-height: 28px; */
              /* identical to box height, or 175% */

              text-align: justify;

              color: #8b8b8b;
            `}
            key={obj.alt}
            href={obj.href}
            target="_blank"
            rel="noreferrer"
          >
            <span>{obj.alt}</span>
            {/* <BottomImage
              styleCss={css`
                ${mq[1]} {
                  width: 15px;
                  height: 15px;
                }
                ${mq[0]} {
                  width: 13px;
                  height: 13px;
                }
              `}
              imgCss={css`
                ${mq[1]} {
                  width: 15px;
                  height: 15px;
                }
                ${mq[0]} {
                  width: 13px;
                  height: 13px;
                }
              `}
              width={"25px"}
              height={"25px"}
              src={obj.src}
              alt={obj.alt}
            /> */}
          </a>
        );
      })}
    </div>
  );
};
const Left = () => {
  const { resW } = useResponsiveSize();
  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
        align-items: center;
      `}
    >
      {/* <a
        css={css`
          margin-right: 24px;
        `}
        href={"https://blog.dragon.xyz/"}
        target="_blank"
        rel="noreferrer"
      >
        <BottomImage
          styleCss={css`
            ${mq[1]} {
              width: ${42 * 0.6}px;
              height: ${24 * 0.6}px;
            }
            ${mq[0]} {
              width: ${42 * 0.52}px;
              height: ${24 * 0.52}px;
            }
          `}
          imgCss={css`
            ${mq[1]} {
              width: ${42 * 0.6}px;
              height: ${24 * 0.6}px;
            }
            ${mq[0]} {
              width: ${42 * 0.52}px;
              height: ${24 * 0.52}px;
            }
          `}
          width={"42px"}
          height={"24px"}
          src={medium}
          alt={"medium"}
        />
      </a> */}
      <div
        // href={"https://docs.dragon.xyz/"}
        // target={"_blank"}
        // rel="noreferrer"
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;
          /* cursor: pointer; */
          transform: translateY(2.5px);
        `}
      >
        <BottomImage
          styleCss={css`
            width: 45px;
            height: 40px;
            ${mq[1]} {
              width: ${45 * 0.6}px;
              height: ${40 * 0.6}px;
            }
            ${mq[0]} {
              width: ${45 * 0.4}px;
              height: ${40 * 0.4}px;
            }
          `}
          imgCss={css`
            width: 45px;
            height: 40px;
            ${mq[1]} {
              width: ${45 * 0.6}px;
              height: ${40 * 0.6}px;
            }
            ${mq[0]} {
              width: ${45 * 0.4}px;
              height: ${40 * 0.4}px;
            }
          `}
          // width={"25px"}
          // height={"25px"}
          src={box}
          alt={"document"}
        />
        <span
          css={css`
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: Cabin;
            color: #ffffff;
            font-size: 16px;
            line-height: 19px;
            padding-left: ${resW(6)}px;
            ${mq[1]} {
              font-size: 12px;
              line-height: 15px;
              /* transform: translateY(3px); */
            }
            ${mq[0]} {
              font-size: 9px;
              height: 10px;
              line-height: 11px;
              vertical-align: baseline;
              /* transform: translateY(3px); */
            }
          `}
        >
          Metaverse Labs
        </span>
      </div>
    </div>
  );
};

export const FooterContent = ({ cssstyle }) => {
  return (
    <div
      css={css`
        /* height: 35px; */
        flex: 1;
        display: flex;
        align-items: center;
        padding-bottom: 12px;
        justify-content: center;
      `}
    >
      {/* <Left /> */}
      <Right cssstyle={cssstyle} />
    </div>
  );
};
