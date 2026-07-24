import HomeIcon from "@mui/icons-material/Home";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ComputerIcon from "@mui/icons-material/Computer";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import styles from "./Header.module.css";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom"

function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(()=>{
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []
  )
  return (
    <div className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <Link to="/"><h1 className={styles.name}>Rt.</h1></Link>
      <ul className={styles.nav_links}>
        <li className={styles.list_items}>
          <Link to="/"><HomeIcon className={styles.icons} /> <button>Home</button></Link>
          
        </li>
        <li className={styles.list_items}>
          <Link to="/about"><PermIdentityIcon className={styles.icons} /> <button>About</button></Link>
          
        </li>
        <li className={styles.list_items}>
          <Link to="/projects"><ComputerIcon className={styles.icons} /> <button>Projects</button></Link>
          
        </li>
        <li className={styles.list_items}>
          <Link to="/resume"><AssignmentIndIcon className={styles.icons} /> <button>Resume</button></Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
