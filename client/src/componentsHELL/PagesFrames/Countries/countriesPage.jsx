import { useEffect } from "react";
import { useDispatch} from "react-redux";
import SearchBar from "../../Bars/SearchBar/searchBar";
import CountriesList from "../../Lists/Countries/countriesList";
import * as actions from '../../../redux/actions/index'

export default function CountriesPage(){
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(actions.getCountries());
    },[dispatch])
    return <>
        <SearchBar/>
        <CountriesList/>
    </>
}

