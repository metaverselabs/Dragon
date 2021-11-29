import { css } from "@emotion/react";
import { Button } from "../Button";
import { useEthers } from "@usedapp/core";
import { useResponsiveSize } from "../../utils/useResponsiveSize";

export const UnstakeBtn = () => {
  const { account } = useEthers();
  const { resH, resW } = useResponsiveSize();
  const unStakeDisabled = !account;
  return (
    <Button
      disabled={unStakeDisabled}
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
      Unstake
    </Button>
  );
};
