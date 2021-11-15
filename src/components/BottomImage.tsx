/* eslint-disable @next/next/no-img-element */
import { css } from "@emotion/react";
// import Image from "next/image";
interface BIType {
  width?: string;
  height?: string;
  styleCss?: any;
  src: any;
  alt: string;
  imgCss?: any;
}

export const BottomImage = ({
  width,
  height,
  styleCss,
  src,
  alt,
  imgCss,
}: BIType) => {
  return (
    <div
      css={css`
        width: ${width};
        height: ${height};
        ${styleCss}
      `}
    >
      <div
        css={css`
          position: relative;
          width: 100%;
          height: 100%;
        `}
      >
        <img
          src={src}
          alt={alt}
          css={css`
            width: ${width};
            height: ${height};
            object-fit: contain;
            ${imgCss};
          `}
        />
      </div>
    </div>
  );
};
