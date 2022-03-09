import React, {
  ReactChild,
  ReactChildren,
  useEffect,
  useRef,
  useState,
} from "react";
import { css } from "@emotion/react";
import { ChainId, useEthers, useTokenBalance } from "@usedapp/core";
import { config } from "../../constants";
import { useShortAddressWithEns } from "../utils/useShortAddressWithEns";
import { TOKEN_ADDR } from "../../constants";
import { StyledButtonWithBalance } from "./StyledButtonWithBalance";
import { StyledBtn } from "./StyledBtn";

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
