import { css } from "@emotion/react";
import { HorizontalGap } from "../HorizontalGap";
import { DataSection } from "./DataSection";
import { Button } from "../Button";
import { useResponsiveSize } from "../../utils/useResponsiveSize";
import { useEthers } from "@usedapp/core";
import { useEarned } from "./hooks/useEarned";
import { formatEther, parseUnits } from "@ethersproject/units";
import { useGetReward } from "./hooks/useGetReward";
import { mq } from "../../styles/globals";

export const ClaimPanel = () => {
  const { account, library } = useEthers();
  const earned = useEarned({ account });
  const { resH, resW } = useResponsiveSize();
  const displayEarned = Number(formatEther(earned?.toString() || 0)).toFixed(2);
  const { isMining, onClickClaim } = useGetReward();
  const claimDisabled = !earned || earned.eq(0) || isMining;
  const btnText = isMining ? "Claiming..." : "Claim";
  const onClaim = () => {
    onClickClaim({ account });
  };
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
        ${mq[1]} {
          width: 100%;
          margin-top: ${resH(30)}px;
        }
        ${mq[0]} {
          /* width: 100%;
          margin-top: ${resH(30)}px; */
        }
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
          ${mq[1]} {
            flex-direction: column;
            justify-content: center;
          }
          ${mq[0]} {
          }
        `}
      >
        <HorizontalGap
          val={resW(80)}
          css={css`
            ${mq[1]} {
              margin-left: 0;
            }
          `}
        />
        <DataSection
          title={displayEarned}
          hint={"CHI Reward"}
          css={css`
            ${mq[1]} {
              align-items: center;
            }
          `}
          hintcss={css`
            overflow: visible;
            width: 90%;
            text-align: center;
          `}
        />
      </div>
      <div
        css={css`
          height: 1px;
          width: 75%;
          background-color: #444444;
          /* ${mq[1]} {
            width: ${resW(484)}px;
          } */
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
          onClick={onClaim}
          disabled={claimDisabled}
          btnStyleCss={css`
            transition: transform 0.5s;
            min-width: ${resW(109)}px;
            height: ${resH(44)}px;
            background: #2d2d2d;
            border-radius: 36px;
            color: ${claimDisabled ? "white" : "#e57d44"};
            padding-left: 15px;
            padding-right: 15px;
            ${mq[1]} {
              font-size: 13px;
              line-height: 13px;
            }
            ${mq[0]} {
              font-size: 9px;
              line-height: 9px;
            }
          `}
        >
          {btnText}
        </Button>
      </div>
    </div>
  );
};
