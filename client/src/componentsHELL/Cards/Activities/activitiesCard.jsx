import styles from './activitiesCard.module.css'


const ActivitiesCard = (props)=>{
    const {difficulty, duration, name, season} = props;
    return <div className={styles.activityCard}>
            <p>{name}</p>
            <p>Difficulty: {difficulty}</p>
            <p>Duration: {duration}mins.</p>
            <p>Season: {season}</p>

        </div>
}

export default ActivitiesCard;