import * as DialogPrimitive from "@radix-ui/react-dialog";
import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";
import { CloseBtn } from "./CloseBtn";
import { VerticalGap } from "../VerticalGap";
import { HorizontalGap } from "../HorizontalGap";
import { Button } from "../Button";
import { LPV2_ADDR, LP_REWARD_ADDR } from "../../../constants";
import { useEthers, useTokenBalance, useTokenAllowance } from "@usedapp/core";
import { formatEther, parseUnits } from "@ethersproject/units";
import { BigNumber } from "@ethersproject/bignumber";
// import { useStake } from "./useStake";
import { StakingState } from "./stakingState";

export const StakeContent = () => {
  const [amount, setAmount] = useState("0.00");
  const [insufficientBalance, setInsufficientBalance] = useState(false);
  const { account, library } = useEthers();
  const lpTokenBalance = useTokenBalance(LPV2_ADDR, account);
  const allowanceLP = useTokenAllowance(LPV2_ADDR, account, LP_REWARD_ADDR);
  const setMax = () => {
    setAmount(formatEther(lpTokenBalance));
  };

  const displayBalance = formatEther(lpTokenBalance?.toString() || 0);

  useEffect(() => {
    if (lpTokenBalance && amount) {
      // console.log("amount", amount);
      if (lpTokenBalance.lt(parseUnits(amount, 18))) {
        setInsufficientBalance(true);
      } else {
        setInsufficientBalance(false);
      }
    }
  }, [amount, lpTokenBalance]);
  // const { isMining, onClickStake } = useStake({
  //   account,
  //   amount: parseUnits(amount || "0", 18),
  // });
  const { isMining, onClickStake } = StakingState.useContainer();
  const onClickSendStake = () => {
    onClickStake({ account, amount: parseUnits(amount || "0", 18) });
  };
  const disabled = insufficientBalance || isMining;
  const btnText = insufficientBalance
    ? "Insufficient Balance"
    : isMining
    ? "Staking..."
    : "Stake";

  return (
    <div
      css={css`
        flex: 1;
        flex-direction: column;
        display: flex;
        width: 100%;
        height: 100%;
        padding-left: 80px;
        padding-right: 80px;
        padding-top: 60px;
        padding-bottom: 57px;
      `}
    >
      <CloseBtn />
      <DialogPrimitive.DialogTitle
        css={css`
          font-family: Poppins;
          font-style: normal;
          font-weight: 500;
          font-size: 20px;
          line-height: 30px;

          color: white;
        `}
      >
        Stake your tokens
      </DialogPrimitive.DialogTitle>
      <VerticalGap val={18} />
      <div
        css={css`
          position: relative;
        `}
      >
        <input
          css={css`
            border: 1px solid #ffffff;
            box-sizing: border-box;
            border-radius: 8px;
            width: 484px;
            height: 73px;
            background-color: black;
            padding-left: 20px;
            color: white;
            font-family: Poppins;
            font-style: normal;
            font-weight: bold;
            font-size: 20px;
            line-height: 30px;
            padding-right: 195px;
          `}
          type="text"
          inputMode="decimal"
          pattern="^[0-9]*[.,]?[0-9]*$"
          value={amount}
          onChange={(e) => {
            const currentText = e.target.value;
            console.log("currentText", currentText);
            if (/^[0-9]*[.]?[0-9]*$/.test(currentText) || currentText === "")
              setAmount(currentText);
            // setAmount(e.target.value);
          }}
        />
        <div
          css={css`
            position: absolute;
            right: 0;
            width: 195px;
            height: 73px;
            /* background-color: gray; */
            top: 0;
            bottom: 0;
            display: flex;
            align-items: center;
          `}
        >
          <span
            css={css`
              font-family: Poppins;
              font-style: normal;
              font-weight: bold;
              font-size: 16px;
              line-height: 24px;
            `}
          >
            DRAGON/ETH
          </span>
          <HorizontalGap val={12} />
          <Button
            btnStyleCss={css`
              width: 55px;
              height: 33px;
              background: #2d2d2d;
              border-radius: 27px;
              padding-top: 3px;
              color: #e57d44;
            `}
            onClick={setMax}
          >
            Max
          </Button>
        </div>
        <VerticalGap val={12} />
        <span
          css={css`
            font-family: Poppins;
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 21px;
          `}
        >
          Balance: {displayBalance}
        </span>
        <VerticalGap val={19} />
        <Button
          onClick={onClickSendStake}
          disabled={disabled}
          btnStyleCss={css`
            transition: transform 0.5s;
            min-width: ${484}px;
            height: ${44}px;
            background: #2d2d2d;
            border-radius: 36px;
            color: ${disabled ? "white" : "#e57d44"};
          `}
        >
          <span
            css={css`
              transform: translateY(2px);
            `}
          >
            {btnText}
          </span>
        </Button>
      </div>
    </div>
  );
};
