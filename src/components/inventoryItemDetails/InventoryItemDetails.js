import "./InventoryItemDetails.scss";
import arrowIcon from "../../assets/Icons/arrow_back-24px.svg";
import { Link } from "react-router-dom";
import EditIcon from "../../assets/Icons/edit-24px.svg";

// import { useRef } from "react";
// import axios from "axios";

function InventoryItemDetails(){
    return (
      <>
        <section className="details">
          <header className="details__header-wrapper">
            <Link to={"/inventory"} className="form__header-link">
              <img
                className="details__header-img"
                src={arrowIcon}
                alt="go back icon"
              ></img>
            </Link>
            <h1 className="details__header-title">Television</h1>

            <button className="details__edit-btn">
              <img
                className="details__edit-img"
                src={EditIcon}
                alt="Edit icon"
              />
            </button>
          </header>

          <main className="details__main">
            <div className="details__descriptionCategory-wrap">
              <div className="details__description-wrapper">
                <h4 className="details__subheader">ITEM DESCRIPTION</h4>
                <p className="details__description-text">
                  This 50", 4K LED TV provides a crystal-clear picture and vivid
                  colors.
                </p>
              </div>

              {/* for flexbox, seprated to 3rd part */}
              <div className="details__StatusQTYWarehouse-wrapper">
                <div className="details__category-wrapper">
                  <h4 className="details__subheader">CATEGORY:</h4>
                  <p className="details__category">Electronics</p>
                </div>
              </div>

              <div className="details__status-wrapper">
                <h4 className="details__subheader">STATUS</h4>
                <p className="details__status-text">IN STOCK</p>
              </div>

              <div className="details__qty-wrapper">
                <h4 className="details__subheader">QUANTITY</h4>
                <p className="details__qty-text">500</p>
              </div>

              <div className="details__warehouse-wrapper">
                <h4 className="details__subheader">WAREHOUSE</h4>
                <p className="details__warehouse-text">Manhattan</p>
              </div>
            </div>
          </main>
        </section>
      </>
    );
}

export default InventoryItemDetails;