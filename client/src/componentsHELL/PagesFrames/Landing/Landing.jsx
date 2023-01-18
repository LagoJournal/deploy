import styles from "./Landing.module.css";
import globe from "../../../images/Globe.png";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../../redux/actions/index";

const Landing = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getCountries());
  }, [dispatch]);
  return (
    <>
      <div className={styles.frontRes}>
        <div className={styles.titlediv}>
          <h1 className={styles.title}>WORLD API.</h1>
          <button className={styles.button}>Start.</button>
        </div>
        <img src={globe} alt="Globe" className={styles.globePNG} />
      </div>
    </>
  );
};

export default Landing;
