import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import interactiveLottie from "../../assets/interactive-lottie/interactive-lottie.json";

const InteractiveHero = () => {
  return (
    <div className="interactive-hero-wrapper">
      <DotLottieReact
        data={interactiveLottie}
        autoplay
        loop
        mode="forward"
        backgroundColor="transparent"
        className="lottie-player"
      />

      <img
        src="/interactive/interactive.svg"
        alt=""
        className="interactive-hero-bg"
        loading="lazy"
      />
    </div>
  );
};

export default InteractiveHero;
