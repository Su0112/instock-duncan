import "./addWarehouse.scss";
import ArrowIcon from "../../assets/Icons/arrow_back-24px.svg";
import ErrorIcon from "../../assets/Icons/error-24px.svg";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { useRef } from "react";
import axios from "axios";
import { useState } from "react";

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

  const [warehouseName, setwarehouseName] = useState("default");
  const [newAddress, setNewAddress] = useState("default");
  const [newCity, setNewCity] = useState("default");
  const [newCountry, setNewCountry] = useState("default");
  const [newContactName, setNewContactName] = useState("default");
  const [newPosition, setNewPosition] = useState("default");
  const [newEmail, setNewEmail] = useState("default");
  const [newPhoneNumber, setNewPhoneNumber] = useState("default");
  const [isFormValid, setIsFormValid] = useState(true);
  const [submit, setSubmit] = useState(false);

  const isWarehouseNameValid = () => {
    if (warehouseName === "") {
      return false;
    }
    return true;
  };

  const isAddressValid = () => {
    if (newAddress === "") {
      return false;
    }
    return true;
  };

  const isCityValid = () => {
    if (newCity === "") {
      return false;
    }
    return true;
  };

  const isCountryValid = () => {
    if (newCountry === "") {
      return false;
    }
    return true;
  };

  const isContactNameValid = () => {
    if (newContactName === "") {
      return false;
    }
    return true;
  };

  const isPositionValid = () => {
    if (newPosition === "") {
      return false;
    }
    return true;
  };

  const isPhoneNumberValid = () => {
    if (newPhoneNumber === "" && newPhoneNumber.length < 11) {
      return false;
    }
    return true;
  };

  const isEmailValid = () => {
    if (newEmail === "" && !newEmail.includes("@")) {
      return false;
    }
    return true;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setSubmit(true);

    //const warehouse_id = formRef.current.warehouse_id.value;
    const warehouse_name = formRef.current.warehouse_name.value;
    const address = formRef.current.address.value;
    const city = formRef.current.city.value;
    const country = formRef.current.country.value;
    const contact_name = formRef.current.contact_name.value;
    const contact_position = formRef.current.contact_position.value;
    const contact_phone = formRef.current.contact_phone.value;
    const contact_email = formRef.current.contact_email.value;

    //console.log(contact_email);

    setwarehouseName(warehouse_name);
    setNewAddress(address);
    setNewCity(city);
    setNewCountry(country);
    setNewContactName(contact_name);
    setNewPosition(contact_position);
    setNewPhoneNumber(contact_phone);
    setNewEmail(contact_email);
    //console.log(warehouseName);
    //console.log(newEmail, "ewquxcvbnm");

    if (
      warehouse_name &&
      address &&
      city &&
      country &&
      contact_name &&
      contact_position &&
      contact_phone &&
      contact_email
    ) {
      const addWarehouse = {
        //warehouse_id: warehouse_id,
        warehouse_name: warehouse_name,
        address: address,
        city: city,
        country: country,
        contact_name: contact_name,
        contact_position: contact_position,
        contact_phone: contact_phone,
        contact_email: contact_email,
      };
      //console.log(addWarehouse);
      axios
        .post(URL, addWarehouse)
        .then(navigate("/warehouses"))
        .catch((error) => {
          console.log(error.response);
          console.log("An error has occurred", error);
          alert("Failed to add Warehouse, please check your form");
        });
    } else {
      setIsFormValid(false);
    }
  };

  return (
    <>
      <header className="add__form__header">
        <Link to={"/warehouses"} className="add__form__header-link">
          <img
            className="add__form__header-img"
            src={ArrowIcon}
            alt="Back arrow icon"
          ></img>
        </Link>

        <h1 className="add__form__header-title">Add New Warehouse</h1>
      </header>

      {/* {warehouse && ( */}
      <main className="main">
        <form
          className="form"
          ref={formRef}
          id="addWarehouseForm"
          onSubmit={submitHandler}
        >
          <section className="add__form__main">
            <section className="add__form__warehouse-detailsFirst">
              <div className="add__form__input-wrapper">
                <h2 className="add__form__warehouse-details-title">
                  Warehouse Details
                </h2>
                <label className="add__form__input-title">Warehouse Name</label>
                <input
                  name="warehouse_name"
                  className={`add__form__input ${
                    !submit && isWarehouseNameValid()
                      ? ""
                      : "add__form__input--invalid"
                  }`}
                  id="warehouse_name"
                  placeholder="Warehouse Name"
                ></input>
                {!isFormValid && (
                  <p className="add__form__error">
                    <img src={ErrorIcon} alt="Error icon" />
                    This field is required
                  </p>
                )}
                <label className="add__form__input-title">Street Address</label>
                <input
                  name="address"
                  className={`add__form__input ${
                    !submit && isAddressValid()
                      ? ""
                      : "add__form__input--invalid"
                  }`}
                  id="address"
                  placeholder="Street Address"
                ></input>
                {!isFormValid && (
                  <p className="add__form__error">
                    <img src={ErrorIcon} alt="Error icon" />
                    This field is required
                  </p>
                )}

                <label className="add__form__input-title">City</label>
                <input
                  name="city"
                  className={`add__form__input ${
                    !submit && isCityValid() ? "" : "add__form__input--invalid"
                  }`}
                  id="city"
                  placeholder="City"
                ></input>
                {!isFormValid && (
                  <p className="add__form__error">
                    <img src={ErrorIcon} alt="Error icon" />
                    This field is required
                  </p>
                )}
                <label className="add__form__input-title">Country</label>
                <input
                  name="country"
                  className={`add__form__input ${
                    !submit && isCountryValid()
                      ? ""
                      : "add__form__input--invalid"
                  }`}
                  id="country"
                  placeholder="Country"
                ></input>
                {!isFormValid && (
                  <p className="add__form__error">
                    <img src={ErrorIcon} alt="Error icon" />
                    This field is required
                  </p>
                )}
              </div>
            </section>
            <section className="add__form__warehouse-detailsSecond">
              <div className="add__form__input-wrapper">
                <h2 className="add__form__warehouse-details-title">
                  Contact Details
                </h2>
                <label className="add__form__input-title">Contact Name</label>
                <input
                  name="contact_name"
                  className={`add__form__input ${
                    !submit && isContactNameValid()
                      ? ""
                      : "add__form__input--invalid"
                  }`}
                  id="contact_name"
                  placeholder="Contact Name"
                ></input>
                {!isFormValid && (
                  <p className="add__form__error">
                    <img src={ErrorIcon} alt="Error icon" />
                    This field is required
                  </p>
                )}
                <label className="add__form__input-title">Position</label>
                <input
                  name="contact_position"
                  className={`add__form__input ${
                    isPositionValid() ? "" : "add__form__input--invalid"
                  }`}
                  id="contact_position"
                  placeholder="Position"
                ></input>
                {!isFormValid && (
                  <p className="add__form__error">
                    <img src={ErrorIcon} alt="Error icon" />
                    This field is required
                  </p>
                )}

                <label className="add__form__input-title">Phone Number</label>
                <input
                  name="contact_phone"
                  className={`add__form__input ${
                    isPhoneNumberValid() ? "" : "add__form__input--invalid"
                  }`}
                  id="contact_phone"
                  placeholder="Phone Number"
                ></input>
                {!isFormValid && (
                  <p className="add__form__error">
                    <img src={ErrorIcon} alt="Error icon" />
                    This field is required
                  </p>
                )}

                <label className="add__form__input-title">Email</label>
                <input
                  name="contact_email"
                  className={`add__form__input ${
                    isEmailValid() ? "" : "add__form__input--invalid"
                  }`}
                  id="contact_email"
                  placeholder="Email"
                ></input>
                {!isFormValid && (
                  <p className="add__form__error">
                    <img src={ErrorIcon} alt="Error icon" />
                    This field is required
                  </p>
                )}
              </div>
            </section>
          </section>
        </form>
        <div className="add__form__btn-wrapper">
          <Link to={"/warehouses"}>
            <div className="add__form__btn-item">
              <button className="add__form__btn--cancel " type="submit">
                Cancel
              </button>
            </div>
          </Link>
          <div className="add__form__btn-item">
            <button
              type="submit"
              form="addWarehouseForm"
              className="add__form__btn--addItem"
            >
              + Add Warehouse
            </button>
          </div>
        </div>
      </main>
      {/* )} */}
    </>
  );
}
export default AddWarehouse;
