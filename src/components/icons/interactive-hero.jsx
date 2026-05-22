import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const InteractiveHero = () => {
  return (
    <div className="interactive-hero-wrapper">
      <DotLottieReact
        src="https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/695f42c2b37d7d8a59c5d709_interactive-home.json"
        autoplay
        loop
        mode="forward"
        backgroundColor="transparent"
        className="lottie-player"
      />

      <img
        src="https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/695f43cae38bdbbb595b81bf_046dafd558a2582a42a7c0d3cda1dff8_acountable_bg-line.svg"
        alt=""
        className="interactive-hero-bg"
        loading="lazy"
      />
    </div>
  );
};

export default InteractiveHero;
