/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { css } from "@emotion/react";
import { mq } from "../../styles/globals";

export function StakingLabel({ resW, arrow }) {
  return (
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
  );
}
