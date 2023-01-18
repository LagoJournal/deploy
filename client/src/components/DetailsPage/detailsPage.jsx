import "./detailsPage.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import * as actions from "../../redux/actions/index";
import NotFoundCard from "../Cards/NotFound/notFoundCard";
import ActivitiesCard from "../Cards/Activities/activitiesCard";

const DetailsPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  let {
    id,
    name,
    capital,
    flag_img,
    continent,
    subregion,
    area,
    population,
    activities,
  } = useSelector((state) => state.countryDetails);

  useEffect(() => {
    dispatch(actions.getCountriesDetails(location.search.slice(6, 9)));
  }, [dispatch, location]);

  if (area) area = area.toLocaleString();
  if (population) population = population.toLocaleString();

  return (
    <>
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
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.93909 11.75L10.4715 7.21955L11.5319 8.28045L8.8112 11H18V12.5H8.8112L11.5319 15.2196L10.4715 16.2804L5.93909 11.75Z"
              fill="#FF1F59"
            />
          </svg>
          <p>HOME</p>
        </Link>
        <Link className="activityArrow" to="/activity">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32px"
            height="32px"
            viewBox="0 0 24 24"
            fill="none"
          >
            <script
              xmlns=""
              async="false"
              type="text/javascript"
              src="chrome-extension://fnjhmkhhmkbjkkabndcnnogagogbneec/in-page.js"
            />
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
      <div className="detailsCard">
        {!id ? (
          <div className="loading">
            <div class="lds-square">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        ) : (
          <div>
            <div className="nameFlag">
              <div className="nameContainer">
                <p className="detailsCode">{id}</p>
                <p className="detailsName">{name && name.toUpperCase()}</p>
              </div>
              <img src={flag_img} className="detailsFlag" alt="flag" />
            </div>
            <div className="detailsStats">
              <div className="internalContainer">
                <div className="internalDetails">
                  <p className="detailsTitles">Capital.</p>
                  <p className="detailsStatsText">{capital}</p>
                </div>
                <div className="internalDetails">
                  <p className="detailsTitles">Continent.</p>
                  <p className="detailsStatsText"> {continent}</p>
                </div>
                <div className="internalDetails">
                  <p className="detailsTitles">SubRegion.</p>
                  <p className="detailsStatsText"> {subregion}</p>
                </div>
              </div>
              <div className="internalContainer">
                <div className="internalDetails">
                  <p className="detailsTitles">Area.</p>
                  <p className="detailsStatsText"> {area} km2</p>
                </div>
                <div className="internalDetails">
                  <p className="detailsTitles">Population.</p>
                  <p className="detailsStatsText"> {population}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="activitiesList">
        <div className="activitiesHeader">
          <p className="activitiesTitle">Activities:</p>
        </div>
        <div className="activitiesContainer">
          {activities && activities.length > 0 ? (
            activities.map((e) => (
              <ActivitiesCard
                difficulty={e.difficulty}
                duration={e.duration}
                id={e.id}
                name={e.name}
                season={e.season}
                key={e.id}
              />
            ))
          ) : (
            <NotFoundCard text={`This country has no Activities yet.`} />
          )}
        </div>
      </div>
    </>
  );
};

export default DetailsPage;
