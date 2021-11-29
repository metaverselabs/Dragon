// your-dialog.js
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { css, keyframes } from "@emotion/react";
import { useResponsiveSize } from "../../utils/useResponsiveSize";
import { mq } from "../../styles/globals";
import { BottomImage } from "../BottomImage";
import { useEthers } from "@usedapp/core";
import { useShortAddressWithEns } from "../../utils/useShortAddressWithEns";
import { useWindowSize } from "../../utils/useWindowSize";
import { CopyToClipboard } from "react-copy-to-clipboard";
import React, { useContext, useEffect, useState } from "react";
import { CloseBtn } from "./CloseBtn";
import { VerticalGap } from "../VerticalGap";
import { HorizontalGap } from "../HorizontalGap";
import { Button } from "../Button";

const TypeContext = React.createContext<{
  type: string;
  setType: Function;
}>({
  type: "wallet",
  setType: () => {},
});

const overlayShow = keyframes`
  0% { opacity: 0 }
  100% { opacity: 1 }
`;
// import { Cross1Icon } from "@radix-ui/react-icons";
function Popup({ children }) {
  const [isCopied, setIsCopied] = useState(false);
  const onCopy = () => {
    setIsCopied(true);
    // setTimeout(() => setIsCopied(false), 5000);
  };
  const [type, setType] = useState("wallet");
  return (
    <TypeContext.Provider
      value={{
        type,
        setType,
      }}
    >
      <DialogPrimitive.Root
        onOpenChange={() => {
          setIsCopied(false);
        }}
      >
        <div>
          {children}
          <DialogPrimitive.Overlay
            css={css`
              position: fixed;
              inset: 0;
              backdrop-filter: blur(30px);
              background: rgba(0, 0, 0, 0.2);
              @media (prefers-reduced-motion: no-preference) {
                animation: ${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
              }
            `}
          />

          <WalletPopupContent type={type} isCopied={isCopied} onCopy={onCopy} />

          {/* {type === "stake" && } */}
        </div>
      </DialogPrimitive.Root>
    </TypeContext.Provider>
  );
}

// const StakePopupContent = () => {
//   const { resH, resW } = useResponsiveSize();

//   return (
//     <DialogPrimitive.Content
//       css={cssContent({
//         width: 644,
//         height: 334,
//         cssStyle: css`
//           background-color: aliceblue;
//         `,
//       })}
//     ></DialogPrimitive.Content>
//   );
// };

const WalletPopupContent = ({ isCopied, onCopy, type }) => {
  const width = type === "wallet" ? 629 : 644;
  const height = type === "wallet" ? 301 : 334;
  return (
    <DialogPrimitive.Content
      css={css`
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: ${width}px;
        height: ${height}px;

        background: #000000;
        /* border: 2px solid #e27625;
           */
        /* https://stackoverflow.com/questions/5706963/possible-to-use-border-radius-together-with-a-border-image-which-has-a-gradient */
        border: solid 1.5px transparent;
        background-image: linear-gradient(black, black),
          linear-gradient(to bottom right, #e57d44, #f9f600);
        background-origin: border-box;
        background-clip: content-box, border-box;
        border-radius: 16px;
        /* padding-left: 24px;
          padding-right: 24px;
          padding-top: 76px;
          padding-bottom: 34px; */
        display: flex;
        /* flex: 1; */
        flex-direction: column;
        font-family: KH;
        color: white;
        align-items: center;
        justify-content: space-between;

        ${mq[2]} {
          width: ${width * 0.8}px;
          height: ${height}px;
        }
        ${mq[1]} {
          width: ${width * 0.7}px;
          height: ${height}px;
        }
        ${mq[0]} {
          width: ${width * 0.6}px;
          height: ${height}px;
        }
      `}
    >
      {type === "wallet" && (
        <WalletContent isCopied={isCopied} onCopy={onCopy} />
      )}
      {type === "stake" && <StakeContent />}
    </DialogPrimitive.Content>
  );
};

const StakeContent = () => {
  const [amount, setAmount] = useState("0.00");
  return (
    <div
      css={css`
        flex: 1;
        flex-direction: column;
        display: flex;
        width: 100%;
        height: 100%;
        padding-left: 80px;
        padding-right: 80px;
        padding-top: 60px;
        padding-bottom: 57px;
      `}
    >
      <CloseBtn />
      <DialogPrimitive.DialogTitle
        css={css`
          font-family: Poppins;
          font-style: normal;
          font-weight: 500;
          font-size: 20px;
          line-height: 30px;

          color: white;
        `}
      >
        Stake your tokens
      </DialogPrimitive.DialogTitle>
      <VerticalGap val={18} />
      <div
        css={css`
          position: relative;
        `}
      >
        <input
          css={css`
            border: 1px solid #ffffff;
            box-sizing: border-box;
            border-radius: 8px;
            width: 484px;
            height: 73px;
            background-color: black;
            padding-left: 20px;
            color: white;
            font-family: Poppins;
            font-style: normal;
            font-weight: bold;
            font-size: 20px;
            line-height: 30px;
            padding-right: 195px;
          `}
          type="text"
          inputMode="decimal"
          pattern="^[0-9]*[.,]?[0-9]*$"
          value={amount}
          onChange={(e) => {
            const currentText = e.target.value;
            console.log("currentText", currentText);
            if (/^[0-9]*[.]?[0-9]*$/.test(currentText) || currentText === "")
              setAmount(currentText);
            // setAmount(e.target.value);
          }}
        />
        <div
          css={css`
            position: absolute;
            right: 0;
            width: 195px;
            height: 73px;
            /* background-color: gray; */
            top: 0;
            bottom: 0;
            display: flex;
            align-items: center;
          `}
        >
          <span
            css={css`
              font-family: Poppins;
              font-style: normal;
              font-weight: bold;
              font-size: 16px;
              line-height: 24px;
            `}
          >
            DRAGON/ETH
          </span>
          <HorizontalGap val={12} />
          <Button
            btnStyleCss={css`
              width: 55px;
              height: 33px;
              background: #2d2d2d;
              border-radius: 27px;
              padding-top: 3px;
              color: #e57d44;
            `}
          >
            Max
          </Button>
        </div>
        <VerticalGap val={12} />
        <span
          css={css`
            font-family: Poppins;
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 21px;
          `}
        >
          Balance: {0}
        </span>
        <VerticalGap val={19} />
        <Button
          btnStyleCss={css`
            transition: transform 0.5s;
            min-width: ${484}px;
            height: ${44}px;
            background: #2d2d2d;
            border-radius: 36px;
            color: #e57d44;
          `}
        >
          Stake
        </Button>
      </div>
    </div>
  );
};

const WalletContent = ({ isCopied, onCopy }) => {
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

const WalletPopupTrigger = ({ children }) => {
  const { setType, type } = useContext(TypeContext);
  return (
    <DialogPrimitive.Trigger
      asChild
      onClick={() => {
        setType("wallet");
      }}
    >
      {children}
    </DialogPrimitive.Trigger>
  );
};

const StakePopupTrigger = ({ children }) => {
  const { setType, type } = useContext(TypeContext);
  return (
    <DialogPrimitive.Trigger
      asChild
      onClick={() => {
        setType("stake");
      }}
    >
      {children}
    </DialogPrimitive.Trigger>
  );
};

const WalletPopupClose = DialogPrimitive.Close;
export { Popup, WalletPopupTrigger, WalletPopupClose, StakePopupTrigger };
