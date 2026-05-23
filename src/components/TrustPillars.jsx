import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import trustedLottie from "../assets/trusted-lottie/trusted-lottie.json";
import safeLottie from "../assets/trusted-lottie/safe-lottie.json";
import securedLottie from "../assets/trusted-lottie/secured-lottie.json";

const AlicePeaceOfMind = () => {
  return (
    <section className="section-peace">
      <div className="padding-global padding-section-medium">
        <div className="container max-w-340 mx-auto">
          <div className="peace_component">
            {/* Heading */}
            <div className="section_heading">
              <h2>Proven peace of mind</h2>
            </div>

            {/* 3-Column Grid */}
            <div className="grid_3-col">
              {/* Card 1 - Trusted */}
              <div className="card_item">
                <div className="card_top">
                  <div className="card_icon is-large">
                    <DotLottieReact data={trustedLottie} autoplay loop />
                  </div>
                  <div className="card_heading-large">Trusted</div>
                </div>
                <div className="card_divider"></div>
                <p className="text-color-secondary hpalmnt">
                  The backbone of the internet’s most popular platforms, proven
                  at scale across 100+ languages, keeping over 3 billion people
                  protected.
                </p>
              </div>

              {/* Card 2 - Safe */}
              <div
                className="card_item"
                data-w-id="379b0f97-02d3-206a-74d9-04653dfb561b"
              >
                <div className="card_top">
                  <div className="card_icon is-large">
                    <DotLottieReact data={safeLottie} autoplay loop />
                  </div>
                  <div className="card_heading-large">Safe</div>
                </div>
                <div className="card_divider"></div>
                <p className="text-color-secondary hpalmnt">
                  Powered by the industry’s richest real-world intelligence
                  dataset, intercepting tens of millions of adversarial sources,
                  delivering unmatched safety coverage.
                </p>
              </div>

              {/* Card 3 - Secured */}
              <div
                className="card_item"
                data-w-id="7027e7ae-232d-a418-69b2-c6b5d42981b3"
              >
                <div className="card_top">
                  <div className="card_icon is-large">
                    <DotLottieReact data={securedLottie} autoplay loop />
                  </div>
                  <div className="card_heading-large">Secured</div>
                </div>
                <div className="card_divider"></div>
                <p className="text-color-secondary hpalmnt">
                  Protecting and fortifying GenAI applications, agents, and
                  models against evolving exploit and abuse techniques. Tune
                  defenses to your needs and innovate with confidence.
                </p>
              </div>
            </div>

            {/* Certificates */}
            <div className="certificates_component">
              <div className="cert_icons-wrapper">
                <img
                  src="https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/690dd98b04bec8784dd14987_soc2.svg"
                  loading="lazy"
                  alt="SOC 2 Certified security compliance badge"
                  className="sertificate_icon"
                />
                <img
                  src="https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/690dd98bca642f01e8b7e47b_iso.svg"
                  loading="lazy"
                  alt="ISO 27001 Information Security certification badge"
                  className="sertificate_icon"
                />
              </div>
              <p className="certificates_subtitle">Safe. Honest. Kind.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlicePeaceOfMind;
