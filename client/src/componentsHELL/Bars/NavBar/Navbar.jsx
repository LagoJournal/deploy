import styles from "./Navbar.module.css"
import LogoButton from '../../Buttons/LogoButton/LogoButton'


const Navbar = ()=>{
    return <div className={styles.navbar}>
         <LogoButton/>
        </div>
}

export default Navbar;