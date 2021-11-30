import { css } from "@emotion/react";
import { Button } from "../Button";
import { useEthers } from "@usedapp/core";
import { useResponsiveSize } from "../../utils/useResponsiveSize";
import { useExit } from "./hooks/useExit";
import { useStakedBalance } from "./hooks/useStakedBalance";

export const UnstakeBtn = () => {
  const { account } = useEthers();
  const { resH, resW } = useResponsiveSize();

  const { isMining, onClickExit } = useExit();
  const onClickUnstake = () => {
    onClickExit({ account });
  };
  const stakedBalance = useStakedBalance({ account });
  const unStakeDisabled = !account || stakedBalance?.eq(0) || isMining;
  const btnText = isMining ? "Unstaking..." : "Unstake";
  return (
    <Button
      disabled={unStakeDisabled}
      onClick={onClickUnstake}
      styleCss={css`
        /* min-width: ${resW(170)}px;
            height: ${resH(44)}px;
            background: #2d2d2d; */
      `}
      btnStyleCss={css`
        color: ${unStakeDisabled ? "white" : "#e57d44"};
        min-width: ${resW(170)}px;
        height: ${resH(44)}px;
        background: #2d2d2d;
        transition: transform 0.5s;
        border-radius: 36px;
      `}
    >
      {btnText}
    </Button>
  );
};
