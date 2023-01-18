import "./countriesList.css";
import CountryCard from "../../Cards/Countries/countryCard";
import { useSelector } from "react-redux";
import NotFoundCard from "../../Cards/NotFound/notFoundCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CountriesList() {
  const countries = useSelector((state) => state.countries);
  const update = useSelector((state) => state.updateOrder);
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPP, setCountriesPP] = useState(9);

  let indexLast = currentPage * countriesPP;
  currentPage === 1 ? (indexLast -= 0) : (indexLast -= 1);
  let indexFirst = indexLast - countriesPP;
  if (indexFirst === -1) indexFirst += 1;

  const currentCountries = countries.slice(indexFirst, indexLast);

  let pageNumbers = [];
  let length = Math.ceil(countries.length / 10);
  if (countries.length > 9) {
    if (countries.length % 10 === 0) {
      length++;
    }
  }

  for (let i = 1; i <= length; i++) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    setCurrentPage(1);
  }, [update, countries]);

  const handlePagination = (number) => {
    setCurrentPage(number);
    number === 1 ? setCountriesPP(9) : setCountriesPP(10);
  };

  const handlePrev = () => {
    currentPage === 2 ? setCountriesPP(9) : setCountriesPP(10);
    currentPage !== 1
      ? setCurrentPage(currentPage - 1)
      : setCurrentPage(pageNumbers.length);
  };

  const handleNext = () => {
    currentPage !== pageNumbers.length ? setCountriesPP(10) : setCountriesPP(9);
    currentPage !== pageNumbers.length
      ? setCurrentPage(currentPage + 1)
      : setCurrentPage(1);
  };

  return (
    <div>
      <div className="activityArrowContainer">
        <Link className="activityArrow" to="/activity">
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
              d="M18.0609 11.75L13.5285 16.2804L12.4681 15.2196L15.1888 12.5H6.00001V11H15.1888L12.4681 8.28045L13.5285 7.21955L18.0609 11.75Z"
              fill="#FFb000"
            />
          </svg>
          <p>ACTIVITY CREATION</p>
        </Link>
      </div>
      <div>
        <ul className="pagination">
          <li className="pageArrow" key="prev" onClick={handlePrev}>
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
              strokeWidth="3"
              stroke="#9CCB62"
              fill="none"
            >
              <polyline points="45.15 57.47 19.88 30.84 45.15 6.58" />
            </svg>
          </li>
          {pageNumbers &&
            pageNumbers.map((e) => (
              <li
                className={currentPage !== e ? "pageNum" : "pageNumSelected"}
                key={e}
                onClick={() => handlePagination(e)}
              >
                {e}
              </li>
            ))}
          <li className="pageArrow" key="next" onClick={handleNext}>
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
              strokeWidth="3"
              stroke="#9CCB62"
              fill="none"
            >
              <polyline points="18.86 57.47 44.12 30.84 18.86 6.58" />
            </svg>
          </li>
        </ul>
      </div>
      <div className="list">
        {currentCountries.length > 0 ? (
          currentCountries.map((e) => (
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
          <NotFoundCard text={`Sorry, couldn't find that country.`} />
        )}
      </div>
    </div>
  );
}
