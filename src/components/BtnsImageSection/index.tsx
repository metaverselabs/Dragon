import { css } from "@emotion/react";
import { mq } from "../../styles/globals";
import { VerticalGap } from "../VerticalGap";
import { BottomImage } from "../BottomImage";
// import left from "../../../public/left.png";
// import right from "../../../public/right.png";
import { ClaimButton } from "../ClaimButton";
import { useResponsiveSize } from "../../utils/useResponsiveSize";
import { useEthers } from "@usedapp/core";
import memoize from "lodash.memoize";
import { useIsClaimed } from "./useIsClaimed";
import { useEffect, useRef } from "react";
import { useToggle } from "./useToggle";
import { useClaim } from "./useClaim";
import { useWindowSize } from "../../utils/useWindowSize";
import { useApiCheck } from "./api";
import { useConfetti } from "../Confetti/useConfetti";
import { Confetti } from "../Confetti";
import { TOKEN_ADDR } from "../../../constants";

const left = require("../../../public/left.png?webp");
const right = require("../../../public/right.png?webp");

export const BtnsImageSection = () => {
  const { resH } = useResponsiveSize();
  const { winHeight, winWidth } = useWindowSize();
  const { account, library, activateBrowserWallet } = useEthers();

  const { toggle, toggleState } = useToggle(false);
  console.log(".getSigner()", library?.getSigner());
  const Signer = library?.getSigner();

  const { isRealQualifed, merkleData, apiErrTxt, loadingApi, resendApi } =
    useApiCheck({
      account,
    });
  const { isClaimed, isQualifed, OnClickQualified, resetIsQualifed } =
    useIsClaimed({
      provider: Signer,
      isRealQualifed,
      merkleData,
      account,
    });

  useEffect(() => {
    resetIsQualifed();
  }, [account, resetIsQualifed]);
  const {
    claimClickCallbackConfetti,
    claimSuccessCallbackConfetti,
    startConfetti,
  } = useConfetti({ account });

  const { statusTxt, status } = useClaim({
    account,
    isClaimed,
    merkleData,
    isRealQualifed,
    provider: Signer,
    toggle,
    toggleState,
    claimSuccessCallbackConfetti,
  });
  const isConnected = !!account;
  const isMining = statusTxt === "Mining";
  const disabled = !(!isMining && isConnected && isQualifed && !isClaimed);

  const OnClickClaim = () => {
    OnClickQualified();
    toggle(true);
    claimClickCallbackConfetti();
  };
  console.log("status", status);
  console.log("isClaimed", isClaimed);
  console.log("isQualifed", isQualifed);
  console.log("statusTxt", statusTxt);
  return (
    <>
      <Confetti start={Boolean(startConfetti)} />
      <VerticalGap val={60} />
      <div
        css={css`
          /* flex: 1; */
          /* background-color: wheat; */
          height: 200px;

          ${mq[2]} {
            height: 160px;
          }
          ${mq[1]} {
            height: 140px;
          }
          ${mq[0]} {
            height: 120px;
          }

          width: 40%;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;

          ${mq[3]} {
            width: 60%;
          }

          ${mq[2]} {
            width: 80%;
          }

          ${mq[1]} {
            width: 90%;
          }
          ${mq[0]} {
            width: 100%;
          }
        `}
      >
        {!isConnected && (
          <ClaimButton
            onClick={() => {
              activateBrowserWallet();
            }}
            disabled={false}
            styleCss={css`
              z-index: 1;
              font-family: Poppins;
            `}
            btnStyleCss={css`
              /* padding-top: 2px; */
            `}
          >
            {"Connect Wallet"}
          </ClaimButton>
        )}
        {isConnected && (!!apiErrTxt || loadingApi) && (
          <ClaimButton
            onClick={apiErrTxt ? resendApi : () => {}}
            disabled={apiErrTxt ? false : true}
            styleCss={css`
              z-index: 1;
              font-family: Poppins;
            `}
          >
            {loadingApi && "Loading..."}
            {apiErrTxt}
          </ClaimButton>
        )}
        {isConnected && !(!!apiErrTxt || loadingApi) && (
          <ClaimButton
            onClick={OnClickClaim}
            disabled={disabled}
            styleCss={css`
              z-index: 1;
              font-family: Poppins;
            `}
            btnStyleCss={css`
              /* padding-top: 2px; */
            `}
          >
            {!isMining && !isQualifed && "You’re not qualified"}
            {/* {!isMining && isConnected && isQualifed && isClaimed && "Claimed"} */}
            {!isMining && isClaimed && "Claimed"}
            {!isMining && isQualifed && !isClaimed && "Claim $DRAGON"}
            {isMining && "Claiming..."}
          </ClaimButton>
        )}
        <VerticalGap val={resH(24)} />
        <a
          href={`https://app.uniswap.org/#/add/v2/ETH/${TOKEN_ADDR}`}
          target="_blank"
          rel="noreferrer"
        >
          <ClaimButton
            onClick={() => {
              //
            }}
            disabled={false}
            styleCss={css`
              z-index: 1;
              font-family: Poppins;
            `}
            btnStyleCss={css`
              /* padding-top: 2px; */
            `}
          >
            Uniswap Liquidity
          </ClaimButton>
        </a>
        <BottomImage
          src={left}
          alt={"left_flower"}
          styleCss={css`
            position: absolute;
            left: 0;
            bottom: 0;
            width: ${(Math.min(168, resH(168)) / 168) * 174}px;
            height: ${Math.min(168, resH(168))}px;
            ${mq[2]} {
              display: none;
            }
            ${winWidth / winHeight < 1.69 &&
            css`
              display: none;
            `};
            /* ${mq[1]} {
            width: ${(Math.min(168, resH(168)) / 168) * 174 * 0.6}px;
            height: ${Math.min(168, resH(168)) * 0.6}px;
          }
          ${mq[0]} {
            width: ${(Math.min(168, resH(168)) / 168) * 174 * 0.5}px;
            height: ${Math.min(168, resH(168)) * 0.5}px;
          } */
          `}
          imgCss={css`
            width: ${(Math.min(168, resH(168)) / 168) * 174}px;
            height: ${Math.min(168, resH(168))}px;
            /* ${mq[1]} {
            width: ${(Math.min(168, resH(168)) / 168) * 174 * 0.6}px;
            height: ${Math.min(168, resH(168)) * 0.6}px;
          }
          ${mq[0]} {
            width: ${(Math.min(168, resH(168)) / 168) * 174 * 0.5}px;
            height: ${Math.min(168, resH(168)) * 0.5}px;
          } */
          `}
        />
        <BottomImage
          src={right}
          alt={"right_flower"}
          styleCss={css`
            position: absolute;
            right: 0;
            bottom: 0;
            width: ${Math.min(158, (resH(158) / 158) * 176)}px;
            height: ${Math.min(158, resH(158))}px;
            ${mq[2]} {
              display: none;
            }

            ${winWidth / winHeight < 1.69 &&
            css`
              display: none;
            `};

            /* ${mq[1]} {
            width: ${Math.min(162, (resH(162) / 162) * 176) * 0.6}px;
            height: ${Math.min(162, resH(162)) * 0.6}px;
          }
          ${mq[0]} {
            width: ${Math.min(162, (resH(162) / 162) * 176) * 0.5}px;
            height: ${Math.min(162, resH(162)) * 0.5}px;
          } */
          `}
          imgCss={css`
            width: ${Math.min(158, (resH(158) / 158) * 176)}px;
            height: ${Math.min(158, resH(158))}px;
            /* ${mq[1]} {
            width: ${Math.min(162, (resH(162) / 162) * 176) * 0.6}px;
            height: ${Math.min(162, resH(162)) * 0.6}px;
          }
          ${mq[0]} {
            width: ${Math.min(162, (resH(162) / 162) * 176) * 0.5}px;
            height: ${Math.min(162, resH(162)) * 0.5}px;
          } */
          `}
        />
      </div>
    </>
  );
};
