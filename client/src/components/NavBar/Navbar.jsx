import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logoButton">
        <Link className="logoLink" to="/countries">
          W.API
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
