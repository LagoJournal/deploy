import { useEffect, useState } from "react";
import { useDispatch } from "react-redux"
import * as actions from '../../../redux/actions/index'


const DropDownOrder = ()=>{
    const dispatch = useDispatch();
    const [order,setOrder] = useState(['Alp','Alphabetical:'])

    useEffect(()=>{
        dispatch(actions.orderCountries(order))
        dispatch(actions.setOrderUpdate())
    },[order,dispatch])

    
    const handleChangeAlp = (event) =>{
        setOrder(['Alp',event.target.value])

    }
    
    const handleChangePopu = (event) =>{
        setOrder(['Pop',event.target.value])
    }
    return <>
            <select onChange={(event)=>handleChangeAlp(event)}>
                <option>Alphabetical:</option>
                <option>Ascendent</option>
                <option>Descendent</option>
            </select>
            <select onChange={(event)=>handleChangePopu(event)}>
                <option>Population:</option>
                <option>Ascendent</option>
                <option>Descendent</option>
            </select>
    </>
}

export default DropDownOrder