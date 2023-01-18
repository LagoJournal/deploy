import { useSelector } from "react-redux";
import styles from "./detailsCard.module.css";

const DetailsCard = () => {
  let { id, name, capital, continent, subregion, area, population, flag_img } =
    useSelector((state) => state.countryDetail);
  if (area > 999) area = area.toLocaleString();
  if (population > 999) population = population.toLocaleString();
  return (
    <div className={styles.detailsCard}>
      <p>
        {id} {name}
      </p>
      <img src={flag_img} alt="flag" />
      <p>Capital: {capital}</p>
      <p>Continent: {continent}</p>
      <p>SubRegion: {subregion}</p>
      <p>Area: {area} km2</p>
      <p>Population: {population}</p>
    </div>
  );
};

export default DetailsCard;
