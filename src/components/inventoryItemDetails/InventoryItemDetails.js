import "./InventoryItemDetails.scss";
import arrowIcon from "../../assets/Icons/arrow_back-24px.svg";
import { Link, useLocation, NavLink } from "react-router-dom";
import EditIcon from "../../assets/Icons/edit-24px.svg";

// import { useRef } from "react";
// import axios from "axios";

function InventoryItemDetails() {
  const location = useLocation();
  let inventory = location.state.data;
  let warehouse = location.state.warehouse;

  //console.log(warehouse, inventory);

  let inventoryStatusClass =
    inventory.status == "In Stock" ? "status--inStock" : "status--outOfStock";

  return (
    <>
      <section className="details">
        <header className="details__header-wrapper">
          <Link to={"/inventories"} className="form__header-link">
            <img
              className="details__header-img"
              src={arrowIcon}
              alt="go back icon"
            ></img>
          </Link>

          <h1 className="details__header-title">{inventory.item_name}</h1>

          <NavLink
            to={`/inventories/${inventory.id}`} 
            className="form__header-link"
          >
            <button className="details__edit-btn">
              <img
                className="details__edit-img"
                src={EditIcon}
                alt="Edit icon"
              />
              <p className="details__edit-btn-text">Edit</p>
            </button>
          </NavLink>
        </header>

        <main className="details__main">
          <div className="details__descriptionCategory-wrap">
            <div className="details__description-wrapper">
              <h4 className="details__subheader">ITEM DESCRIPTION</h4>
              <p className="details__description-text">
                {inventory.description}
              </p>
            </div>

            <div className="details__category-wrapper">
              <h4 className="details__subheader">CATEGORY:</h4>
              <p className="details__category">{inventory.category}</p>
            </div>
          </div>
          {/* for flexbox, seprated to 3rd part */}
          <div className="details__StatusQTYWarehouse-wrapper">
            <div className="details__statusQty-wrapper">
              <div className="details__status-wrapper">
                <h4 className="details__subheader">STATUS</h4>
                <p className={`details__status-text ${inventoryStatusClass}`}>
                  {/* <p className="details__status-text"> */}
                  {inventory.status}
                </p>
              </div>

              <div className="details__qty-wrapper">
                <h4 className="details__subheader">QUANTITY</h4>
                <p className="details__qty-text">{inventory.quantity}</p>
              </div>
            </div>

            <div className="details__warehouse-wrapper">
              <h4 className="details__subheader">WAREHOUSE</h4>
              <p className="details__warehouse-text">{warehouse}</p>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export default InventoryItemDetails;
