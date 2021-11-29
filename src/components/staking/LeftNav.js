/* eslint-disable @next/next/no-img-element */
import { css } from "@emotion/react";
import { mq } from "../../styles/globals";
import Link from "next/link";
import { useResponsiveSize } from "../../utils/useResponsiveSize";
const larrow = require("../../../public/larrow.png?webp");

export const LeftNav = () => {
  const { resH, resW } = useResponsiveSize();
  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-right: auto;
        margin-top: ${resW(79)}px;
        cursor: pointer;
      `}
    >
      <Link href="/">
        <a>
          <img
            src={larrow}
            alt={"arrow"}
            css={css`
              margin-right: 9px;
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
            Back
          </span>
        </a>
      </Link>
    </div>
  );
};
