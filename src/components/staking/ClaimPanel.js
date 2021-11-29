import { css } from "@emotion/react";
import { HorizontalGap } from "../HorizontalGap";
import { DataSection } from "./DataSection";
import { Button } from "../Button";
import { useResponsiveSize } from "../../utils/useResponsiveSize";

export const ClaimPanel = () => {
  const { resH, resW } = useResponsiveSize();
  return (
    <div
      css={css`
        width: ${resW(300)}px;
        height: ${resH(266)}px;
        border: solid 1.5px transparent;
        background-image: linear-gradient(black, black),
          linear-gradient(to bottom right, #e57d44, #f9f600);
        background-origin: border-box;
        background-clip: content-box, border-box;
        border-radius: 16px;
        display: flex;
        flex-direction: column;
        align-items: center;
      `}
    >
      <div
        css={css`
          width: 100%;
          height: ${resH(150)}px;
          display: flex;
          align-items: center;
          flex-direction: row;
          position: relative;
          /* background-color: aqua; */
        `}
      >
        <HorizontalGap val={resW(80)} />
        <DataSection title={"--"} hint={"DRAGON Reward"} />
      </div>
      <div
        css={css`
          height: 1px;
          width: ${resW(187)}px;
          background-color: #444444;
        `}
      />
      <div
        css={css`
          width: 100%;
          height: ${resH(116)}px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          /* flex-direction: column; */
          /* background-color: azure; */
        `}
      >
        <Button
          btnStyleCss={css`
            transition: transform 0.5s;
            min-width: ${resW(109)}px;
            height: ${resH(44)}px;
            background: #2d2d2d;
            border-radius: 36px;
            color: #e57d44;
          `}
        >
          Claim
        </Button>
      </div>
    </div>
  );
};
