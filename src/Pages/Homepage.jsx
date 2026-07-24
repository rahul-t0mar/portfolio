import styles from "./Homepage.module.css";
import AnimatedDetails from "./../Components/AnimatedDetails"
import Introduction from "../Components/Introduction";

import FindMe from "../Components/FindMe";

function Homepage() {
  return (
    <div>
      <div className={`${styles.homepage} flex pt-40 justify-around`}>
        <div className={`flex-col justify-center items-center`}>
          <h1 className={`  text-3xl gap-2.5 mb-6`}>
            Hello There! <span className={`${styles.wave} text-3xl`}>👋🏻</span>
          </h1>
          <h1 className={` text-5xl text-purple-300`}>I'M RAHUL TOMAR</h1>
          <AnimatedDetails />
        </div>
        <div className="flex justify-center">
          <img
            className={`${styles.coding_image}`}
            src="download.png"
            alt="a person coding image"
          />
        </div>
      </div>


      <div className="mb-29">
        <Introduction />
      </div>
      <FindMe />

    </div>
  );
}

export default Homepage;
