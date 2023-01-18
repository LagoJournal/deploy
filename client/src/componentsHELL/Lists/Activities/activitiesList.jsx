import { useSelector } from "react-redux";
import ActivitiesCard from "../../Cards/Activities/activitiesCard";
import styles from "./activitiesList.module.css";
import NotFoundCard from "../../Cards/NotFound/notFoundCard";

const ActivitiesList = () => {
  const activities = useSelector((state) => state.countryDetail.activities);
  return (
    <div className={styles.activitiesList}>
      <p>Activities:</p>
      {activities && activities.length > 0 ? (
        activities.map((e) => (
          <ActivitiesCard
            difficulty={e.difficulty}
            duration={e.duration}
            id={e.id}
            name={e.name}
            season={e.season}
            key={e.id}
          />
        ))
      ) : (
        <NotFoundCard text={`This country has no Activities yet :(`} />
      )}
    </div>
  );
};

export default ActivitiesList;
