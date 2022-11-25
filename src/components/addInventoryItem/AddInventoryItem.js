import "./addInventoryItem.scss";
import ArrowIcon from "../../assets/Icons/arrow_back-24px.svg";
import Select from "react-select";
import { Link } from "react-router-dom";
// import { useRef } from "react";
// import axios from "axios";

const category = [
  { value: "accessories", label: "Accessories" },
  { value: "gear", label: "Gear" },
  { value: "electronics", label: "Electronics" },
  { value: "health", label: "Health" },
  { value: "apparel", label: "Apparel" },
];

const warehouse = [
  { value: "boston", label: "Boston" },
  { value: "manhattan", label: "Manhattan" },
  { value: "washington", label: "Washington" },
  { value: "santa monica", label: "Santa Monica" },
  { value: "jersey", label: "Jersey" },
  { value: "seattle", label: "Seattle" },
  { value: "miami", label: "Miami" },
  { value: "sf", label: "San Francisco" },
];

function AddInventoryItem() {
  return (
    <>
      <form className="form">
        <header className="form__header">
          <Link to={'/inventory'} className="form__header-link">
          <img
            className="form__header-img"
            src={ArrowIcon}
            alt="Back arrow icon"
          ></img>
          </Link>
          <h1 className="form__header-title">Add New Inventory Item</h1>
        </header>
        <main class="form__content-main">
          <section className="form__item-details">
            <h2 className="form__item-details-title">Item Details</h2>
            <div className="form__input-wrapper">
              <p className="form__input-title">Item Name</p>
              <textarea
                name="itemName"
                className="form__input-name"
                id="inventory_name"
                placeholder="Item Name"
              ></textarea>
            </div>
            <div className="form__input">
              <p className="form__input-title">Description</p>
              <textarea
                name="itemName"
                className="form__input-description"
                placeholder="Please enter a brief item description..."
              ></textarea>
            </div>
            <div className="select-category">
              <p className="form__input-title">Category</p>
              <Select
                classNamePrefix="react-select"
                options={category}
                placeholder="Please select"
              />
            </div>
          </section>
          <section className="form__item-avail">
            <h2 className="form__item-avail-title">Item Availability</h2>
            <p className="form__input-title">Status</p>
            <div className="form__radio-btn-wrapper">
              <div className="form__radio-btn">
                <input
                  className="form__radio-btn--in"
                  type="radio"
                  id="inStock"
                  name="selection"
                ></input>
                <label className="form__radio-btn-label" htmlFor="inStock">
                  In stock
                </label>
              </div>
              <div className="form__radio-btn">
                <input
                  className="form__radio-btn--out"
                  type="radio"
                  id="outOfStock"
                  name="selection"
                ></input>
                <label className="form__radio-btn-label" htmlFor="outOfStock">
                  Out of stock
                </label>
              </div>
            </div>
            <div className="form__input">
              <p className="form__input-title">Quantity</p>
              <textarea
                name="itemName"
                className="form__input-name"
                placeholder="0"
              ></textarea>
            </div>
            <div className="select-category">
              <p className="form__input-title">Warehouse</p>
              <Select options={warehouse} placeholder="Please select" />
            </div>
          </section>
        </main>
      </form>
      <div className="form__btn-wrapper">
        <div className="form__btn-item">
          <button className="form__btn--cancel">Cancel</button>
        </div>
        <div className="form__btn-item">
          <button className="form__btn--addItem">+Add Item</button>
        </div>
      </div>
    </>
  );
}

export default AddInventoryItem;
