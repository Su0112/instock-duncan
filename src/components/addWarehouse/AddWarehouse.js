import "./addWarehouse.scss";
import ArrowIcon from "../../assets/Icons/arrow_back-24px.svg";
//import { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { useRef } from "react";
import axios from "axios";

const URL = "http://localhost:8080/warehouses/";
const warehouseId = "5bf7bd6c-2b16-4129-bddc-9d37ff8539e9";

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

function AddWarehouse() {
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

    axios
      .post(URL + warehouseId, {
        item_name: item_name,
        description: description,
        category: category,
        status: status,
        quantity: quantity,
        warehouse_id: warehouse_id,
      })
      .then(navigate("/warehouseList"))
      .catch((error) => {
        console.log(error.response);
        console.log("An error has occurred", error);
      });

    // let btnStatus = document.querySelector(".status").value;
    // if (document.querySelector(".status").checked) {
    //   btnStatus = document.querySelector(".status").value;
    // }

    //Form validation:
  };

  // const [warehouse, setWarehouse] = useState();
  // const params = useParams();
  // const warehouseId = "5bf7bd6c-2b16-4129-bddc-9d37ff8539e9";

  // useEffect(() => {
  //   axios
  //     .get(URL + warehouseId)
  //     .then((response) => {
  //       if (response.status === 200) {
  //         setWarehouse(response.data);
  //       }
  //     })
  //     .catch((error) => console.log(error));
  //   // console.log(warehouse);
  // }, [params]);

  return (
    <>
      <header className="add__form__header">
        <Link to={"/warehouseList"} className="add__form__header-link">
          <img
            className="add__form__header-img"
            src={ArrowIcon}
            alt="Back arrow icon"
          ></img>
        </Link>

        <h1 className="add__form__header-title">Add New Warehouse</h1>
      </header>

      {warehouse && (
        <main className="main">
          <form
            className="form"
            ref={formRef}
            id="addWarehouse"
            onSubmit={submitHandler}
          >
            <section className="add__form__main">
              <section className="add__form__warehouse-detailsFirst">
                <div className="add__form__input-wrapper">
                  <h2 className="add__form__warehouse-details-title">
                    Warehouse Details
                  </h2>
                  <label className="add__form__input-title">
                    Warehouse Name
                  </label>
                  <input
                    name="name"
                    className="add__form__input"
                    id="name"
                    placeholder=""
                    defaultValue="Warehouse Name"
                  ></input>
                  <p className="add__form__input-title">Street Address</p>
                  <input
                    name="address"
                    className="add__form__input"
                    id="address"
                    placeholder=""
                    defaultValue="Street Address"
                  ></input>

                  <p className="add__form__input-title">City</p>
                  <input
                    name="address"
                    className="add__form__input"
                    id="address"
                    defaultValue="City"
                  ></input>
                  <p className="add__form__input-title">Country</p>
                  <input
                    name="address"
                    className="add__form__input"
                    id="address"
                    defaultValue="Country"
                  ></input>
                </div>
              </section>
              <section className="add__form__warehouse-detailsSecond">
                <div className="add__form__input-wrapper">
                  <h2 className="add__form__warehouse-details-title">
                    Contact Details
                  </h2>
                  <label className="add__form__input-title">Contact Name</label>
                  <input
                    name="contactName"
                    className="add__form__input"
                    id="contactName"
                    placeholder=""
                    defaultValue="Contact Name"
                  ></input>
                  <p className="add__form__input-title">Position</p>
                  <input
                    name="address"
                    className="add__form__input"
                    id="address"
                    placeholder=""
                    defaultValue="Position"
                  ></input>
                  <p className="add__form__input-title">Phone Number</p>
                  <input
                    name="phoneNumber"
                    className="add__form__input"
                    id="phoneNumber"
                    defaultValue="Phone Number"
                  ></input>
                  <p className="add__form__input-title">Email</p>
                  <input
                    name="email"
                    className="add__form__input"
                    id="email"
                    defaultValue="Email"
                  ></input>
                </div>
              </section>
            </section>
            <div className="add__form__btn-wrapper">
              <Link to={"/warehouseList"}>
                <div className="add__form__btn-item">
                  <button className="add__form__btn--cancel">Cancel</button>
                </div>
              </Link>
              <div className="add__form__btn-item">
                <button className="add__form__btn--addItem">
                  + Add Warehouse
                </button>
              </div>
            </div>
          </form>
        </main>
      )}
    </>
  );
}
export default AddWarehouse;

//remove component from app.js
//functionality
