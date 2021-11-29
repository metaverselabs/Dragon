import { ReactNode, forwardRef, useRef, useState, useEffect } from "react";
import { css } from "@emotion/react";
import { useResponsiveSize } from "../utils/useResponsiveSize";

interface IB {
  children: any;
  styleCss?: any;
  onClick?: any;
  btnStyleCss?: any;
  disabled?: any;
}

const Button = forwardRef<HTMLButtonElement, IB>(
  ({ children, styleCss, onClick, btnStyleCss, disabled }: IB, ref) => {
    const { resH, resW } = useResponsiveSize();

    return (
      <div
        css={css`
          border-radius: 8px;
          display: flex;

          /* font-family: Roboto; */
          > button {
            flex: 1;

            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 8px;

            &:link {
            }

            &:visited {
            }
            /* &:focus, */
            &:hover {
              /* color: white; */
              cursor: pointer;
              transform: translateY(1px);
              transition: all 0.5s;
            }
            &:active {
              transform: translateY(3px);
              transition: all 0.3s;
            }
            position: relative;

            ${btnStyleCss}
          }
          ${styleCss}
        `}
      >
        <button ref={ref} disabled={disabled} onClick={onClick}>
          {children}
        </button>
      </div>
    );
  }
);
Button.displayName = "Button";

// const Button = forwardRef(ButtonOriginal);

export { Button };
