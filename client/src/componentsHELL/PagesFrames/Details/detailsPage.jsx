import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import DetailsCard from "../../Cards/Details/detailsCard";
import ActivitiesList from "../../Lists/Activities/activitiesList";
import * as actions from '../../../redux/actions/index'



const DetailsPage = ()=>{
    const dispatch = useDispatch();
    const location = useLocation();
    
    useEffect(()=>{
        dispatch(actions.getCountriesDetails(location.search.slice(6,9)))
    },[dispatch,location])

    return<>
        <DetailsCard />
        <ActivitiesList/>
    </>
}

export default DetailsPage;