import "./addInventoryItem.scss";
import ArrowIcon from "../../assets/Icons/arrow_back-24px.svg";
import Select from "react-select";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";

const category = [
  { value: "accessories", label: "Accessories" },
  { value: "gear", label: "Gear" },
  { value: "electronics", label: "Electronics" },
  { value: "health", label: "Health" },
  { value: "apparel", label: "Apparel" },
];

const warehouse = [
  {
    value: "150a36cf-f38e-4f59-8e31-39974207372d",
    label: "Boston",
  },
  {
    value: "2922c286-16cd-4d43-ab98-c79f698aeab0",
    label: "Manhattan",
  },
  {
    value: "5bf7bd6c-2b16-4129-bddc-9d37ff8539e9",
    label: "Washington",
  },
  {
    value: "89898957-04ba-4bd0-9f5c-a7aea7447963",
    label: "Santa Monica",
  },
  {
    value: "90ac3319-70d1-4a51-b91d-ba6c2464408c",
    label: "Jersey",
  },
  {
    value: "ade0a47b-cee6-4693-b4cd-a7e6cb25f4b7",
    label: "Seattle",
  },
  {
    value: "bb1491eb-30e6-4728-a5fa-72f89feaf622",
    label: "Miami",
  },
  {
    value: "sf",
    label: "San Francisco",
    id: "bfc9bea7-66f1-44e9-879b-4d363a888eb4",
  },
];

function AddInventoryItem() {
  const formRef = useRef();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const item_name = formRef.current.item_name.value;
    const description = formRef.current.description.value;
    const category = formRef.current.category.value;
    const status = formRef.current.status.value;
    const quantity = formRef.current.quantity.value;
    const warehouse_id = formRef.current.warehouse_id.value;

    const BACK_END_URL = `${process.env.REACT_APP_BACKEND_URL}/inventories`;

    axios
      .post(BACK_END_URL, {
        item_name: item_name,
        description: description,
        category: category,
        status: status,
        quantity: quantity,
        warehouse_id: warehouse_id,
      })
      .then(navigate("/inventory"))
      .catch((error) => {
        console.log(error.response);
        console.log("An error has occurred", error);
      });

    //Form validation:
  };
  return (
    <>
      <form
        className="form"
        ref={formRef}
        id="addItemForm"
        onSubmit={submitHandler}
      >
        <header className="form__header">
          <Link to={"/inventory"} className="form__header-link">
            <img
              className="form__header-img"
              src={ArrowIcon}
              alt="Back arrow icon"
            ></img>
          </Link>
          <h1 className="form__header-title">Add New Inventory Item</h1>
        </header>
        <main className="form__content-main">
          <section className="form__item-details">
            <h2 className="form__item-details-title">Item Details</h2>
            <div className="form__input-wrapper">
              <p className="form__input-title">Item Name</p>
              <textarea
                name="item_name"
                className="form__input-name"
                id="item_name"
                placeholder="Item Name"
              ></textarea>
            </div>
            <div className="form__input">
              <p className="form__input-title">Description</p>
              <textarea
                name="description"
                id="description"
                className="form__input-description"
                placeholder="Please enter a brief item description..."
              ></textarea>
            </div>
            <div className="select-category">
              <p className="form__input-title">Category</p>
              <Select
                id="category"
                name="category"
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
                  id="status"
                  name="status"
                ></input>
                <label className="form__radio-btn-label" htmlFor="status">
                  In stock
                </label>
              </div>
              <div className="form__radio-btn">
                <input
                  className="form__radio-btn--out"
                  type="radio"
                  id="status"
                  name="status"
                ></input>
                <label className="form__radio-btn-label" htmlFor="status">
                  Out of stock
                </label>
              </div>
            </div>
            <div className="form__input">
              <p className="form__input-title">Quantity</p>
              <textarea
                name="quantity"
                id="quantity"
                className="form__input-name"
                placeholder="0"
              ></textarea>
            </div>
            <div className="select-category">
              <p className="form__input-title">Warehouse</p>
              <Select
                id="warehouse_id"
                name="warehouse_id"
                options={warehouse}
                placeholder="Please select"
              />
            </div>
          </section>
        </main>
      </form>
      <div className="form__btn-wrapper">
        <Link to={"/inventory"}>
          <div className="form__btn-item">
            <button className="form__btn--cancel">Cancel</button>
          </div>
        </Link>
        <div className="form__btn-item">
          <button
            type="submit"
            form="addItemForm"
            className="form__btn--addItem"
          >
            +Add Item
          </button>
        </div>
      </div>
    </>
  );
}

export default AddInventoryItem;
