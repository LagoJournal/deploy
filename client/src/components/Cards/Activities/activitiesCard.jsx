import "./activitiesCard.css";

const ActivitiesCard = (props) => {
  const { difficulty, duration, name, season } = props;
  let hours = "00";
  let mins = "00";

  if (duration > 60) {
    hours = Math.floor(duration / 60);
    if (hours < 10) hours = "0" + hours;
    if (((duration / 60) % 1) * 60 >= 1)
      mins = Math.floor(((duration / 60) % 1) * 60);
  } else {
    mins = duration;
  }
  if (mins < 10 && mins > 0) mins = "0" + mins;

  return (
    <div className="activityCard">
      <div className="activityDetails">
        <p>{name}</p>
      </div>
      <div className="activityDetails">
        <p>Difficulty //</p>
        <p className="activityStats">{difficulty}</p>
      </div>
      <div className="activityDetails">
        <p>Duration //</p>
        <p className="activityStats">{hours + "." + mins}</p>
      </div>
      <div className="activityDetails">
        <p>Season //</p>
        <p className="activityStats">{season}</p>
      </div>
    </div>
  );
};

export default ActivitiesCard;
