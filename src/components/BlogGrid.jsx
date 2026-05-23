const BlogGrid = () => {
  return (
    <div className="no-mobile">
      <section className="section-new">
        <div className="padding-section-medium">
          <div className="padding-global">
            <div className="container max-w-340 mx-auto">
              <div className="news-cards_wrapper">
                {/* Heading */}
                <div className="text-align-center">
                  <h2>
                    What’s New from <span className="a-swoosh">A</span>
                    <span className="text-style-italic">lice</span>
                  </h2>
                </div>

                {/* News Cards */}
                <div className="news_cards">
                  {/* Card 1 - Blog */}
                  <div
                    className="card_item is-resource"
                    data-wf--cms-card--variant="blog"
                  >
                    <a
                      href="/blog/introducing-ai-guardrails-built-for-financial-services"
                      className="card_item-link w-inline-block"
                    >
                      <div
                        className="card_item-top"
                        style={{ height: "252px" }}
                      >
                        <div className="card_item-asset">
                          <img
                            src="/blog-grid/blog-grid-logo-one.svg"
                            loading="lazy"
                            alt=""
                            className="card_item-img-tag"
                          />
                        </div>
                        <div className="card_item-top-head">
                          <h3 className="card_item-title text-style-3lines">
                            Introducing AI Guardrails Built for Financial
                            Services
                          </h3>
                        </div>
                      </div>
                    </a>

                    <a
                      href="/blog/introducing-ai-guardrails-built-for-financial-services"
                      className="card_item-link expand w-inline-block"
                    >
                      <div className="card_item-bottom">
                        <div className="card_item-info_wrap">
                          <div className="card_item-info">
                            <div className="tag text-weight-medium">blog</div>
                            <div className="card_item-event-date">
                              <div className="card_item-date text-inline">
                                May 20, 2026
                              </div>
                            </div>
                            <p className="text-style-3lines">
                              Generic AI guardrails weren't built for the
                              regulatory bar financial services must clear. The
                              FSI Detector Pack catches the advice, commitment,
                              fraud, and data risks they miss...
                            </p>
                          </div>
                        </div>
                        <div className="button is-text">Learn More</div>
                      </div>
                    </a>
                  </div>

                  {/* Card 2 - Podcast */}
                  <div
                    className="card_item is-resource"
                    data-wf--cms-card--variant="podcast"
                  >
                    <a
                      href="/podcast#latest-episode"
                      className="card_item-link w-inline-block"
                    >
                      <div
                        className="card_item-top"
                        style={{ height: "252px" }}
                      >
                        <div className="card_item-asset">
                          <img
                            src="/blog-grid/blog-grid-logo-two.svg"
                            loading="lazy"
                            alt=""
                            className="card_item-img-tag"
                          />
                        </div>
                        <div className="card_item-top-head">
                          <h3 className="card_item-title text-style-3lines">
                            The Problem With AI Observability Nobody Wants To
                            Admit
                          </h3>
                        </div>
                      </div>
                    </a>

                    <a
                      href="/podcast#latest-episode"
                      className="card_item-link expand w-inline-block"
                    >
                      <div className="card_item-bottom">
                        <div className="card_item-info_wrap">
                          <div className="card_item-info">
                            <div className="tag text-weight-medium">
                              podcast
                            </div>
                            <div className="card_item-event-date">
                              <div className="card_item-date text-inline">
                                May 19, 2026
                              </div>
                            </div>
                            <p className="text-style-3lines">
                              Most enterprises have guardrails. Far fewer have
                              visibility into what their AI is actually doing...
                            </p>
                          </div>
                        </div>
                        <div className="button is-text">Listen Now</div>
                      </div>
                    </a>
                  </div>

                  {/* Card 3 - Webinar */}
                  <div
                    className="card_item is-resource"
                    data-wf--cms-card--variant="webinars"
                  >
                    <a
                      href="/webinars/distilling-llms"
                      className="card_item-link w-inline-block"
                    >
                      <div
                        className="card_item-top"
                        style={{ height: "252px" }}
                      >
                        <div className="card_item-asset">
                          <img
                            src="https://cdn.prod.website-files.com/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                            loading="lazy"
                            alt=""
                            className="card_item-img-tag"
                          />
                        </div>
                        <div className="card_item-top-head">
                          <h3 className="card_item-title text-style-3lines">
                            Distilling LLMs into Efficient Transformers for
                            Real-World AI
                          </h3>
                        </div>
                      </div>
                    </a>

                    <a
                      href="/webinars/distilling-llms"
                      className="card_item-link expand w-inline-block"
                    >
                      <div className="card_item-bottom">
                        <div className="card_item-info_wrap">
                          <div className="card_item-info">
                            <div className="tag text-weight-medium">
                              webinar
                            </div>
                            <div className="card_item-event-date">
                              <div className="card_item-date text-inline">
                                Sep 25, 2025
                              </div>
                            </div>
                            <p className="text-style-3lines">
                              This technical webinar explores how we distilled
                              the world knowledge of a large language model...
                            </p>
                          </div>
                        </div>
                        <div className="button is-text">Learn More</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogGrid;
