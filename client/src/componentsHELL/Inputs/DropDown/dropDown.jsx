// import styles from './dropDown.module.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../redux/actions/index'

const DropDown = ()=>{
    const countries = useSelector(state => state.allCountries)
    let continents = ['Continent:']
    let activities = ['Activities:'];
    
    countries.forEach(element => {
        if(!continents.includes(element.continent)) continents.push(element.continent)
        element.activities.forEach(e=>{
            if(!activities.includes(e.name)) activities.push(e.name)
        })
    });
    const dispatch = useDispatch();
    const [continent,setContinent] = useState("Continent:")
    const [activity,setActivity] = useState("Activities:")

    useEffect(()=>{
        dispatch(actions.filterCountries([continent,activity]))
    },[dispatch,continent,activity])

    const handleChangeCont = (event)=>{
        setContinent(event.target.value)
    }

    const handleChangeAct = (event)=>{
        setActivity(event.target.value)
    }

    return <>
            <select onChange={handleChangeCont}>
                {continents.map(e=><option key={e}>{e}</option>)}
            </select>
            <select onChange={handleChangeAct}>
                {activities.map(e=><option key={e}>{e}</option>)}
            </select>
    </>
}

export default DropDown

