import styles from './Introduction.module.css'

function Introduction() {
    return (
        <div className={`${styles.intro} flex justify-around mx-22`}>

        <div className={`${styles.details} flex-col`}>
            <h1 className={`${styles.details } text-5xl justify-center text-center mb-3`}>LET ME <span>INTRODUCE</span> MYSELF</h1>
            <p className={`${styles.intro_det} text-2xl  `}>
                I am an enthusiastic web developer who loves transforming ideas into reliable, scalable and user-friendly products. Overtime I have explored many technologies and found my passion in high performance systems and intuitive user experiences.<br />
                <br/>                
                I am proficient in <span>JavaScript, Node.js, Python, React.js, MERN, etc</span> and I enjoy working across both backend and frontend stacks.<br />
                <br />
                My key areas of interest includes developing <span>Web Applications, SPAs, Automation Programs, etc</span> and exploring new ways to bridge backend and frontend systems.<br />
                <br />
                Whenever possible, I love building projects with <span>Node.js</span> with frameworks such as <span></span>React.js, Next.js.
            </p>
        </div>
        <div className={`${styles.profile_icon} ml-3 mt-15`}>
            <img src="download1.png" alt="Boy holding laptop" />
        </div>
    </div>
    )
}


export default Introduction
