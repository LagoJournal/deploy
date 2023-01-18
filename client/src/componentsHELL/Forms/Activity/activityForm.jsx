import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../../redux/actions/index";
import CountryCard from "../../Cards/Countries/countryCard";

const ActivityForm = () => {
  const dispatch = useDispatch();
  // const [countriesCards, setCountriesCards] = useState([]);

  useEffect(() => {
    dispatch(actions.getCountries());
  }, [dispatch]);
  const countriesState = useSelector((state) => state.countries);
  const countriesCards = useSelector((state) => state.countriesCards);

  const [inputs, setInputs] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countryIds: "",
  });

  const handleChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };

  const handleClick = () => {
    let { value } = document.getElementById("countriesform");
    const country = countriesState.find((e) => e.id === value.toUpperCase());
    if (country) {
      dispatch(
        actions.addCountryCard({
          id: country.id,
          name: country.name,
          flag: country.flag_img,
          subregion: country.subregion,
        })
      );
      document.getElementById("countriesform").value = "";
    } else {
      alert("Country not Found");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(
      validation({
        ...inputs,
        countriesCards,
      })
    );
    if (Object.values(errors).length === 0) {
      dispatch(
        actions.createActivity({
          ...inputs,
          season: inputs.season.toUpperCase(),
        })
      );
      document.getElementById("activityform").reset();
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} id="activityform">
        <label>Name:</label>
        <input type="text" name="name" onChange={handleChange} />
        <label>Difficulty:</label>
        <input type="number" name="difficulty" onChange={handleChange} />
        <label>Duration:</label>
        <input type="number" name="duration" onChange={handleChange} />
        <label>Season:</label>
        <input type="text" name="season" onChange={handleChange} />
        <label>Add Countries:</label>
        <input type="text" name="countries" id="countriesform" />
        <button type="button" onClick={handleClick}>
          add
        </button>
        <button type="submit">Submit</button>
      </form>
      {countriesCards &&
        countriesCards.map((e) => (
          <CountryCard
            id={e.id}
            name={e.name}
            flag={e.flag}
            subregion={e.subregion}
            key={e.id}
            site="activities"
          />
        ))}
    </>
  );
};

const validation = (validators) => {
  let { name, duration, difficulty, season, countriesCards } = validators;
  const seasons = ["SPRING", "SUMMER", "FALL", "WINTER"];
  const errors = {};

  if (countriesCards.length === 0) errors.countryIds = "Empty Countries";
  if (!name) errors.name = "Name required";
  if (duration < 0) errors.duration = "Duration needs to be positive";
  if (difficulty > 5 || difficulty < 1)
    errors.difficulty = "Difficulty needs to be between 1 to 5";
  if (!seasons.includes(season.toUpperCase())) errors.season = "Invalid season";
  return errors;
};

export default ActivityForm;
