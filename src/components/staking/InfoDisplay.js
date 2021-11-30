import { css } from "@emotion/react";
import { useEthers, useTokenBalance } from "@usedapp/core";
import { useResponsiveSize } from "../../utils/useResponsiveSize";
import { HorizontalGap } from "../HorizontalGap";
import { DataSection } from "./DataSection";
import { LPV2_ADDR, LP_REWARD_ADDR } from "../../../constants";
import { formatEther, parseUnits } from "@ethersproject/units";

export const InfoDisplay = () => {
  const lpStakedTotal = useTokenBalance(LPV2_ADDR, LP_REWARD_ADDR);
  console.log("lpStakedTotal", lpStakedTotal);
  const displayLpStakedTotal = Number(
    formatEther(lpStakedTotal?.toString() || 0)
  ).toFixed(2);
  const { resH, resW } = useResponsiveSize();
  return (
    <div
      css={css`
        width: ${resW(980)}px;
        height: ${resH(170)}px;
        border-radius: 16px;
        border: solid 1.5px transparent;
        background-image: linear-gradient(black, black),
          linear-gradient(to bottom right, #e57d44, #f9f600);
        background-origin: border-box;
        background-clip: content-box, border-box;
        display: flex;
        flex-direction: row;
        align-items: center;
        position: relative;
      `}
    >
      <HorizontalGap val={resW(80)} />
      <DataSection
        title={"LPL"}
        val={displayLpStakedTotal}
        hint={"Liquidity Provider Locked"}
      />
      <div
        css={css`
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          height: 90px;
          width: 1px;
          background-color: #444444;
        `}
      />
      <DataSection
        css={css`
          margin-left: auto;
          margin-right: ${resW(80)}px;
        `}
        title={"ARP"}
        val={"$--"}
        hint={"Annual Percentage Rate"}
      />
    </div>
  );
};
