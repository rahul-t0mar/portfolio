import { useEffect, useState } from "react";
import styles from "./AnimatedDetails.module.css";

const skills = [
  "Web Developer",
  "Open Source Contributor",
  "MERN Stack Developer",
  "Freelancer",
];

function AnimatedDetails() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % skills.length);
        setFade(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1
        className={`${styles.skill} ${
          fade ? styles.fadeIn : styles.fadeOut
        } text-6xl mt-25 w-80`}
      >
        {skills[index]}
      </h1>
    </div>
  );
}

export default AnimatedDetails;