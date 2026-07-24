import styles from "./ProjectsList.module.css";

function ProjectCard({ path, details, heading, github_link, demo, demo_btn }) {
  return (
    <div className={styles.project_card}>
      <div className={styles.laptopWrapper}>
        <img
          src="laptop_realistic.png"
          alt="Laptop Background"
          className={styles.project_bg}
        />

        <img
          src={path}
          alt="Project Preview"
          className={styles.project_preview}
        />
      </div>

      <h3 className={`${styles.project_name} text-2xl text-center`}>
        {heading}
      </h3>
      <p className={`${styles.project_details}`}>{details}</p>

      <div className={`${styles.project_button} flex justify-around`}>
        <button className="px-3 py-1">
          <a href={github_link}>Github</a>
        </button>

        <button className="px-3 py-1">
          <a href={demo}>{demo_btn}</a>
        </button>
      </div>
    </div>
  );
}

function ProjectsList() {
  const projects = [
    {
      path: "StarRating.png",
      heading: "A React Star Rating component",
      details:
        "A simple and customizable React star rating component.You can use it for rating movies, products, reviews, or anything that needs a star rating UI.",
      github_link: "https://github.com/rahul-t0mar/star-rating-react-component",
      demo: "https://www.npmjs.com/package/awesome-star-rating",
      demo_btn: "NPM Link",
    },
    {
      path: "UsePopcorn.png",
      heading: "Rating Movies User Watched",
      details:
        "A user-interactive application which keep the record of watched movies rated by user and the help user compare it with the IMDB Rating.",
      github_link: "https://github.com/rahul-t0mar/use-popcorn",
      demo: "https://movie-list-bay-chi.vercel.app/",
      demo_btn: "Webpage",
    },
    {
      path: "eatAndSplit.png",
      heading: "Eat And Split The Bill With Friends",
      details:
        "A eat and split application where the user can track the bill amount about how much user owe his friends or his friends owe him the money.",
      github_link: "https://github.com/rahul-t0mar/eat-and-split",
      demo: "https://eat-and-split-pvt.vercel.app/",
      demo_btn: "Demo",
    },
    {
      path: "VisitedCountries.png",
      heading: "Track The Countries Visited",
      details:
        "On the world map, the visited countries are highlighted which makes it easier for the user to track the list of the countries user visited. There is also option to add family members.",
      github_link: "https://github.com/rahul-t0mar/countries-visited",
      demo: "http://localhost:3000",
      demo_btn: "Locally Hosted",
    },
    {
      path: "india-sporcle.png",
      heading: "The Sporcle Game For States Of India",
      details:
        "This is a sporcle game which features map of India and list of Indian states are mentioned. It is a good game to sharpen up and remember the list of states of India.",
      github_link: "https://github.com/rahul-t0mar/india-sporcle",
      demo: "python3 main.py",
      demo_btn: "Run Locally",
    },
  ];

  return (
    <div className={`${styles.projects_list}`}>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          path={project.path}
          heading={project.heading}
          details={project.details}
          github_link={project.github_link}
          demo={project.demo}
          demo_btn={project.demo_btn}
        />
      ))}
    </div>
  );
}

export default ProjectsList;
