import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import animationData from "../assets/hero-lottie/hero-lottie.json";

const Hero = () => {
  return (
    <section className="section-hero">
      <div className="padding-global padding-section-medium is-home">
        <div className="container max-w-340 mx-auto">
          <div className="hero_component">
            <div className="section_heading is-small-gap">
              <div className="heading-eyebrow">INNOVATE UNAFRAID</div>
              <h1 className="font-light">
                Security, Safety, and Trust
                <br />
                <span className="font-semibold italic">for the AI Era</span>
              </h1>
            </div>

            <div className="section_subheading">
              <a href="/demo" className="button w-button">
                Get a Demo
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Illustration / River */}
      <div className="hero_image-wrapper">
        <DotLottieReact
          data={animationData}
          autoplay
          loop
        />
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `,
        }}
      />
    </section>
  );
};

export default Hero;
