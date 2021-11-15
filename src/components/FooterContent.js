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
// const mirror = require("../../public/mirror.png?inline");

const imgs = [
  {
    src: twitter,
    alt: "twitter",
    href: "https://twitter.com/DragonMetaverse",
  },
  {
    src: discord,
    alt: "discord",
    href: "https://dsc.gg/dragonmetaverse",
  },
  {
    src: github,
    alt: "github",
    href: "https://github.com/metaverselabs/Dragon",
  },
  // {
  //   src: mirror,
  //   alt: "mirror",
  //   href: "#",
  // },
];

const Right = () => {
  return (
    <div
      css={css`
        display: flex;
        margin-left: auto;
      `}
    >
      {imgs.map((obj) => {
        return (
          <a
            css={css`
              margin-left: 24px;
            `}
            key={obj.alt}
            href={obj.href}
            target="_blank"
            rel="noreferrer"
          >
            <BottomImage
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
            />
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
      <a
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
      </a>
      <a
        href={"https://docs.dragon.xyz/"}
        target={"_blank"}
        css={css`
          display: flex;
          align-items: center;
          cursor: pointer;
        `}
        rel="noreferrer"
      >
        <BottomImage
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
          src={doc}
          alt={"document"}
        />
        <span
          css={css`
            font-family: Poppins;
            color: #ffffff;
            font-size: 16px;
            line-height: 25px;
            padding-left: ${resW(15)}px;
            ${mq[1]} {
              font-size: 12px;
              line-height: 15px;
              /* transform: translateY(3px); */
            }
            ${mq[0]} {
              font-size: 9px;
              height: 13px;
              line-height: 13px;
              vertical-align: baseline;
              /* transform: translateY(3px); */
            }
          `}
        >
          Docs
        </span>
      </a>
    </div>
  );
};

export const FooterContent = () => {
  return (
    <div
      css={css`
        height: 35px;
        flex: 1;
        display: flex;
        align-items: center;
        padding-bottom: 12px;
      `}
    >
      <Left />
      <Right />
    </div>
  );
};
