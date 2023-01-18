import "./Landing.css";
import globe2 from "../../images/Globe2.png";
import globe1 from "../../images/Globe.png";
// import globe3 from "../../images/Globe3.png";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions/index";
import { useHistory } from "react-router-dom";

const Landing = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(actions.getCountries());
  }, [dispatch]);

  const handleClick = () => {
    history.push("/countries");
  };
  let globe = true;
  return (
    <>
      <div className="frontRes">
        <div className="titlediv">
          <h1 className="title">WORLD API.</h1>
          <button className="button" onClick={handleClick}>
            Start.
          </button>
        </div>
        <img src={globe ? globe2 : globe1} alt="Globe" className="globePNG" />
      </div>
    </>
  );
};

export default Landing;
