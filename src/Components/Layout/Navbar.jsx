import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Navbar({ title }) {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral  text-primary-content">
      <div className="container mx-auto ">
        <div className=" flex-none px-2 mx-2">
          <FaGithub className="inline pr-2 text-3xl " />
          <Link to="/" className="font-bold align-middle text-lg">
            {title}
          </Link>
        </div>
        
        {/* Links */}
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-ghost btn-sm rounded">
              {" "}
              Home
            </Link>
            <Link to="/about" className="btn btn-ghost btn-sm rounded">
              {" "}
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: "Github Finder",
};

export default Navbar;
