import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import ProblemStatementLottie from "../assets/problem-statement-lottie/problem-statement-lottie.json";

/* ===================== EYE COMPONENT ===================== */
const Eye = ({ offset = 0, idPrefix = "eye" }) => {
  const leftClip = `${idPrefix}-left`;
  const rightClip = `${idPrefix}-right`;

  const EyeSvg = ({ clipId, pupilShift = 0 }) => (
    <svg className="eye" viewBox="0 0 26 18" width="26" height="18">
      <defs>
        <clipPath id={clipId}>
          <path d="M12.7864 0C6.90566 0 1.81183 5.83236 0 8.74854C1.98438 11.5957 7.31979 17.2901 12.7864 17.2901C18.253 17.2901 23.6919 11.3541 25.7281 8.38614C23.8645 5.59076 18.6671 0 12.7864 0Z" />
        </clipPath>
      </defs>

      <g className="eye-inner">
        {/* White part of eye */}
        <path
          d="M12.7864 0C6.90566 0 1.81183 5.83236 0 8.74854C1.98438 11.5957 7.31979 17.2901 12.7864 17.2901C18.253 17.2901 23.6919 11.3541 25.7281 8.38614C23.8645 5.59076 18.6671 0 12.7864 0Z"
          fill="white"
        />

        {/* Pupil */}
        <g clipPath={`url(#${clipId})`}>
          <g
            style={{
              transform: `translate(${pupilShift}px, 3px)`,
              transition: "transform 0.15s ease-out",
            }}
          >
            <ellipse cx="13" cy="9" rx="4.4" ry="8.2" fill="#0D0D0D" />
          </g>
        </g>
      </g>
    </svg>
  );

  return (
    <div style={{ display: "flex", gap: "8px" }}>
      <EyeSvg clipId={leftClip} pupilShift={offset - 3} />
      <EyeSvg clipId={rightClip} pupilShift={offset + 3} />
    </div>
  );
};

/* ===================== MAIN COMPONENT ===================== */
const ProblemStatement = () => {
  return (
    <section className="section-accountable pt-20">
      <div className="padding-global padding-section-small is-account">
        <div className="container max-w-340 mx-auto">
          <div className="accontable_component">
            {/* Heading */}
            <div className="section_heading">
              <div className="heading-eyebrow">
                The internet is a wonderful place. Mostly.
              </div>
              <h2 className="max-width-xlarge">
                Wherever people and technology meet, powerful tools can be
                manipulated to do harmful things.{" "}
                <span className="text-style-italic">
                  And&nbsp;you’re held accountable.
                </span>
              </h2>
            </div>

            {/* Cards */}
            <div className="grid_4-col">
              {[
                {
                  title: "Unintended GenAI Behavior",
                  desc: "GenAI can produce harmful or misleading content at a scale traditional security and safety controls can’t reliably manage.",
                },
                {
                  title: "Application-Level Exploitation",
                  desc: "Prompt injection, jailbreaks, and model exploits expose applications, agents, and integrations to data leakage or abuse.",
                },
                {
                  title: "Governance and Compliance Gaps",
                  desc: "Abusive, harmful, or non-compliant interactions undermine security and safety policy enforcement and responsible AI governance.",
                },
                {
                  title: "Reputational and Trust Exposure",
                  desc: "A single failure can trigger legal liability, regulatory scrutiny, stalled innovation momentum, and lasting damage to brand trust.",
                },
              ].map((item, i) => (
                <div key={i} className="card_item on-blue-dark">
                  <h4>{item.title}</h4>
                  <div className="card_divider"></div>
                  <p className="text-color-secondary-light">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="acountable_bottom-text">
              <a
                href="#explainer"
                className="button w-variant-6b0d1ec3-06ac-c808-569a-90f5fb8ed31d w-button"
              >
                Step into GenAI Wonderland
              </a>
            </div>

            {/* ===================== EYES ===================== */}
            {/* Eye Group 01 - Top Left (already good) */}
            {/* <div className="eyes _01 w-embed" style={{ position: "absolute", top: "22%", left: "12%" }}>
              <Eye idPrefix="eye1" />
            </div> */}

            {/* Eye Group 02 - Right Side */}
            {/* <div className="eyes _02 w-embed" style={{ position: "absolute", top: "28%", right: "15%" }}> */}
            <Eye idPrefix="eye2" offset={-2} />
            {/* </div> */}

            {/* Eye Group 03 - Bottom Left */}
            <div
              className="eyes _03 w-embed"
              style={{ position: "absolute", bottom: "28%", left: "18%" }}
            >
              <Eye idPrefix="eye3" offset={-4} />
            </div>

            {/* Eye Group 04 - Bottom Right */}
            {/* <div className="eyes _04 w-embed" style={{ position: "absolute", bottom: "32%", right: "22%" }}>
              <Eye idPrefix="eye4" offset={4} />
            </div> */}

            {/* Eye Group 05 - Bottom Right (further away) */}
            {/* <div className="eyes _05 w-embed" style={{ position: "absolute", bottom: "25%", right: "8%" }}>
              <Eye idPrefix="eye5" offset={-1} />
            </div> */}
          </div>
        </div>
      </div>

      {/* Lottie Background */}
      <div
        className="acountable_bg-image is-bottom"
        style={{ marginBottom: "-3.7%" }}
      >
        <DotLottieReact
          data={ProblemStatementLottie}
          autoplay
          loop
          className="block"
          style={{ display: "block" }}
        />
      </div>
    </section>
  );
};

export default ProblemStatement;
