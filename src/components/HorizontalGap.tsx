import { css } from "@emotion/react";

const HorizontalGap = ({ val }) => {
  return (
    <div
      css={css`
        margin-left: ${val}px;
      `}
    />
  );
};

export { HorizontalGap };
