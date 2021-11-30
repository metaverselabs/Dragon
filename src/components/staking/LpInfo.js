import { css } from "@emotion/react";
import { useResponsiveSize } from "../../utils/useResponsiveSize";
import { HorizontalGap } from "../HorizontalGap";
import { DataSection } from "./DataSection";
import { LPV2_ADDR, LP_REWARD_ADDR } from "../../../constants";
import { useEthers, useTokenBalance, useTokenAllowance } from "@usedapp/core";
import { formatEther, parseUnits } from "@ethersproject/units";
import { useStakedBalance } from "./hooks/useStakedBalance";

export const LpInfo = () => {
  const { resH, resW } = useResponsiveSize();
  const { account, library } = useEthers();
  const lpTokenBalance = useTokenBalance(LPV2_ADDR, account);
  const stakedBalance = useStakedBalance({ account });
  const displayStakedBalance = Number(
    formatEther(stakedBalance?.toString() || 0)
  ).toFixed(2);

  const displayBalance = Number(
    formatEther(lpTokenBalance?.toString() || 0)
  ).toFixed(2);
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
      <DataSection title={displayBalance} hint={"Available DRAGON/ETH"} />
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
        title={displayStakedBalance}
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
