import React, {
  ReactChild,
  ReactChildren,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { Button } from "./Button";
import { css } from "@emotion/react";
import { ChainId, useEthers, useTokenBalance } from "@usedapp/core";
import { config } from "../../constants";
import { useShortAddressWithEns } from "../utils/useShortAddressWithEns";
import { useResponsiveSize } from "../utils/useResponsiveSize";
import { mq } from "../styles/globals";
import { TOKEN_ADDR } from "../../constants";
import { BigNumber } from "@ethersproject/bignumber";
import { formatEther } from "@ethersproject/units";
import { WalletPopupTrigger } from "./Popup";

interface IB {
  children: ReactNode;
  onClick?: any;
  disabled?: any;
  styleCss?: any;
  btnStyleCss?: any;
}

const StyledBtn = ({
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

const StyledButtonWithBalance = ({
  children,
  onClick,
  disabled,
  styleCss,
  btnStyleCss,
  balance,
}: IB & { balance: BigNumber }) => {
  const { resH, resW } = useResponsiveSize();
  return (
    <div
      css={css`
        min-height: ${Math.max(resH(44), 44)}px;
        min-width: ${resW(240)}px;
        background-color: #2d2d2d;
        border-radius: 8px;
        display: flex;
        align-items: center;
        /* flex-direction: column-reverse;
        align-items: right; */
        font-size: ${16}px;
        ${btnStyleCss}
        @media (max-width: 1000px) {
          background-color: transparent;
        }
        ${mq[1]} {
          font-size: 13px;
        }
        ${mq[0]} {
          font-size: 10px;
        }
      `}
    >
      <span
        css={css`
          padding-left: ${resW(18)}px;
          padding-right: ${resW(18)}px;
          // padding-top: ${resW(10)}px;
          // padding-bottom: ${resW(6)}px;
          /* margin-left: auto; */
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #e57d44;
          font-family: Poppins;
          @media (max-width: 1000px) {
            display: none;
          }
        `}
      >
        {Number(formatEther(balance ?? 0)).toLocaleString() ?? 0} DRAGON
      </span>
      <WalletPopupTrigger asChild>
        <div>
          <Button
            onClick={onClick}
            disabled={disabled}
            styleCss={css`
              background-color: transparent;
              ${styleCss}
              margin-right: ${resW(6)}px;
              margin-left: auto;
              padding-top: ${resW(2)}px;
              padding-bottom: ${resW(2)}px;
            `}
            btnStyleCss={css`
              /* border: 1.2px solid #f9f600; */
              background: #727272;
              color: #ffffff;
              box-shadow: inset 0px 1px 2px rgba(0, 0, 0, 0.25);
              transition: transform 0.5s;
              min-height: ${Math.max(resH(32), 32)}px;
              min-width: ${resW(122)}px;
              padding-left: ${resW(18)}px;
              padding-right: ${resW(18)}px;
            `}
          >
            {children}
          </Button>
        </div>
      </WalletPopupTrigger>
    </div>
  );
};

export const WalletButton = () => {
  const { chainId, library, account, activateBrowserWallet, deactivate } =
    useEthers();
  const dragonBalance = useTokenBalance(TOKEN_ADDR, account);

  const isCorrectNetwork =
    chainId !== undefined && Object.keys(config)?.includes(String(chainId));
  // console.log("chainId", chainId);
  // console.log("isCorrectNetwork", isCorrectNetwork);
  const isConnected = !!account;
  const accountText = useShortAddressWithEns(account);
  const onConnect = activateBrowserWallet;
  const onDisconnect = deactivate;

  // const { resH, resW } = useResponsiveSize();
  // const [btnWidth, setBtnWidth] = useState(resW(154));

  return (
    <>
      {!isConnected && (
        <StyledBtn
          styleCss={css`
            color: #e57d44;
            background-color: #2d2d2d;
            font-family: Poppins;
          `}
          btnStyleCss={css`
            border: none;
          `}
          onClick={onConnect}
        >
          Connect Wallet
        </StyledBtn>
      )}
      {isConnected && isCorrectNetwork && (
        <StyledButtonWithBalance
          balance={dragonBalance}
          onClick={() => {
            // onDisconnect();
          }}
        >
          <span
            css={css`
              font-family: PTSansCaption;
            `}
          >
            {accountText}
          </span>
        </StyledButtonWithBalance>
      )}
      {!isCorrectNetwork && isConnected && (
        <StyledBtn
          styleCss={css`
            background-color: transparent;
            color: #d11e1e;
            border: 1px solid #d11e1e;
            font-family: PTSansCaption;
          `}
          btnStyleCss={css`
            border: none;
          `}
          onClick={() => {}}
        >
          Wrong NetWork!
        </StyledBtn>
      )}
    </>
  );
};
