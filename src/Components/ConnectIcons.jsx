import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import styles from "./ConnectIcons.module.css";

function ConnectIcons() {
  return (
    <div className={`${styles.connect_icons}`}>
      <a href="https://github.com/rahul-t0mar">
        <GitHubIcon className={`${styles.icon}`} />
      </a>
      <a href="#">
        <XIcon className={`${styles.icon}`} />
      </a>
      <a href="https://www.linkedin.com/in/rahul-t0mar-dzire045/">
        <LinkedInIcon className={`${styles.icon}`} />
      </a>
      <a href="https://www.instagram.com/rahul.t0mar/">
        <InstagramIcon className={`${styles.icon}`} />
      </a>
    </div>
  );
}

export default ConnectIcons;
