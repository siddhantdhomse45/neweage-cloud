import React from "react";
import styles from "./careerCard.module.css";

const cultureData = [
  {
    icon: "https://www.softgridcomputers.com/img/5_days_working.svg",
    title: "5 Days Working",
    description: "The 5-day working week provides a structured and predictable work schedule, making it easier for employees to plan their personal lives around their work commitments.",
  },
  {
    icon: "https://www.softgridcomputers.com/img/personal_growth.svg",
    title: "Personal Growth",
    description: "Establishing clear and achievable objectives helps focus efforts and provides a sense of direction in personal development.",
  },
  {
    icon: "https://www.softgridcomputers.com/img/technology_advancements.svg",
    title: "Technology Advancement",
    description: "Since technology evolves rapidly, it's essential to keep track of the latest developments. We, at GenXAI Softgrid, provide opportunities to work with advance technologies.",
  },
  {
    icon: "https://www.softgridcomputers.com/img/equal_opportunity.svg",
    title: "Equal Opportunity",
    description:
      "Promoting fair hiring practices and equal pay for equal work, regardless of gender, race, or other characteristics.",
  },
  {
    icon: "https://www.softgridcomputers.com/img/training.svg",
    title: "Training",
    description: "Employee training is a vital process to equip employees with the necessary skills and knowledge to perform their job roles effectively. We provide on-the-job training, workshops, seminars, and online courses.",
  },
  {
    icon: "https://www.softgridcomputers.com/img/rewarding.svg",
    title: "Rewarding Opportunity",
    description: "We give opportunity for career advancement, such as a promotion or a new challenging role, as it allows you to take on more responsibility, grow professionally, and achieve your career goals.",
  },
  {
    icon: "https://www.softgridcomputers.com/img/satisfaction.svg",
    title: "Satisfaction",
    description: "We provide a positive and supportive work environment, where employees feel valued, respected, and supported by their colleagues and supervisors for complete job satisfaction.",
  },
  {
    icon: "https://www.softgridcomputers.com/img/noun-building.svg",
    title: "Infrastructure",
    description: "We ensure that employees have the necessary tools and resources to perform their tasks efficiently and that the organisation can meet its objectives effectively.",
  },
];

const CultureGrid = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>NEWEAGE CLOUD CULTURE</h2>
      <div className={styles.grid}>
        {cultureData.map((item, idx) => (
          <div key={idx} className={styles.card}>
            <div className={styles.inner}>
              <div className={styles.front}>
                <div className={styles.icon}>
                  <img
                    src={item.icon}
                    alt={item.title}
                    className={styles.image}
                  />
                </div>
                <p className={styles.text}>{item.title}</p>
              </div>
              <div className={styles.back}>
                <p className={styles.description}>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CultureGrid;
