import React from "react";
import { Button } from "./Button";
import { css } from "@emotion/react";
import { useResponsiveSize } from "../utils/useResponsiveSize";
import { mq } from "../styles/globals";
import { IB } from "./IB";

export const StyledBtn = ({
  children,
  onClick,
  disabled,
  styleCss,
  btnStyleCss,
}: IB) => {
  const { resH, resW } = useResponsiveSize();
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      styleCss={css`
        background-color: transparent;
        ${styleCss}
      `}
      btnStyleCss={css`
        transition: transform 0.5s;
        min-height: ${Math.max(resH(44), 44)}px;
        min-width: ${resW(154)}px;
        padding-left: ${resW(20)}px;
        padding-right: ${resW(20)}px;
        font-size: ${16}px;
        ${mq[1]} {
          font-size: 13px;
        }
        ${mq[0]} {
          font-size: 10px;
        }
        ${btnStyleCss}
      `}
    >
      {children}
    </Button>
  );
};
