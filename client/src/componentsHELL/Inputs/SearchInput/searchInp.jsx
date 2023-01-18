import { useDispatch } from 'react-redux'
import styles from './searchInp.module.css'
import * as actions from '../../../redux/actions/index'

const SearchInp = ()=>{
    const dispatch = useDispatch();

    const handleChange = ()=>{
        dispatch(actions.getCountryName(document.getElementById('countrysearch').value))
    }

    return <>
        <p className={styles.inputSearch}>
            <input className={styles.inputField} onChange={handleChange} id="countrysearch" name="text" placeholder="Search a country..." type="text"/>
        </p>
    </>
}
export default SearchInp