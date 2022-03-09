/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Button } from "./Button";
import { css } from "@emotion/react";
import { useResponsiveSize } from "../utils/useResponsiveSize";
import { mq } from "../styles/globals";
import { BigNumber } from "@ethersproject/bignumber";
import { formatEther } from "@ethersproject/units";
import { WalletPopupTrigger } from "./Popup";
import { IB } from "./IB";
import { TOKEN_ADDR } from "../../constants";
import { BottomImage } from "./BottomImage";

const OnClickAddToken = async () => {
  const tokenAddress = TOKEN_ADDR;
  const tokenSymbol = "CHI";
  const tokenDecimals = 18;
  //   const tokenImage = "http://placekitten.com/200/300";
  //@ts-ignore
  if (!window || !window.ethereum) return;

  try {
    // wasAdded is a boolean. Like any RPC method, an error may be thrown.
    //@ts-ignore
    const wasAdded = await window.ethereum.request({
      method: "wallet_watchAsset",
      params: {
        type: "ERC20", // Initially only supports ERC20, but eventually more!
        options: {
          address: tokenAddress, // The address that the token is at.
          symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
          decimals: tokenDecimals, // The number of decimals in the token
          //   image: tokenImage, // A string url of the token logo
        },
      },
    });

    if (wasAdded) {
      console.log("Thanks for your interest!");
    } else {
      console.log("Your loss!");
    }
  } catch (error) {
    console.log(error);
  }
};

export const StyledButtonWithBalance = ({
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
      <div
        css={css`
          padding-left: ${resW(18)}px;
          padding-right: ${resW(18)}px;

          // padding-top: ${resW(10)}px;
          // padding-bottom: ${resW(6)}px;
          /* margin-left: auto; */
          flex: 1;
          display: flex;
          /* justify-content: center; */
          align-items: center;
          color: #e57d44;
          font-family: Poppins;
          @media (max-width: 1150px) {
            display: none;
          }
        `}
      >
        <span>
          {Number(formatEther(balance ?? 0)).toLocaleString() ?? 0} CHI
        </span>
        <button
          css={css`
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
          `}
          onClick={OnClickAddToken}
        >
          <img
            src={require("../../public/metamask.png")}
            alt={"add_metamask"}
            css={css`
              margin-left: 9px;
              width: 20px;
              height: 20px;
              object-fit: contain;
            `}
          />
        </button>
      </div>
      <WalletPopupTrigger>
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
