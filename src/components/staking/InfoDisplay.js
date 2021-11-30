import { css } from "@emotion/react";
import { useEthers, useTokenBalance } from "@usedapp/core";
import { useResponsiveSize } from "../../utils/useResponsiveSize";
import { HorizontalGap } from "../HorizontalGap";
import { DataSection } from "./DataSection";
import { LPV2_ADDR, LP_REWARD_ADDR } from "../../../constants";
import { formatEther, parseUnits } from "@ethersproject/units";

// reference
//const aprToApy = (apr, frequency = BLOCKS_IN_A_YEAR) => ((1 + apr / 100 / frequency) ** frequency - 1) * 100
//const apy = aprToApy((((volume / 7) * 365 * 0.0025) / liquidity) * 100, 3650)
export const InfoDisplay = () => {
  const lpStakedTotal = useTokenBalance(LPV2_ADDR, LP_REWARD_ADDR);
  const { account } = useEthers();
  console.log("lpStakedTotal", lpStakedTotal);
  const displayLpStakedTotal = !!account
    ? Number(formatEther(lpStakedTotal?.toString() || 0)).toFixed(2)
    : "--";
  const { resH, resW } = useResponsiveSize();
  return (
    <div
      css={css`
        width: ${resW(980)}px;
        height: ${170}px;
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
