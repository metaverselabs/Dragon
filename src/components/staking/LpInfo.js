import { css } from "@emotion/react";
import { useResponsiveSize } from "../../utils/useResponsiveSize";
import { HorizontalGap } from "../HorizontalGap";
import { DataSection } from "./DataSection";

export const LpInfo = () => {
  const { resH, resW } = useResponsiveSize();
  return (
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
      <DataSection title={"--"} hint={"Available DRAGON/ETH"} />
      <div
        css={css`
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          height: ${resH(78)}px;
          width: 1px;
          background-color: #444444;
        `}
      />
      <DataSection
        title={"--"}
        hint={"Staked DRAGON/ETH"}
        css={css`
          margin-left: auto;
          width: auto;
          margin-right: ${resW(80)}px;
        `}
      />
    </div>
  );
};
