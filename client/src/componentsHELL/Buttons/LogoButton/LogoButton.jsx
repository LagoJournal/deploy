import { Link } from "react-router-dom";
import styles from "./LogoButton.module.css"

const LogoButton = ()=>{
    return <div className={styles.logoButton}>
        <Link className={styles.logoLink} to='/countries'>W.API</Link>
    </div>
}

export default LogoButton;