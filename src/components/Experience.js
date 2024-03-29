import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import Translate from "@docusaurus/Translate";
const experience = [
  {
    company: "Vercel",
    position: "Senior DX Engineer",
    date: "2022 - 2024 ",
    desc: {
      1: "Built out all of their framework=specific documentation, from popular options like Sveltekit.",
      2: "Led their Edge and Serverless compute documentation in direct collaboration with the Edge engineering team.",
      3: "Streamlined the workflow for those outside of the docs team to contribute more to the docs.",
    },
  },
  {
    company: "TakeShape IO",
    position: "Technical Writer",
    date: "2021 - 2022 ",
    desc: {
      1: "Self-planned and self-directed the growth of their docs site from a few articles to over 30 guides.",
      2: "Reported and communicated multiple UX issues and user-facing high-priority bugs to the engineering team with bug tickets that included video, GIFs and reproduction steps",
      3: "Led their email-marketing campaign, including onboarding, re-activating cold leads, and segmented promotions.",
    },
  },
  {
    company: "LI.FI",
    position: "Researcher",
    date: "October 2021 - March 2022",
    desc: {
      1: "Collaborated with the marketing and research teams to produce educational and selling content that drove up usage of the company's product.",
      2: "Wrote articles and guides that brought the company new connections in the Web3 industry, grew the discord community, and drove up downloads of the company's SDK.",
      3: "Excelled in user experience and user interfaces.",
    },
  },
  {
    company: "Prolific Digital",
    position: "Back-End Developer",
    date: "2021 - 2022",
    desc: {
      1: "Built a TypeScript SDK for headless e-commerce Drupal store developers.",
      2: "Lead documenting the SDK in GitBook.",
      3: "Worked closely with a development team as well as the clients, running a few client meetings when our team lead was unable to make it.",
    },
  },
];
function Experience() {
  const [value, setValue] = useState(0);
  const { company, position, date, desc } = experience[value];

  return (
    <section className="experience">
      <h2 className="experience-title">
        <Translate>Experience</Translate>
      </h2>
      <div className="underline"></div>
      <div className="experiences-center">
        <div className="btn-container">
          {experience.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => setValue(index)}
                className={`experience-btn ${index === value && "active-btn"}`}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        <article className="experience-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="experience-date">{date}</p>
          {Object.keys(desc).map((key, index) => {
            return (
              <div key={index} className="experience-desc">
                <FontAwesomeIcon
                  icon={faAngleDoubleRight}
                  className="experience-icon"
                ></FontAwesomeIcon>
                <p>{desc[key]}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default Experience;
