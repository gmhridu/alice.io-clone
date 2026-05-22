import React, { useState, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const WonderSuite = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [progress, setProgress] = useState(0);

  const tabs = [
    {
      id: "Tab 1",
      title: "WonderBuild",
      iconLottieSrc:
        "https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/695a5c48f0fa7619c8ccee0b_887069796c974a61836b319d58ccb92c_Screw.lottie",
      heading: "Pre-Launch Stress Testing",
      description: "Comprehensive evaluation before deployment",
      image:
        "https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/69fb92b707dbee5a94e0b14f_WFINAL.jpg",
    },
    {
      id: "Tab 2",
      title: "WonderFence",
      iconLottieSrc:
        "https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/695bbddc61db3898e0c95413_3dbd1ce0b4e0ab31ec61dabf5ed8ce7d_Shield2.lottie",
      heading: "Dynamic Runtime Guardrails",
      description: "Real-time protection for your AI applications",
      image:
        "https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/69fb8fea74eadfbe5277d319_WB.jpg",
    },
    {
      id: "Tab 3",
      title: "WonderCheck",
      iconLottieSrc:
        "https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/695bbdda8f56e61075595ee5_35a0169550eb55eac675e1b7db8bea4d_magnify2k.json",
      heading: "Ongoing Automated Red-Teaming",
      description:
        "Evaluation for production AI systems to detect drift, surface emerging risks, and prioritize remediation",
      image:
        "https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/69fb8fa225b537b4e5eb703e_WC_10.jpg",
    },
  ];

  useEffect(() => {
    let startTime = Date.now();

    setProgress(0);

    const duration = 15000;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);

      setProgress(newProgress);
    }, 50);

    const timeout = setTimeout(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, duration);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [activeTab, tabs.length]);

  return (
    <section className="section-intro">
      <div className="padding-global padding-section-medium">
        <div className="container max-w-340 mx-auto">
          <div className="intro_component">
            <div className="section_heading">
              <div className="heading-eyebrow font-medium is-wide">
                Introducing
              </div>
              <div className="divider"></div>

              <h2 className="heading-style-h1 italic font-semibold!">
                <span className="letter-swoosh font-semibold!">W</span>
                onderSuite
              </h2>

              <div className="section_subheading">
                <h2>
                  Security Platform for Enterprise AI - <br />
                  Test, Protect, and Monitor AI Apps &amp; Agents
                </h2>
              </div>

              <a
                href="/products/platform"
                className="button w-variant-231b04cb-9d1a-e33b-7dac-9451a1e22084 w-button"
              >
                {" "}
                Platform Overview{" "}
              </a>

              <div className="divider is-bottom"></div>
            </div>

            {/* TABS */}
            <div className="intro_tabs w-tabs">
              <div className="intro_tabs-menu w-tab-menu" role="tablist">
                {tabs.map((tab, index) => {
                  const isActive = activeTab === index;

                  return (
                    <a
                      key={index}
                      href="#"
                      className={`intro_tabs-link w-inline-block w-tab-link ${
                        isActive ? "w--current" : ""
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveTab(index);
                      }}
                      role="tab"
                    >
                      <div className="intro_tabs-link-heading">
                        <div className="icon-medium">
                          <DotLottieReact
                            key={`${tab.title}-${isActive}`}
                            src={tab.iconLottieSrc}
                            autoplay={isActive}
                            loop={isActive}
                            style={{ width: "2rem", height: "2rem" }}
                          />
                        </div>
                        <div className="text-black">{tab.title}</div>
                      </div>

                      <div className="divider"></div>

                      <div className="heading-style-h4 text-black">
                        {tab.heading}
                      </div>

                      <div className="intro_tab-text">
                        <p className="text-style-muted">{tab.description}</p>
                      </div>

                      <div className="intro_tabs-progress">
                        <div
                          style={{
                            width: `${isActive ? progress : 0}%`,
                            height: "100%",
                            backgroundColor: "var(--bg-black)",
                            transition: "width 0.05s linear",
                          }}
                        />
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* TAB CONTENT */}

              <div className="intro_tabs-content w-tab-content">
                {tabs.map((tab, index) => (
                  <div
                    key={index}
                    className={`intro_tabs-pane w-tab-pane ${
                      activeTab === index ? "w--tab-active" : ""
                    }`}
                    style={{
                      display: activeTab === index ? "block" : "none",
                    }}
                  >
                    <img
                      src={tab.image}
                      loading="lazy"
                      alt=""
                      className="info_tabs-image"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WonderSuite;
