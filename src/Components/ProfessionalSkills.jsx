import styles from "./ProfessionalSkills.module.css";


function ButtonCard({ children }) {
  return <div>
    <button className={`flex justify-center m-5 px-4 py-2 items-center ${styles.skill_btn}`}>{children}</button>
  </div>;
}

function ProfessionalSkills() {
  return <div className="mt-40 block">
    <h1 className="text-5xl text-center">Professional <span>Skillset</span></h1>
    <div className="w-6xl flex flex-wrap mx-auto justify-center items-center ">
    <ButtonCard><img className={styles.skill_icons} src="svg-icons/HTML5.svg" alt="HTML Icon" />HTML/HTML5</ButtonCard>
    <ButtonCard><img className={styles.skill_icons} src="svg-icons/CSS3.svg" alt="CSS Icon" />CSS/CSS3</ButtonCard>
    <ButtonCard><img className={styles.skill_icons} src="svg-icons/JavaScript.svg" alt="JavaScript Icon" />JavaScript</ButtonCard>
    <ButtonCard><img className={styles.skill_icons} src="svg-icons/Node.js.svg" alt="Node.js Icon" />Node.js</ButtonCard>
    <ButtonCard><img className={styles.skill_icons} src="svg-icons/React.svg" alt="React.js Icon" />React.js</ButtonCard>
    <ButtonCard><img className={styles.skill_icons} src="svg-icons/Next.js.svg" alt="Next.js Icon" />Next.js</ButtonCard>
    <ButtonCard><img className={styles.skill_icons} src="svg-icons/Express.svg" alt="Express.js Icon" />Express.js</ButtonCard>
    <ButtonCard><img className={styles.skill_icons} src="svg-icons/Tailwind CSS.svg" alt="Tailwind CSS Icon" />Tailwind CSS</ButtonCard>
    <ButtonCard><img className={styles.skill_icons} src="svg-icons/Sass.svg" alt="Sass Icon" />SASS/SCSS</ButtonCard>
    <ButtonCard><img className={styles.skill_icons} src="svg-icons/PostgresSQL.svg" alt="PostgreSQL Icon" />PostgreSQL</ButtonCard>
    <ButtonCard><img className={styles.skill_icons} src="svg-icons/Git.svg" alt="Git Icon" />Git</ButtonCard>
    <ButtonCard><img className={styles.skill_icons} src="svg-icons/Github.svg" alt="Github Icon" />GitHub</ButtonCard>
    <ButtonCard><img className={styles.skill_icons} src="svg-icons/MongoDB.svg" alt="MongoDB Icon" />MongoDB</ButtonCard>
    <ButtonCard><img className={styles.skill_icons} src="svg-icons/MySQL.svg" alt="MySQL Icon" />MySQL</ButtonCard>
    <ButtonCard><img className={styles.skill_icons} src="svg-icons/Bootstrap.svg" alt="Bootstrap Icon" />Bootstrap</ButtonCard>
    <ButtonCard><img className={styles.skill_icons} src="svg-icons/Material UI.svg" alt="Material UI Icon" />Material UI</ButtonCard>
    <ButtonCard><img className={styles.skill_icons} src="svg-icons/Postman.svg" alt="Postman Icon" />Postman</ButtonCard>
    <ButtonCard><img className={styles.skill_icons} src="svg-icons/Python.svg" alt="Python Icon" />Python</ButtonCard>
    <ButtonCard><img className={styles.skill_icons} src="svg-icons/Flask.svg" alt="Flask Icon" />Flask</ButtonCard>
    <ButtonCard><img className={styles.skill_icons} src="svg-icons/Django.svg" alt="Django Icon" />Django</ButtonCard>
    <ButtonCard><img className={styles.skill_icons} src="svg-icons/Vite.js.svg" alt="Vite Icon" />Vite</ButtonCard>
    </div>
        <h1 className="text-5xl text-center mt-30"><span>Tools</span> I Use</h1>
        <div className="w-6xl flex flex-wrap mx-auto justify-center items-center">
              <ButtonCard><img className={styles.skill_icons} src="svg-icons/VSCode.svg" alt="VS Code Icon" />VS Code</ButtonCard>
              <ButtonCard><img className={styles.skill_icons} src="svg-icons/Chrome.svg" alt="Chrome Icon" />Chrome</ButtonCard>
              <ButtonCard><img className={styles.skill_icons} src="svg-icons/Linux.svg" alt="Linux Icon" />linux</ButtonCard>
              <ButtonCard><img className={styles.skill_icons} src="svg-icons/Windows 11.svg" alt="Windows 11 Icon" />Windows 11</ButtonCard>

        </div>
  </div>;
}

export default ProfessionalSkills;
