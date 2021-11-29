import { css } from "@emotion/react";
import { Cross2Icon } from "@radix-ui/react-icons";
import React from "react";
import { WalletPopupClose } from "./index";

export const CloseBtn = () => {
  return (
    <WalletPopupClose asChild>
      <button
        css={css`
          position: absolute;
          top: 15px;
          right: 15px;
          width: 25px;
          height: 25px;
          border-radius: 100%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          &:hover {
            background-color: rgba(226, 118, 37, 0.5);
          }
          &:focus {
            /* box-shadow: 0 0 0 2px #e27625; */
          }
        `}
        aria-label="Close"
      >
        <Cross2Icon color={"white"} />
      </button>
    </WalletPopupClose>
  );
};
