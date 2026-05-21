import { DotLottiePlayer } from "@dotlottie/react-player";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <style>{`
        /* ─── Mobile Responsive Footer ───────────────────────────── */

        /* Tablet: 2-column grid */
        @media (max-width: 991px) {
          .footer_component {
            grid-template-columns: 1fr 1fr;
          }
          .footer_item.is-first {
            grid-column: 1 / -1;
          }
        }

        /* Mobile: 2-column grid, logo full-width */
        @media (max-width: 767px) {
          .footer_component {
            grid-template-columns: 1fr 1fr;
            grid-column-gap: 1.25rem;
            grid-row-gap: 1.5rem;
          }
          .footer_item.is-first {
            grid-column: 1 / -1;
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 1rem;
          }
          .footer_logo {
            width: 9rem !important;
            height: 2.5rem !important;
          }
          .footer_logo img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
          .button.is-footer {
            display: block;
            width: 100%;
            text-align: center;
            box-sizing: border-box;
          }
          .footer_social {
            border-top: none;
            padding-top: 0;
            width: 100%;
          }
          .footer_bottom {
            flex-wrap: wrap;
            gap: 0.6rem;
            padding-top: 1.25rem;
          }
          .footer_bottom .footer_nav-link {
            font-size: 0.8rem;
          }
          .footer_lottie-onlight {
            margin-top: -2rem;
          }
        }

        /* Very small: keep 2 columns but tighten gaps */
        @media (max-width: 479px) {
          .footer_component {
            grid-column-gap: 1rem;
            grid-row-gap: 1.25rem;
          }
          .footer_item {
            grid-row-gap: 0.5rem;
          }
          .footer_nav-link {
            font-size: 0.875rem;
          }
        }
      `}</style>

      <div className="padding-global padding-section-large is-footer">
        <div className="container-large">
          <div className="footer_component">
            {/* First Column - Logo + Demo Button + Social */}
            <div className="footer_item is-first">
              <a
                href="/"
                aria-current="page"
                className="footer_logo-link w-inline-block w--current"
              >
                <div
                  className="footer_logo w-embed"
                  style={{
                    width: "12.75rem",
                    height: "3.25rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="/logo/logo text.svg"
                    alt="Alice logo"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>
              </a>

              <a href="/demo" className="button is-footer w-button">
                Get a Demo
              </a>

              <div className="footer_social">
                <div>Follow us on</div>
                <div className="footer_social-links">
                  <a
                    href="https://www.linkedin.com/company/alice-io/"
                    target="_blank"
                    className="social-link w-inline-block"
                  >
                    <div className="icon-small w-embed">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        viewBox="0 0 23 23"
                        fill="none"
                      >
                        <path
                          d="M0.414864 22.1952H4.97836V7.42152H0.414864V22.1952Z"
                          fill="currentColor"
                        />
                        <path
                          d="M0 2.70504C0 4.1616 1.17545 5.34072 2.69661 5.34072C4.14864 5.34072 5.32408 4.1616 5.32408 2.70504C5.32408 1.24848 4.14864 0 2.69661 0C1.17545 0 0 1.24848 0 2.70504Z"
                          fill="currentColor"
                        />
                        <path
                          d="M17.5626 22.1952H22.1952V14.0801C22.1952 10.1266 21.2963 7.00536 16.6637 7.00536C14.4511 7.00536 12.9299 8.25384 12.3076 9.43296H12.2385V7.42152H7.88241V22.1952H12.4459V14.9124C12.4459 12.9703 12.7916 11.0976 15.2117 11.0976C17.5626 11.0976 17.5626 13.3171 17.5626 14.9818V22.1952Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </a>
                  <a
                    href="https://x.com/alice_dot_io"
                    target="_blank"
                    className="social-link w-inline-block"
                  >
                    <div className="icon-small w-embed">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                        <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                      </svg>
                    </div>
                  </a>
                  <a
                    href="https://www.youtube.com/@Alice.io.advance.unafraid"
                    target="_blank"
                    className="social-link w-inline-block"
                  >
                    <div className="icon-small w-embed">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-12a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-9 6v6a1 1 0 0 0 1.514 .857l5 -3a1 1 0 0 0 0 -1.714l-5 -3a1 1 0 0 0 -1.514 .857z" />
                      </svg>
                    </div>
                  </a>
                  <a
                    href="http://medium.com/@engineering.alice"
                    target="_blank"
                    className="social-link w-inline-block"
                  >
                    <div className="icon-small w-embed">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        viewBox="0 0 17 14"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_1315_64656)">
                          <path
                            d="M16.1859 0.160313L16.2056 0.155625V0H12.0872L8.26311 8.98781L4.43905 0H0.00185974V0.156562L0.0215472 0.16125C0.773422 0.330938 1.15498 0.584063 1.15498 1.49625V12.1791C1.15498 13.0913 0.771547 13.3444 0.0196722 13.5141L-1.52588e-05 13.5187V13.6753H3.01123V13.5197L2.99155 13.515C2.23967 13.3453 1.85811 13.0922 1.85811 12.18V2.11594L6.77061 13.6763H7.04905L12.104 1.79437V12.4444C12.0394 13.1653 11.6615 13.3875 10.9809 13.5413L10.9612 13.5459V13.7006H16.2065V13.5459L16.1869 13.5413C15.5053 13.3875 15.1181 13.1653 15.0534 12.4444L15.0497 1.49719H15.0534C15.0534 0.585 15.435 0.331875 16.1869 0.162188"
                            fill="currentColor"
                          />
                        </g>
                      </svg>
                    </div>
                  </a>
                  <a
                    href="https://open.spotify.com/show/5c2sTWoqHEYLrXfLLegvek"
                    target="_blank"
                    className="social-link w-inline-block"
                  >
                    <div className="icon-small is--centered w-embed">
                      <svg
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.04492 0C14.0407 0 18.0907 4.04916 18.0908 9.04492C18.0908 14.0408 14.0408 18.0908 9.04492 18.0908C4.04916 18.0907 0 14.0407 0 9.04492C0.000146934 4.04925 4.04925 0.000141804 9.04492 0ZM13.2471 12.2744C12.1386 11.6372 9.94881 10.625 5.06543 11.2559C4.70428 11.3015 4.43017 11.6587 4.45508 12.0801C4.48016 12.524 4.81636 12.8308 5.2002 12.8018H5.19824C7.35054 12.6399 9.35137 12.061 12.5518 13.7607C12.8236 13.906 13.1331 13.8689 13.3428 13.624L13.4316 13.5205C13.7534 13.1407 13.658 12.511 13.2471 12.2744ZM13.9893 9.3125C12.7501 8.60058 10.0159 7.61135 4.8457 8.17383C4.4413 8.21769 4.13626 8.62389 4.16309 9.09473C4.19007 9.59079 4.5706 9.95838 4.99609 9.90234C6.66306 9.68026 10.6291 9.37145 13.2129 10.9736C13.5055 11.1541 13.8623 11.0933 14.0947 10.8193L14.1943 10.7031C14.5532 10.2797 14.4479 9.57606 13.9893 9.3125ZM15.0049 6.24902C13.7967 5.51005 10.9259 3.96403 4.45898 4.83984C3.98381 4.90421 3.6105 5.34432 3.61035 5.90039V5.94629C3.61035 6.58757 4.09372 7.08387 4.6416 7.00098V7.00293C6.62584 6.69782 11.0473 6.30131 14.1523 8.12988C14.6587 8.42641 15.2709 8.14027 15.4453 7.51367C15.5802 7.02384 15.3972 6.48979 15.0049 6.24902Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Products */}
            <div className="footer_item">
              <div className="text-weight-semibold">Products</div>
              <a href="/products/platform" className="footer_nav-link">
                Platform Overview
              </a>
              <a href="/products/wonderbuild" className="footer_nav-link">
                WonderBuild
              </a>
              <a href="/products/wonderfence" className="footer_nav-link">
                WonderFence
              </a>
              <a href="/products/wondercheck" className="footer_nav-link">
                WonderCheck
              </a>
              <a href="/intelligence" className="footer_nav-link">
                Intelligence
              </a>
            </div>

            {/* Solutions */}
            <div className="footer_item">
              <div className="text-weight-semibold">Solutions</div>
              <a
                href="/solutions/foundation-models"
                className="footer_nav-link"
              >
                Foundation Model
              </a>
              <a href="/solutions/apps-and-agents" className="footer_nav-link">
                Gen AI Apps &amp; Agents
              </a>
              <a href="/solutions/activefence-ugc" className="footer_nav-link">
                ActiveFence - UGC
              </a>
            </div>

            {/* Where We Operate */}
            <div className="footer_item">
              <div className="text-weight-semibold">Where We Operate</div>
              <a href="/case-studies" className="footer_nav-link">
                Customers
              </a>
              <a href="/ecosystem" className="footer_nav-link">
                Ecosystem
              </a>
            </div>

            {/* Resources */}
            <div className="footer_item">
              <div className="text-weight-semibold">Resources</div>
              <a href="/blog" className="footer_nav-link">
                Perspectives Blog
              </a>
              <a
                href="https://medium.com/engineering-activefence"
                target="_blank"
                className="footer_nav-link"
              >
                Engineering Blog
              </a>
              <a
                href="https://medium.com/intelligence-alice"
                target="_blank"
                className="footer_nav-link"
              >
                Intelligence Blog
              </a>
              <a href="/resources" className="footer_nav-link">
                Learning
              </a>
              <a href="/glossary" className="footer_nav-link">
                Glossary
              </a>
              <a href="/podcast" className="footer_nav-link">
                Podcast
              </a>
            </div>

            {/* Company */}
            <div className="footer_item">
              <div className="text-weight-semibold">Company</div>
              <a href="/about" className="footer_nav-link">
                About
              </a>
              <a href="/media-news" className="footer_nav-link">
                Newsroom
              </a>
              <a href="/ecosystem" className="footer_nav-link">
                Ecosystem
              </a>
              <a href="/careers" className="footer_nav-link">
                Careers
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer_bottom">
            <div className="footer_nav-link">
              ©<span id="footerYear">2026</span> ActiveFence
            </div>
            <a href="/privacy-policy" className="footer_nav-link">
              Privacy Policy
            </a>
            <a href="/accessibility-statement" className="footer_nav-link">
              Accessibility Statement
            </a>
            <a
              href="/california-consumer-privacy-act"
              className="footer_nav-link"
            >
              CPRA
            </a>
            <a href="/terms-of-use" className="footer_nav-link">
              Terms of Use
            </a>
            <a href="/cookie-policy" className="footer_nav-link">
              Cookie Policy
            </a>
            <a href="/llm" className="footer_nav-link">
              LLM Reference
            </a>
          </div>
        </div>
      </div>

      {/* Footer Lottie Animation */}
      <div>
        <DotLottiePlayer
          src="https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/695690f207b1e3b583581f37_7c331b1540be05740c098ee285af33a0_FOOTER.lottie"
          autoplay
          loop
        />
      </div>
    </footer>
  );
};

export default Footer;
