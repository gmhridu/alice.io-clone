import { DotLottiePlayer } from "@dotlottie/react-player";


const Hero = () => {
  return (
    <section className="section-hero">
      <div className="padding-global padding-section-medium is-home">
        <div className="container-large">
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
        <DotLottiePlayer
          src={
            "https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/6956a61097d36459536e00e0_c1d7ccc14a955f62034cbc528441a3aa_HERO.lottie"
          }
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
