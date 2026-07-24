import AboutPageDetails from "../Components/AboutPageDetails";
import GithubC from "../Components/GithubC";
import ProfessionalSkills from "../Components/ProfessionalSkills";
import styles from "./AboutPage.module.css";

function AboutPage() {
  return (
    <div>
      <div className={`${styles.aboutpage_main} mt-40 flex mx-11 `}>
        <AboutPageDetails />
        <div className={`${styles.about_img}`}>
          <img src="download1.png" alt="about me animated image" />
        </div>
      </div>
      <div>
        <ProfessionalSkills />
        <GithubC />
      </div>
    </div>
  );
}

export default AboutPage;
