import "./searchBar.css";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../../redux/actions/index";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const dispatch = useDispatch();
  const filterValues = useSelector((state) => state.filterValues);
  const filterValuesCont = [];
  const filterValuesAct = [];
  const [filterCont, setFilterCont] = useState("All:");
  const [filterAct, setFilterAct] = useState("All:");
  const [order, setOrder] = useState("None");

  useEffect(() => {
    dispatch(actions.filterCountries([filterCont, filterAct]));
    dispatch(actions.orderCountries(order));
    dispatch(actions.setOrderUpdate());
  }, [dispatch, filterAct, filterCont, order]);

  filterValues.forEach((element) => {
    if (!filterValuesCont.includes(element[1]))
      filterValuesCont.push(element[1]);
    element[0].forEach((e) => {
      if (!filterValuesAct.includes(e.name)) filterValuesAct.push(e.name);
    });
  });

  const handleChangeInput = () => {
    dispatch(
      actions.getCountryName(document.getElementById("countrysearch").value)
    );
    document.getElementById("formCountries1").reset();
    document.getElementById("formCountries2").reset();
    document.getElementById("formCountries3").reset();
  };

  const handleChangeCont = (event) => {
    setFilterCont(event.target.value);
  };

  const handleChangeAct = (event) => {
    setFilterAct(event.target.value);
  };

  const handleChangeOrder = (event) => {
    setOrder(event.target.value);
  };

  const handleClear = () => {
    document.getElementById("countrysearch").value = "";
    document.getElementById("formCountries1").reset();
    document.getElementById("formCountries2").reset();
    document.getElementById("formCountries3").reset();
    setFilterCont("All:");
    setFilterAct("All:");
    setOrder("None");
    dispatch(actions.getCountries());
  };

  return (
    <div className="secondaryBar">
      <div className="inputSearch">
        <input
          className="inputField"
          onChange={handleChangeInput}
          id="countrysearch"
          name="text"
          placeholder="Search a country..."
          type="text"
        />
      </div>
      <form id="formCountries1" className="dropdownContainer">
        <p className="dropdownText">Continents.</p>

        <select onChange={handleChangeCont} className="dropdown">
          <option>All:</option>
          {filterValuesCont.map((e) => (
            <option key={e}>{e}</option>
          ))}
        </select>
      </form>
      <form id="formCountries2" className="dropdownContainer">
        <p className="dropdownText">Activities.</p>
        <select onChange={handleChangeAct} className="dropdown">
          <option>All:</option>
          {filterValuesAct.map((e) => (
            <option key={e}>{e}</option>
          ))}
        </select>
      </form>
      <form id="formCountries3" className="dropdownContainer">
        <p className="dropdownText">Select Order.</p>
        <select
          id="selectOrder"
          onChange={handleChangeOrder}
          className="dropdown"
        >
          <option>None:</option>
          <option>A to Z</option>
          <option>Z to A</option>
          <option>Population ↓</option>
          <option>Population ↑</option>
        </select>
      </form>
      <div className="buttonsContainer">
        <button onClick={handleClear} className="clearFilters">
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
              d="M5.55774 11.9654C6.07076 13.1411 6.86762 14.2071 7.81397 14.9775C8.99068 15.9354 10.4569 16.5 12.0451 16.5C14.8882 16.5 17.3619 14.6817 18.4421 12.0346C17.9291 10.8589 17.1323 9.79288 16.1859 9.02249C15.0092 8.06456 13.5429 7.5 11.9548 7.5C9.11169 7.5 6.63795 9.31828 5.55774 11.9654ZM4.04543 11.7183C5.25854 8.39553 8.32501 6 11.9548 6C13.9079 6 15.7046 6.69645 17.1329 7.85921C18.3594 8.85768 19.3531 10.2422 19.9476 11.7492L20.0521 12.0141L19.9545 12.2817C18.7413 15.6045 15.6749 18 12.0451 18C10.092 18 8.29531 17.3035 6.86698 16.1408C5.64047 15.1423 4.64682 13.7578 4.05228 12.2508L3.94775 11.9859L4.04543 11.7183ZM11.9999 10.5C11.1715 10.5 10.4999 11.1716 10.4999 12C10.4999 12.8284 11.1715 13.5 11.9999 13.5C12.8284 13.5 13.4999 12.8284 13.4999 12C13.4999 11.1716 12.8284 10.5 11.9999 10.5ZM8.99994 12C8.99994 10.3431 10.3431 9 11.9999 9C13.6568 9 14.9999 10.3431 14.9999 12C14.9999 13.6569 13.6568 15 11.9999 15C10.3431 15 8.99994 13.6569 8.99994 12Z"
              fill="#FF1F59"
            />
          </svg>
          Clear
        </button>
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
    </div>
  );
};

export default SearchBar;
