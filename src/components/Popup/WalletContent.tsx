import * as DialogPrimitive from "@radix-ui/react-dialog";
import { css } from "@emotion/react";
import { useResponsiveSize } from "../../utils/useResponsiveSize";
import { mq } from "../../styles/globals";
import { BottomImage } from "../BottomImage";
import { useEthers } from "@usedapp/core";
import { useShortAddressWithEns } from "../../utils/useShortAddressWithEns";
import { useWindowSize } from "../../utils/useWindowSize";
import { CopyToClipboard } from "react-copy-to-clipboard";
import React from "react";
import { CloseBtn } from "./CloseBtn";
import { WalletPopupClose } from "./index";

export const WalletContent = ({ isCopied, onCopy }) => {
  const { resH, resW } = useResponsiveSize();
  const { account, deactivate } = useEthers();
  const { winWidth } = useWindowSize();
  const shortAccount = useShortAddressWithEns(account);
  const shownAccount = winWidth < 1000 ? shortAccount : account;
  const isBtnTextShown = winWidth < 560 ? false : true;
  return (
    <div
      css={css`
        flex: 1;
        flex-direction: column;
        justify-content: space-between;
        display: flex;
        width: 100%;
        height: 100%;
        padding-left: 24px;
        padding-right: 24px;
        padding-top: 76px;
        padding-bottom: 34px;
      `}
    >
      <CloseBtn />

      <DialogPrimitive.DialogTitle
        css={css`
          font-size: 16px;
          line-height: 22px;
          color: white;
          /* identical to box height */

          letter-spacing: 0.03em;
        `}
      >
        Connected to MetaMask
      </DialogPrimitive.DialogTitle>
      <div
        css={css`
          background: #000000;
          border-radius: 8px;
          width: 100%;
          height: 79.1px;
          display: flex;
          align-items: center;
          color: white;
          font-family: Cabin;
          background: #000000;
          border: 1px solid #ffffff;
        `}
      >
        <BottomImage
          width={"33px"}
          height={"31.1px"}
          src={require("../../../public/metamask.png")}
          alt={"metamask"}
          styleCss={css`
            margin-left: 24px;
            margin-right: 24px;
          `}
        />
        <span>{shownAccount}</span>
      </div>
      <div
        css={css`
          display: flex;
          align-items: center;

          justify-content: space-between;
        `}
      >
        {[
          {
            src: require("../../../public/copy.png"),
            alt: "Copy",
            text: isCopied ? "Copied!" : "Copy",
            wrapper: ({ children, styleCss, ...props }) => (
              <CopyToClipboard text={account} onCopy={onCopy}>
                <button css={styleCss} {...props}>
                  {children}
                </button>
              </CopyToClipboard>
            ),
          },
          {
            src: require("../../../public/escan.png"),
            alt: "Etherscan",
            text: "Etherscan",
            wrapper: ({ children, styleCss, ...props }) => (
              <a
                {...props}
                href={`https://etherscan.io/address/${account}`}
                target={"_blank"}
                rel="noreferrer"
                css={css`
                  ${styleCss}
                `}
              >
                {children}
              </a>
            ),
          },
          {
            src: require("../../../public/disconnect.png"),
            alt: "Disconnect",
            text: "Disconnect",
            wrapper: ({ children, styleCss, ...props }) => (
              <WalletPopupClose asChild>
                <button css={styleCss} onClick={deactivate} {...props}>
                  {children}
                </button>
              </WalletPopupClose>
            ),
          },
        ].map((obj) => {
          const Wrapper = obj.wrapper;
          return (
            <Wrapper
              key={obj.text}
              styleCss={css`
                &:hover {
                  color: rgba(255, 255, 255, 0.8);
                }
              `}
            >
              <div
                css={css`
                  display: flex;
                  align-items: center;
                  cursor: pointer;
                `}
              >
                <BottomImage
                  width={"20px"}
                  height={"20px"}
                  src={obj.src}
                  alt={obj.alt}
                  styleCss={css`
                    margin-right: 10px;
                  `}
                  imgCss={css`
                    &::hover {
                      opacity: 0.8;
                    }
                  `}
                />
                {isBtnTextShown && (
                  <span
                    css={css`
                      height: 20px;
                      line-height: 20px;
                      font-size: 16px;
                      ${mq[1]} {
                        font-size: 11px;
                      }
                    `}
                  >
                    {obj.text}
                  </span>
                )}
              </div>
            </Wrapper>
          );
        })}
      </div>
    </div>
  );
};
