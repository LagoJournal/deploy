import { Link } from "react-router-dom";
import "./P404.css";

const Error404Page = () => {
  return (
    <>
      <div className="info404">
        <p className="title404">404</p>
        <p className="text404">Page not Found.</p>
        <Link className="text2404" to="/countries">
          Click to go back HOME.
        </Link>
      </div>
    </>
  );
};

export default Error404Page;
