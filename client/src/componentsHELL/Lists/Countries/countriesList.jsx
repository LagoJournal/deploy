import styles from "./countriesList.module.css";
import CountryCard from "../../Cards/Countries/countryCard";
import { useSelector } from "react-redux";
import NotFoundCard from "../../Cards/NotFound/notFoundCard";
import { useEffect } from "react";

export default function CountriesList() {
  const countries = useSelector((state) => state.countries);
  const update = useSelector((state) => state.updateOrder);
  useEffect(() => {}, [update]);
  return (
    <div className={styles.list}>
      {countries.length > 0 ? (
        countries.map((e) => (
          <CountryCard
            id={e.id}
            flag={e.flag_img}
            name={e.name}
            subregion={e.subregion}
            key={e.id}
            site="countries"
          />
        ))
      ) : (
        <NotFoundCard text={`Sorry, couldn't find that country :(`} />
      )}
    </div>
  );
}
