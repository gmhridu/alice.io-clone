import { DotLottiePlayer } from "@dotlottie/react-player";
import React from "react";

const RabbitHole = () => {
  return (
    <section className="section-intell">
      <div className="padding-global padding-section-medium">
        <div className="container-large z-50">
          <div className="relative inline-block">
            <div className="absolute top-2 left-2 w-full h-full border border-(--borders--primary) bg-transparent pointer-events-none z-0" />
            <div className="intell_component">
              {/* <div className="absolute -right-2 -bottom-2 w-full h-full border-black border pointer-events-none z-0" /> */}
              {/* Heading */}
              <div className="section_heading max-width-xlarge">
                <div className="heading-eyebrow">
                  PROTECTING 3B+ PEOPLE ONLINE
                </div>
                <h2>
                  Powered by the world’s most comprehensive
                  <span className="text-style-italic">
                    {" "}
                    adversarial intelligence{" "}
                  </span>
                  engine - <br />
                  <span className="text-style-italic">Rabbit Hole</span>
                </h2>
              </div>

              <div className="flex flex-col items-center justify-center gap-6">
                {/* Lottie Animation */}
                <div className="sm:w-[350px]!">
                  <DotLottiePlayer
                    src="https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/695f9fbeb32bc160a7cc70c7_rabit%20with%20key.lottie"
                    autoplay
                    loop
                  />
                </div>

                {/* Content */}
                <div className="text-center max-w-7xl mx-auto">
                  <p>
                    Alice is powered by <a href="/intelligence">Rabbit Hole</a>,
                    built on billions of toxic, manipulative, and abusive data
                    samples and cross-cultural expert analysis. Rabbit Hole
                    adapts in real time, foreseeing emerging threats, surfacing
                    unseen risks, and feeding guardrails, enabling Alice to
                    test, harden, and protect systems of every kind: from UGC to
                    GenAI and soon enough, humanoid robots.
                    <br />
                    <br />
                    It’s what enables us to protect half the world’s online
                    users from harm, and why leading technology companies and
                    frontier model labs rely on Alice at scale.
                  </p>

                  <p>
                    Alice runs on Rabbit Hole, built on billions of toxic data
                    samples and expert analysis. Rabbit Hole adapts in real time
                    to surface risks and protect every system, from UGC to GenAI
                    to humanoid robots. It’s why leading technology companies
                    and frontier model labs rely on Alice at scale.
                  </p>
                </div>

                {/* Buttons */}
                <a href="/demo" className="button no-mobile w-button">
                  Navigate GenAI Wonderland
                </a>
                <a href="/demo" className="button only-mobile w-button">
                  Learn More &gt;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RabbitHole;
