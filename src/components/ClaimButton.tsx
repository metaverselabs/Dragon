import { css } from "@emotion/react";
import { mq } from "../styles/globals";
import { Button } from "./Button";

interface IB {
  children: any;
  styleCss?: any;
  onClick?: any;
  btnStyleCss?: any;
  disabled?: any;
}

export const ClaimButton = ({
  children,
  styleCss,
  disabled,
  onClick,
  btnStyleCss,
}: IB) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      styleCss={css`
        min-width: 210px;
        min-height: 36px;
        color: #ffffff;
        font-family: "Poppins";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 36px;

        ${mq[1]} {
          min-width: 180px;
          min-height: 30px;
          line-height: 30px;
          font-size: 14px;
        }
        ${mq[0]} {
          font-size: 12px;
          min-width: 160px;
          min-height: 25px;
          line-height: 25px;
        }
        ${styleCss}
      `}
      btnStyleCss={css`
        /* background: rgba(229, 125, 68, 0.2); */
        border-radius: 8px;
        border: ${disabled ? "2px solid #494949" : "solid 1px transparent"};
        background-image: ${disabled
            ? "linear-gradient(#262626, #262626)"
            : "linear-gradient(#2e190e, #2e190e)"},
          ${disabled
            ? "linear-gradient(#262626, #262626)"
            : "linear-gradient(to bottom right, #e57d44, #f9f600)"};
        background-origin: border-box;
        background-clip: content-box, border-box;
        ${btnStyleCss}
      `}
    >
      {children}
    </Button>
  );
};
