import React from "react";
import "./portfolio.css";
import IMG1 from "../../Assets/assets/portfolio1.jpg";
import IMG2 from "../../Assets/assets/portfolio2.jpg";
import IMG3 from "../../Assets/assets/portfolio3.jpg";
import IMG4 from "../../Assets/assets/portfolio4.jpg";
import IMG5 from "../../Assets/assets/portfolio5.jpg";
import IMG6 from "../../Assets/assets/portfolio6.jpg";
import IMG7 from "../../Assets/assets/portfolio7.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Bubble Log in",
    github: "https://github.com/Divyanshu-2022/Bubble-water-",
    live: "https://majestic-otter-20e8d3.netlify.app",
  },
  {
    id: 2,
    image: IMG2,
    title: "Pomodaro App",
    github: "https://github.com/Divyanshu-2022/Pomodaro-timer",
    live: "https://marvelous-llama-49c63f.netlify.app",
  },
  {
    id: 3,
    image: IMG3,
    title: "Task-Tracker(TO DO LIST)",
    github: " https://github.com/Divyanshu-2022/Task-Tracker",
    live: "https://helpful-biscuit-f3b4e1.netlify.app",
  },
  {
    id: 4,
    image: IMG4,
    title: "Rock-papper-scissors Game",
    github: "https://github.com/Divyanshu-2022/rock-paper-scisor-game",
    live: "https://illustrious-starlight-ef549a.netlify.app",
  },
  {
    id: 5,
    image: IMG5,
    title: "Portfolio",
    github: "https://github.com/Divyanshu-2022/Portfolio",
    live: "https://genuine-gnome-c47973.netlify.app",
  },
  {
    id: 6,
    image: IMG6,
    title: "Birthday Wishes",
    github: " https://github.com/Divyanshu-2022/Birthday-Wishes",
    live: "https://papaya-lebkuchen-6fb91f.netlify.app",
  },
  {
    id: 7,
    image: IMG7,
    title: "Survey From",
    github: " https://github.com/Divyanshu-2022/Birthday-Wishes",
    live: "https://papaya-lebkuchen-6fb91f.netlify.app",
  },
];

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, live }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-img">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={live} className="btn" target="_blank">
                  Live Page
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default portfolio;
