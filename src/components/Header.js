import { css } from "@emotion/react";
import { WalletButton } from "./WalletButton";
import { useResponsiveSize } from "../utils/useResponsiveSize";
import { mq } from "../styles/globals";

export const Header = () => {
  // const { resH } = useResponsiveSize();
  return (
    <header
      css={css`
        font-family: Goldman;
        width: 100%;
        height: auto;
        background-color: black;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 1.3%;
      `}
    >
      <span
        css={css`
          font-family: Poppins;
          font-weight: 400;
          font-size: 28px;
          line-height: 28px;
          color: #ffffff;
          ${mq[1]} {
            line-height: 24px;
            font-size: 24px;
          }
          ${mq[0]} {
            line-height: 20px;
            font-size: 20px;
          }
        `}
      >
        Dragon Metaverse
      </span>
      <WalletButton />
    </header>
  );
};
