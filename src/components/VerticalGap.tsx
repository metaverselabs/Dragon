import { css } from "@emotion/react";

const VerticalGap = ({ val }) => {
  return (
    <div
      css={css`
        margin-top: ${val}px;
      `}
    />
  );
};

export { VerticalGap };
