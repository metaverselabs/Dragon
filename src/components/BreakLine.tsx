import { css } from "@emotion/react";

const BreakLine = ({ cssStyle, ...props }) => {
  return (
    <div
      css={css`
        ${cssStyle}
      `}
      {...props}
    />
  );
};

export { BreakLine };
