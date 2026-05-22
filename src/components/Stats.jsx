import React from "react";

const Stats = () => {
  const stats = [
    {
      number: "3B+",
      label: "Users",
    },
    {
      number: "120+",
      label: "Languages",
    },
    {
      number: "1B+",
      label: "Daily AI-Human interactions",
    },
  ];
  return (
    <section className="section-numbers">
      <div className="padding-global padding-section-small">
        <div className="container max-w-220 mx-auto">
          <div className="numbers_component">
            {/* Heading */}
            <div className="section_heading">
              <h2>
                Safeguarding{" "}
                <span className="text-style-italic">more than 50%</span> of the
                world’s online experiences
              </h2>
            </div>

            {/* Stats Grid */}
            <div className="grid_3-col is-w-gap">
              {stats.map((stat) => (
                <div key={stat.label} className="number_item">
                  <h2 className="text-style-italic">{stat.number}</h2>
                  <div className="divider is-dark"></div>
                  <div>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
