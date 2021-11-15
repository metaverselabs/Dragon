import ReactConfetti from "react-confetti";
import { useWindowSize } from "../../utils/useWindowSize";

// eslint-disable-next-line react/prop-types
export function Confetti({
  start,
  variant,
}: {
  start: boolean;
  variant?: string;
}) {
  const { winWidth, winHeight } = useWindowSize();

  const _variant = variant
    ? variant
    : winHeight && winWidth && winHeight > 1.5 * winWidth
    ? "bottom"
    : variant;

  return start && winWidth && winHeight ? (
    <ReactConfetti
      style={{ zIndex: 1401 }}
      numberOfPieces={400}
      recycle={false}
      run={true}
      width={winWidth}
      height={winHeight}
      confettiSource={{
        h: winHeight,
        w: winWidth,
        x: 0,
        y:
          _variant === "top"
            ? winHeight * 0.25
            : _variant === "bottom"
            ? winHeight * 0.75
            : winHeight * 0.5,
      }}
      initialVelocityX={15}
      initialVelocityY={30}
      gravity={0.45}
      tweenDuration={100}
      wind={0.05}
    />
  ) : null;
}
