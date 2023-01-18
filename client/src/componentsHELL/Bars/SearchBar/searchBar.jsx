import styles from './searchBar.module.css'
import SearchInp from '../../Inputs/SearchInput/searchInp'
import DropDown from '../../Inputs/DropDown/dropDown'
import CreateActivityButton from '../../Buttons/CreateActivity/createActivityButton'
import DropDownOrder from '../../Inputs/DropDownOrder/dropDownOrder'


const SearchBar = ()=>{
    
    return<div className={styles.secondaryBar}>
        <SearchInp/>
        <DropDown key='filters' id='DDF'/>
        <DropDownOrder/>
        <CreateActivityButton/>
    </div>
}

export default SearchBar;