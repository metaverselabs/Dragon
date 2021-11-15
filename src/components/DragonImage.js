/* eslint-disable @next/next/no-img-element */
// import Image from "next/image";
import { css } from "@emotion/react";
import { useResponsiveSize } from "../utils/useResponsiveSize";
// import dragon from "../../public/d.png";
import { mq } from "../styles/globals";
const dragon = require("../../public/d.png?webp");

const DragonImage = () => {
  const { resH } = useResponsiveSize();
  return (
    <div
      css={css`
        display: flex;
        position: relative;
        width: ${resH(408)}px;
        height: ${resH(399)}px;
        ${mq[2]} {
          width: ${resH(408) * 0.8}px;
          height: ${resH(399) * 0.8}px;
        }
        ${mq[1]} {
          width: ${resH(408) * 0.7}px;
          height: ${resH(399) * 0.7}px;
          /* font-size: 12px;
              line-height: 14px; */
        }
        ${mq[0]} {
          width: ${resH(408) * 0.6}px;
          height: ${resH(399) * 0.6}px;
          /* font-size: 10px;
              line-height: 12px; */
        }
      `}
    >
      <img
        src={dragon}
        alt={"dragon"}
        objectFit={"contain"}
        css={css`
          flex: 1;
          object-fit: contain;
          width: ${resH(408)}px;
          height: ${resH(399)}px;
          ${mq[2]} {
            width: ${resH(408) * 0.8}px;
            height: ${resH(399) * 0.8}px;
          }
          ${mq[1]} {
            width: ${resH(408) * 0.7}px;
            height: ${resH(399) * 0.7}px;
            /* font-size: 12px;
              line-height: 14px; */
          }
          ${mq[0]} {
            width: ${resH(408) * 0.6}px;
            height: ${resH(399) * 0.6}px;
            /* font-size: 10px;
              line-height: 12px; */
          }
        `}
      />
    </div>
  );
};

export { DragonImage };
