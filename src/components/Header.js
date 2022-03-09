import { css } from "@emotion/react";
import { WalletButton } from "./WalletButton";
import { useResponsiveSize } from "../utils/useResponsiveSize";
import { mq } from "../styles/globals";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export const Header = () => {
  // const { resH } = useResponsiveSize();
  const router = useRouter();
  console.log("router.pathname", router.pathname);

  return (
    <header
      css={css`
        font-family: Goldman;
        width: 100%;
        height: auto;
        background-color: black;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 1.3%;
        @media (max-width: 1100px) {
          margin-bottom: 24px;
        }
        position: relative;
      `}
    >
      <span
        css={css`
          font-family: Poppins;
          font-weight: 400;
          font-size: 28px;
          line-height: 28px;
          color: #ffffff;
          ${mq[1]} {
            line-height: 24px;
            font-size: 24px;
          }
          ${mq[0]} {
            line-height: 20px;
            font-size: 20px;
          }
        `}
      >
        Dragon
      </span>
      <ul
        css={css`
          width: 203px;
          height: 24px;
          left: 0;
          right: 0;
          margin: auto;

          position: absolute;
          /* background-color: antiquewhite; */
          /* position: absolute; */
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: Poppins;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 24px;
          color: #8b8b8b;
          text-decoration: none;
          list-style: none;
          @media (max-width: 1100px) {
            position: absolute;

            width: 190px;
          }
          ${mq[1]} {
            font-size: 13px;
            width: 150px;
          }
          ${mq[0]} {
            font-size: 10px;
            width: 130px;
          }
        `}
      >
        {[
          {
            href: "/",
            txt: "Home",
            Tag: ({ children, ...props }) => (
              <Link {...props}>
                <a>{children}</a>
              </Link>
            ),
          },
          {
            href: "/chi",
            txt: "CHI",
            Tag: ({ children, ...props }) => (
              <Link {...props}>
                <a>{children}</a>
              </Link>
            ),
          },
          {
            href: "https://docs.dragon.xyz/",
            txt: "Docs",
            Tag: ({ children, ...props }) => (
              <a target="_blank" rel="noreferrer" {...props}>
                {children}
              </a>
            ),
          },
        ].map((o) => {
          return (
            <li
              key={o.txt}
              css={css`
                color: ${router?.pathname === o.href ? "white" : "#8b8b8b"};
              `}
            >
              <o.Tag href={o.href}>{o.txt}</o.Tag>
            </li>
          );
        })}
      </ul>
      <WalletButton />
    </header>
  );
};
