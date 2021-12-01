// your-dialog.js
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { css, keyframes } from "@emotion/react";
import { mq } from "../../styles/globals";
import React, { useContext, useEffect, useState } from "react";
import { StakeContent } from "./StakeContent";
import { WalletContent } from "./WalletContent";
import { StakingState } from "./stakingState";

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
    <StakingState.Provider>
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

            <PopupContent type={type} isCopied={isCopied} onCopy={onCopy} />

            {/* {type === "stake" && } */}
          </div>
        </DialogPrimitive.Root>
      </TypeContext.Provider>
    </StakingState.Provider>
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

const PopupContent = ({ isCopied, onCopy, type }) => {
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
          width: ${320}px;
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
