import { useEffect, useState } from "react";
import styles from "./AnimatedDetails.module.css";

const skills = [
  "Open Source Contributor",
  "MERN Stack Developer",
  "PERN Stack Developer",
  "Freelancer",
  "Full Stack Developer",
  "Software Engineer",
];

const VISIBLE_MS = 1500;
const FADE_MS = 300;

function AnimatedDetails() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const hideTimer = setTimeout(() => setVisible(false), VISIBLE_MS);
    const swapTimer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % skills.length);
      setVisible(true);
    }, VISIBLE_MS + FADE_MS);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(swapTimer);
    };
  }, [index]);

  return (
    <div>
      <h1
        className={`${styles.skill} ${visible ? styles.show : styles.hide} text-6xl mt-25 w-80`}
      >
        {skills[index]}
      </h1>
    </div>
  );
}

export default AnimatedDetails;
