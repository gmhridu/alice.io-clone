import React, { useState } from "react";

const VideoDemo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="explainer" className="section-protected">
      <div className="padding-global padding-section-medium">
        <div className="container max-w-340 mx-auto">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-6">
            <div className="relative">
              <div className="absolute -right-2 -bottom-2 w-full h-full border-black border pointer-events-none z-0 " />

              {/* Video Column */}
              <div className="vimeo-video-wrapper stroke-shadow-dark">
                {/* Poster Image */}
                <img
                  src="/video-demo/poster-image.avif"
                  loading="lazy"
                  alt=""
                  className="vimeo_poster"
                  style={{ display: isPlaying ? "none" : "block" }}
                />

                {/* Custom Play Button */}
                {!isPlaying && (
                  <div
                    className="play-button"
                    onClick={togglePlay}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="play-button-inner-wrap">
                      <div className="play-button-inner w-embed">
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 62 62"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="31" cy="31" r="31" fill="#E686B4" />
                          <path
                            className="play-button__arrow"
                            d="M20 16 L46 31 L20 46 Z"
                            fill="currentColor"
                            stroke="#0d0d0d"
                            strokeWidth="1"
                          />
                        </svg>
                      </div>
                      <div className="play-button-inner-shadow" />

                      {/* Rays Animation */}
                      <div className="play-button-rays w-embed">
                        <svg
                          className="rays-svg"
                          viewBox="0 0 300 300"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="rays">
                            {Array.from({ length: 24 }).map((_, i) => (
                              <line
                                key={i}
                                x1="150"
                                y1="150"
                                x2="150"
                                y2="10"
                                transform={`rotate(${i * 15},150,150)`}
                              />
                            ))}
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                )}

                {/* Vimeo Video */}
                <div className="vimeo_video w-embed w-iframe">
                  <iframe
                    title="vimeo-player"
                    src="https://player.vimeo.com/video/1153867982?h=2868d5a676&title=0&byline=0&portrait=0"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    allowFullScreen
                    style={{ display: isPlaying ? "block" : "none" }}
                  />
                </div>
              </div>
            </div>

            {/* Text Column */}
            <div className="section_heading text-align-left is-home">
              <h2 className="home-video-title">
                If you’ve talked online with a friend, colleague, or chatbot in
                the last hour,{" "}
                <span className="text-style-italic">
                  Alice likely protected you.
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoDemo;
