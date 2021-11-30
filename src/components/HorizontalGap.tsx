import { css } from "@emotion/react";

const HorizontalGap = ({ val, ...props }) => {
  return (
    <div
      css={css`
        margin-left: ${val}px;
      `}
      {...props}
    />
  );
};

export { HorizontalGap };
