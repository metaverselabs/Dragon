import { css } from "@emotion/react";
import { useResponsiveSize } from "../../utils/useResponsiveSize";
import { Button } from "../Button";
import { HorizontalGap } from "../HorizontalGap";
import { StakePopupTrigger } from "../Popup";
import { LpInfo } from "./LpInfo";

export const StakePanel = () => {
  const { resH, resW } = useResponsiveSize();
  return (
    <div
      css={css`
        width: ${resW(644)}px;
        height: ${resH(266)}px;
        border: solid 1.5px transparent;
        background-image: linear-gradient(black, black),
          linear-gradient(to bottom right, #e57d44, #f9f600);
        background-origin: border-box;
        background-clip: content-box, border-box;
        border-radius: 16px;
        display: flex;
        align-items: center;
        flex-direction: column;
      `}
    >
      <LpInfo />
      <div
        css={css`
          height: 1px;
          width: ${resW(484)}px;
          background-color: #444444;
        `}
      />
      <div
        css={css`
          width: 100%;
          height: ${resH(116)}px;
          display: flex;
          align-items: center;
          /* flex-direction: column; */
          /* background-color: azure; */
        `}
      >
        <HorizontalGap val={resW(80)} />
        <Button
          styleCss={css`
            /* min-width: ${resW(170)}px;
            height: ${resH(44)}px;
            background: #2d2d2d; */
          `}
          btnStyleCss={css`
            color: #e57d44;
            min-width: ${resW(170)}px;
            height: ${resH(44)}px;
            background: #2d2d2d;
            transition: transform 0.5s;
            border-radius: 36px;
          `}
        >
          Unstake
        </Button>
        <HorizontalGap val={resW(24)} />
        <StakePopupTrigger>
          <Button
            btnStyleCss={css`
              transition: transform 0.5s;
              min-width: ${resW(290)}px;
              height: ${resH(44)}px;
              background: #2d2d2d;
              border-radius: 36px;
              color: #e57d44;
            `}
          >
            Approve Staking
          </Button>
        </StakePopupTrigger>
      </div>
    </div>
  );
};
