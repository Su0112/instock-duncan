import InStockLogo from "../../assets/Logo/InStock-Logo_2x.png";
// import { Link } from "react-router-dom";
import "./header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__logo-wrapper">
        {/* <Link to={"/"}> */}
        <img
          className="header__logo"
          src={InStockLogo}
          alt="InStock logo"
        ></img>
        {/* </Link> */}
      </div>
      <div className="header__nav-wrapper">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <a className="header__nav-link" href="#">Warehouses</a>
          </li>
          <li className="header__nav-item">
            <a className="header__nav-link" href="#">Inventory</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
