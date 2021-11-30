import { css } from "@emotion/react";
import { useResponsiveSize } from "../../utils/useResponsiveSize";
import { mq } from "../../styles/globals";
import { HorizontalGap } from "../HorizontalGap";

export const DataSection = ({ title, val, hint, hintcss, ...props }) => {
  const { resH, resW } = useResponsiveSize();
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: ${resW(220)}px;
      `}
      {...props}
    >
      <div
        css={css`
          display: flex;
          flex-direction: row;
          align-items: center;
          font-family: Poppins;
          font-style: normal;
          font-weight: bold;
          font-size: ${resW(36)}px;
          line-height: ${resW(54)}px;
          ${mq[1]} {
            font-size: ${resW(36) * 1.4}px;
            line-height: ${resW(54) * 1.4}px;
            flex-direction: column;
            align-items: flex-start;
          }
          ${mq[0]} {
            font-size: ${resW(36) * 1.7}px;
            line-height: ${resW(54) * 1.7}px;
            flex-direction: column;
            align-items: flex-start;
          }
          color: #ffffff;
        `}
      >
        <span>{title}</span>
        <HorizontalGap val={resW(28)} />
        <span>{val}</span>
      </div>
      <span
        css={css`
          font-family: Poppins;
          font-style: normal;
          font-weight: 600;
          font-size: ${resW(16)}px;
          line-height: ${resW(24)}px;
          ${mq[1]} {
            font-size: ${resW(16) * 1.4}px;
            line-height: ${resW(24) * 1.4}px;
            ${hintcss}/* overflow: visible;
            width: 90%;
            text-align: center; */
          }
          ${mq[0]} {
            font-size: ${resW(16) * 1.7}px;
            line-height: ${resW(24) * 1.7}px;
          }
          color: #8b8b8b;
        `}
      >
        {hint}
      </span>
    </div>
  );
};
