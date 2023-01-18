import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../../redux/actions/index";
import CountryCard from "../Cards/Countries/countryCard";
import Popup from "../Cards/Popup/popup";
import "./activityCreationPage.css";

const ActivityCreationPage = () => {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries);
  const displayPopUp = useSelector((state) => state.displayPopUp);
  const [inputs, setInputs] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countryIds: [],
  });
  const [errors, setErrors] = useState({
    name: "Empty Fields",
  });
  const [countriesCards, setCountriesCards] = useState([]);
  const [success, setSuccess] = useState({
    name: "test",
    difficulty: "test",
    duration: "test",
    season: "test",
    countryIds: [1, 1, 2, 4],
  });

  useEffect(() => {
    dispatch(actions.getCountries());
    dispatch(actions.clearDetails());
  }, [dispatch]);

  const handleChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validator({
        ...inputs,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleClick = () => {
    const { value } = document.getElementById("countriesInputForm");
    const country = allCountries.find((e) =>
      e.name.toLowerCase().match(value.toLowerCase())
    );
    if (country && !inputs.countryIds.includes(country.id)) {
      setInputs({
        ...inputs,
        countryIds: [...inputs.countryIds, country.id],
      });
      setErrors(
        validator({
          ...inputs,
          countryIds: [...inputs.countryIds, country.id],
        })
      );
      setCountriesCards([
        ...countriesCards,
        {
          id: country.id,
          name: country.name,
          flag: country.flag_img,
          subregion: country.subregion,
        },
      ]);
      document.getElementById("countriesInputForm").value = "";
    } else {
      dispatch(actions.popUpError("Country already added or not found"));
      dispatch(actions.displayPopUp());
      document.getElementById("countriesInputForm").value = "";
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validator(inputs));
    if (Object.values(errors).length === 0) {
      dispatch(
        actions.createActivity({
          ...inputs,
          season: inputs.season.toUpperCase(),
        })
      );

      setSuccess(inputs);
      document.getElementById("activityform").reset();
      setCountriesCards([]);
      setInputs({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countryIds: [],
      });
      setErrors({ name: "Empty Fields" });
      dispatch(actions.displayPopUp("submitSuccess"));
    }
    // else {
    //   dispatch(actions.displayPopUp("submitError"));
    // }
  };

  const handleDelete = (id) => {
    const newIds = inputs.countryIds.filter((e) => e !== id);
    setInputs({
      ...inputs,
      countryIds: newIds,
    });
    setErrors(
      validator({
        ...inputs,
        countryIds: newIds,
      })
    );
    const countries = countriesCards.filter((e) => e.id !== id);
    setCountriesCards(countries);
  };

  return (
    <>
      <Popup text={success} />

      <div className={displayPopUp[0] && "blur"}>
        <div className="arrowContainer">
          <Link className="backArrow" to="/countries">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32px"
              height="32px"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.93909 11.75L10.4715 7.21955L11.5319 8.28045L8.8112 11H18V12.5H8.8112L11.5319 15.2196L10.4715 16.2804L5.93909 11.75Z"
                fill="#FF1F59"
              />
            </svg>
            <p>HOME</p>
          </Link>
        </div>
        <div className="creationForm">
          <h1 className="activityCreationTitle">Activity Creation</h1>
          <form
            onSubmit={handleSubmit}
            id="activityform"
            className="activityForm"
          >
            <div className="inputForm">
              <label>Name.</label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                className="inputBox"
              />
              <div className="displayErrors">{errors?.name}</div>
            </div>
            <div className="inputForm">
              <label>Duration.</label>
              <input
                type="number"
                name="duration"
                onChange={handleChange}
                className="inputBox"
              />
              <div className="displayErrors">{errors?.duration}</div>
            </div>
            <div className="inputForm">
              <label>Difficulty.</label>
              <select
                name="difficulty"
                onChange={handleChange}
                className="inputBoxSelect"
              >
                <option>Select:</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
              <div className="displayErrors">{errors?.difficulty}</div>
            </div>
            <div className="inputForm">
              <label>Season.</label>
              <select
                name="season"
                onChange={handleChange}
                className="inputBoxSelect"
              >
                <option>Select:</option>
                <option>Summer</option>
                <option>Fall</option>
                <option>Winter</option>
                <option>Spring</option>
              </select>
              <div className="displayErrors">{errors?.season}</div>
            </div>
            <div className="inputForm">
              <label>Country Name.</label>
              <div className="countrycode">
                <input
                  type="text"
                  name="countries"
                  id="countriesInputForm"
                  className="inputBoxCode"
                />
                <button
                  type="button"
                  onClick={handleClick}
                  className="addButton"
                >
                  Add
                </button>
              </div>
              <div className="displayErrors">{errors?.countryIds}</div>
            </div>
            <div className="submitContainer">
              <button
                type="submit"
                className={
                  Object.values(errors).length === 0
                    ? "submitButton"
                    : "submitButtonLocked"
                }
              >
                Submit.
              </button>
            </div>
          </form>

          <div className="countrieslist">
            {countriesCards &&
              countriesCards.map((e) => (
                <div key={"card" + e.id} onClick={() => handleDelete(e.id)}>
                  <CountryCard
                    id={e.id}
                    name={e.name}
                    flag={e.flag}
                    subregion={e.subregion}
                    key={e.name}
                    site="activities"
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

const validator = (inputs) => {
  let { name, duration, difficulty, season, countryIds } = inputs;
  const errors = {};
  const regex = new RegExp("^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$", "gm");

  if (!name) {
    errors.name = "Name Required";
  } else if (!regex.test(name)) {
    errors.name = "Special Characters not Allowed";
  }

  if (duration <= 0 || duration > 4320) {
    if (!duration) {
      errors.duration = "Please enter Duration";
    } else if (duration <= 0) {
      errors.duration = "Invalid Duration [Negative & Zero not allowed]";
    } else {
      errors.duration = "Invalid Duration [max. 4320 mins.]";
    }
  }

  if (difficulty > 5 || difficulty < 1 || difficulty === "Select:")
    if (difficulty === "Select:" || !difficulty) {
      errors.difficulty = "Please Select Difficulty";
    } else {
      errors.difficulty = "Invalid Difficulty";
    }

  if (!["SPRING", "SUMMER", "FALL", "WINTER"].includes(season.toUpperCase()))
    errors.season = "Invalid Season";

  if (countryIds.length === 0) errors.countryIds = "Empty Countries";
  return errors;
};

export default ActivityCreationPage;
