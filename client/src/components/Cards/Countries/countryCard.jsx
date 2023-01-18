import "./countryCard.css";
import { useHistory } from "react-router-dom";

const CountryCard = (params) => {
  const { id, name, flag, subregion, site } = params;

  const history = useHistory();

  let icon = "";
  site === "countries"
    ? (icon = (
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#9CCB62"
          strokeWidth="3"
          fill="none"
          className="arrow"
        >
          <polyline points="18.86 57.47 44.12 30.84 18.86 6.58" />
        </svg>
      ))
    : (icon = (
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19 5L5 19" stroke="#9CCB62" />
          <path d="M5 5L19 19" stroke="#9CCB62" />
        </svg>
      ));

  const handleClick = () => {
    if (site === "countries") history.push(`/details?code=${id}`);
  };

  return (
    <div className="card" onClick={handleClick}>
      <img src={flag} alt={`flag_${id}`} className="flagCard" />
      <div className="infocard">
        <p>{id}</p>
        <p className="infoname">{name}</p>
        <p>{subregion}</p>
      </div>
      <p className="infoicon">{icon}</p>
    </div>
  );
};

export default CountryCard;
