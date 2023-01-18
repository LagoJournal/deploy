import styles from "./countryCard.module.css";
import { useHistory } from "react-router-dom";
import * as actions from "../../../redux/actions/index";
import { useDispatch } from "react-redux";

const CountryCard = (params) => {
  const { id, name, flag, subregion, site } = params;

  const history = useHistory();
  const dispatch = useDispatch();

  let icon = "";
  site === "countries" ? (icon = "→") : (icon = "x");

  const handleClick = () => {
    if (site === "countries") history.push(`/details?code=${id}`);
    if (site === "activities") dispatch(actions.deleteCountryCard(id));
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <img src={flag} alt={`flag_${id}`} className={styles.flagCard} />
      <p>{id}</p>
      <p>{name}</p>
      <p>{subregion}</p>
      <p>{icon}</p>
    </div>
  );
};

export default CountryCard;
