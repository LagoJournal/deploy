import { useEffect } from "react";
import { useDispatch } from "react-redux";
import SearchBar from "./SearchBar/searchBar";
import CountriesList from "./CountriesList/countriesList";
import * as actions from "../../redux/actions/index";
import "./countriesPage.css";

export default function CountriesPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getCountries());
    dispatch(actions.clearDetails());
  }, [dispatch]);

  return (
    <div className="countriesPage">
      <SearchBar />
      <CountriesList />
    </div>
  );
}
