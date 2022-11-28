import InStockLogo from "../../assets/Logo/InStock-Logo_2x.png";
import { Link, NavLink } from "react-router-dom";
import "./header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__logo-wrapper">
        <Link to={"/"}>
          <img
            className="header__logo"
            src={InStockLogo}
            alt="InStock logo"
          ></img>
        </Link>
      </div>
      <div className="header__nav-wrapper">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <NavLink
              className={(navData) =>
                navData.isActive ? "header--active" : "header__nav-link"
              }
              to={"/"}
            >
              Warehouses
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink
              className={(navData) =>
                navData.isActive ? "header--active" : "header__nav-link"
              }
              to={"/inventories"}
            >
              Inventory
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
