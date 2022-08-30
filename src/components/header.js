import { Link } from "react-router-dom";
import logo from "./assets/logo.png";
import "./header.css";

const Header = () => {
  return (
    <>
      <header className="Header">
        <Link to="/">
          <img className="Logo" src={logo} alt="Aço Ivaiporã" />
        </Link>
        <h1>Construindo o futuro com você!</h1>
      </header>
    </>
  );
};

export default Header;
