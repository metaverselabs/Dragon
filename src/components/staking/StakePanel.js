import { css } from "@emotion/react";
import { useResponsiveSize } from "../../utils/useResponsiveSize";
import { Button } from "../Button";
import { HorizontalGap } from "../HorizontalGap";
import { StakePopupTrigger } from "../Popup";
import { LpInfo } from "./LpInfo";
// import { useV2Contract } from "./hooks/useV2Contract";
import { useApproved } from "./hooks/useApproved";
import { AprroveBtn } from "./AprroveBtn";

import { useEthers } from "@usedapp/core";
import { UnstakeBtn } from "./UnstakeBtn";
import { mq } from "../../styles/globals";

export const StakePanel = () => {
  const { approved, lpTokenBalance, allowanceLP } = useApproved();
  const { account } = useEthers();
  const skateDisabled = !account;
  const { resH, resW } = useResponsiveSize();

  console.log("lpTokenBalance", lpTokenBalance);
  console.log("allowanceLP", allowanceLP);
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
        ${mq[1]} {
          width: 100%;
        }
        ${mq[0]} {
          width: 100%;
        }
      `}
    >
      <LpInfo />
      <div
        css={css`
          height: 1px;
          width: 75%;
          background-color: #444444;
        `}
      />
      <div
        css={css`
          width: 100%;
          height: ${resH(116)}px;
          display: flex;
          align-items: center;

          ${mq[1]} {
            justify-content: center;
          }
          /* flex-direction: column; */
          /* background-color: azure; */
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
        <UnstakeBtn />
        <HorizontalGap val={resW(24)} />
        {approved && (
          <StakePopupTrigger>
            <Button
              btnStyleCss={css`
                transition: transform 0.5s;
                min-width: ${resW(290)}px;
                height: ${resH(44)}px;
                background: #2d2d2d;
                border-radius: 36px;
                color: #e57d44;
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
              Stake
            </Button>
          </StakePopupTrigger>
        )}
        {!approved && <AprroveBtn />}
      </div>
    </div>
  );
};
