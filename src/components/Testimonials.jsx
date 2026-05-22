import React, { useState, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const testimonials = [
    {
      text: "Alice has significantly impacted our iteration speed and confidence in our evaluations and mitigations. It has enabled us to develop a faster evaluation suite, allowing us to release models more quickly and safely.",
      name: "Seraphina Goldfarb-Tarrant",
      title: "Head of AI Safety | Cohere",
    },
    {
      text: "Alice has been a great partner to work with & I look forward to delivering next editions of Nova models to delight customers, while raising the bar on safety.",
      name: "Rahul Gupta",
      title: "Senior Manager, Responsible AI | Amazon AGI",
    },
    {
      text: "Alice is the only vendor I've seen that does this type of extremely high quality safety work based in a deep understanding of threat actors across violation types.",
      name: "Head of Safety",
      title: "Leading LLM",
    },
  ];

  const cards = [
    {
      lottie:
        "https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/695a5c4729166e3fc1083b7a_3544bf8016c478364747bde5ab4b7bff_card.lottie",
      title: (
        <>
          Epic, Real-World
          <br />
          Adversarial Intelligence
        </>
      ),
      desc: `Our solutions outperform industry benchmarks because they're
      powered by data drawn from a decade of real-world adversarial
      research...`,
    },
    {
      lottie:
        "https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/695a5c47b48a893c5b9e1edc_49a41b2a29e4882a55a00d0f75bd8c67_door.lottie",
      title: (
        <>
          The Rabbit Hole
          <br />
          Data Moat
        </>
      ),
      desc: `With billions of continually updated toxic examples, we train
      sharper classifiers and fuel stronger red-teaming...`,
    },
    {
      lottie:
        "https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/695a5c471a2c4314249d723f_582ff493e6e7f37f0fc4aede46c11fdd_key.lottie",
      title: (
        <>
          Adaptive, Customizable
          <br />
          Policy Alignment
        </>
      ),
      desc: `Keep your policies front and center, tuning coverage to your
      regulatory needs and risk tolerance...`,
    },
  ];

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  // Mouse move effect
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;

    const x = (clientX / window.innerWidth - 0.5) * 2;
    const y = (clientY / window.innerHeight - 0.5) * 2;

    setMousePosition({ x, y });
  };

  return (
    <>
      {/* ==================== Testimonials Section ==================== */}
      <section
        className="relative section-testimonials overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        <div className="padding-global padding-section-huge">
          <div className="container max-w-220 mx-auto">
            <div className="testimonials_component">
              <div
                className="testimonials_slider w-slider"
                role="region"
                aria-label="carousel"
              >
                {/* SLIDER MASK */}
                <div
                  className="testimonials_slider-mask w-slider-mask"
                  id="w-slider-mask-0"
                  style={{
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {testimonials.map((t, index) => {
                    const isActive = index === currentSlide;

                    return (
                      <div
                        key={index}
                        className={`testimonials_slide w-slide ${
                          isActive ? "w--current" : ""
                        }`}
                        style={{
                          transition: "all 500ms ease",
                          opacity: isActive ? 1 : 0,
                          transform: `translateX(${
                            (index - currentSlide) * 100
                          }%)`,
                          position: isActive ? "relative" : "absolute",
                          inset: 0,
                          width: "100%",
                        }}
                      >
                        <div className="testimonials_slide-inner p-4 sm:p-2!">
                          <p className="testimonials_text">"{t.text}"</p>

                          <div className="testimonials_author">
                            <div className="text-weight-medium">
                              {t.name}
                            </div>

                            <div>{t.title}</div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-center gap-8 mt-5">
                  {/* LEFT */}
                  <button
                    onClick={() =>
                      setCurrentSlide(
                        (prev) =>
                          (prev - 1 + testimonials.length) %
                          testimonials.length
                      )
                    }
                    className="size-4 flex items-center justify-center text-[#6E6D6B] hover:text-gray-900 transition-colors cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M6.656 6.032C6.656 6.032 6.43733 6.23467 6 6.64L5.664 6.944C5.952 6.93333 6.41067 6.928 7.04 6.928H13.296V9.04H7.04C6.42133 9.04 5.96267 9.03467 5.664 9.024C5.80267 9.14133 6.14933 9.47733 6.704 10.032L8.64 12.016H5.76L2 8.016L5.76 4H8.64L6.656 6.032Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>

                  {/* DOTS */}
                  <div className="flex items-center gap-3">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentSlide(i)}
                        className={`size-2 rounded-full transition-all duration-300 ${
                          i === currentSlide
                            ? "bg-[#6E6D6B] scale-125"
                            : "bg-gray-300 hover:bg-gray-400"
                        }`}
                      />
                    ))}
                  </div>

                  {/* RIGHT */}
                  <button
                    onClick={() =>
                      setCurrentSlide(
                        (prev) => (prev + 1) % testimonials.length
                      )
                    }
                    className="size-4 flex items-center justify-center text-[#6E6D6B] hover:text-gray-900 transition-colors cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M8.64 9.984C8.64 9.984 8.85867 9.78133 9.296 9.376L9.632 9.072C9.344 9.08267 8.88533 9.088 8.256 9.088H2V6.976H8.256C8.87467 6.976 9.33333 6.98133 9.632 6.992C9.49333 6.87467 9.14667 6.53867 8.592 5.984L6.656 4H9.536L13.296 8L9.536 12.016H6.656L8.64 9.984Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Images */}
        <img
          loading="lazy"
          src="https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/695fcff4328dc47fb8108837_82cf7d7d0d47934de81015a25868dd9b_middle.svg"
          alt=""
          className="teastimonials_bg-image is-middle"
          style={{
            willChange: "transform",
            transition: "transform 0.2s ease-out",
            transform: `translate3d(${
              mousePosition.x * -8
            }px, ${mousePosition.y * -8}px, 0px)`,
            transformStyle: "preserve-3d",
          }}
        />

        <img
          loading="lazy"
          src="https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/695fcff4334c013e46320b38_09fe41fa7b20fe7ce83ba0879367c84c_front.svg"
          alt=""
          className="teastimonials_bg-image is-front"
          style={{
            willChange: "transform",
            transition: "transform 0.2s ease-out",
            transform: `translate3d(${
              mousePosition.x * -16
            }px, ${mousePosition.y * -16}px, 0px)`,
            transformStyle: "preserve-3d",
          }}
        />

        <img
          loading="lazy"
          src="https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/695fcff45bee8a26c6bd6d3d_e1166c82f455d41a0e2aec102825fbd1_rare.svg"
          alt=""
          className="teastimonials_bg-image is-rare"
          style={{
            willChange: "transform",
            transition: "transform 0.2s ease-out",
            transform: `translate3d(${
              mousePosition.x * -4
            }px, ${mousePosition.y * -4}px, 0px)`,
            transformStyle: "preserve-3d",
          }}
        />
      </section>

      {/* ==================== Cards Section ==================== */}
      <div className="padding-global padding-section-medium">
        <div className="container max-w-340 mx-auto">
          <div className="cards_component">
            <div className="section_heading">
              <h2 className="max-width-xxlarge">
                From UGC to GenAI and humanoid robots, Alice allows you and your
                users to{" "}
                <span className="text-style-italic">
                  advance unafraid.
                </span>
              </h2>
            </div>

            <div className="grid_3-col">
              {cards.map((card, index) => (
                <div key={index} className="card_item stroke-shadow">
                  <div className="card_top">
                    <DotLottieReact
                      src={card.lottie}
                      autoplay
                      loop
                      style={{ width: "80px", height: "80px" }}
                    />

                    <h4 className="hmp_shift">{card.title}</h4>
                  </div>

                  <div className="card_divider"></div>

                  <p className="text-color-secondary hmp_shiftctt">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
