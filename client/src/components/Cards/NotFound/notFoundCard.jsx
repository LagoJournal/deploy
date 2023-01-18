import "./notFoundCard.css";

const NotFoundCard = (props) => {
  return (
    <div className="notFoundCard">
      <p>{props.text}</p>
    </div>
  );
};

export default NotFoundCard;
