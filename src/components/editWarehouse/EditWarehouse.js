import "./editWarehouse.scss";
import ArrowIcon from "../../assets/Icons/arrow_back-24px.svg";
import { useState, useEffect } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";

const URL = "http://localhost:8080/warehouses/";

export default function EditWarehouse() {
  const [warehouse, setWarehouse] = useState();

  const params = useParams();
  const warehouseId = "5af76f4c-f05d-45d2-8e57-1ef8c11631b4";

  const [warehouseName, setWarehouseName] = useState("");
  const [warehouseAddress, setWarehouseAddress] = useState("");
  const [warehouseCity, setWarehouseCity] = useState("");
  const [warehouseCountry, setWarehouseCountry] = useState("");
  const [warehouseContactName, setWarehouseContactName] = useState("");
  const [warehouseContactPosition, setWarehouseContactPosition] = useState("");
  const [warehouseContactPhone, setWarehouseContactPhone] = useState("");
  const [warehouseContactEmail, setWarehouseContactEmail] = useState("");

  useEffect(() => {
    axios
      .get(URL + warehouseId)
      .then((response) => {
        if (response.status === 200) {
          setWarehouse(response.data);
        }
      })
      .catch((error) => console.log(error));
    // console.log(warehouse);
  }, [params]);

  const handleChangeWarehouseName = (event) => {
    console.log(event.target.value);
    setWarehouseName(event.target.value);
  };

  const handleChangeWarehouseCity = (event) => {
    setWarehouseCity(event.target.value);
  };
  const handleChangeWarehouseAddress = (event) => {
    setWarehouseAddress(event.target.value);
  };

  const handleChangeWarehouseCountry = (event) => {
    setWarehouseCountry(event.target.value);
  };

  const handleChangeContactName = (event) => {
    setWarehouseContactName(event.target.value);
  };

  const handleChangeContactPosition = (event) => {
    setWarehouseContactPosition(event.target.value);
  };

  const handleChangeContactPhone = (event) => {
    setWarehouseContactPhone(event.target.value);
  };
  const handleChangeContactEmail = (event) => {
    setWarehouseContactEmail(event.target.value);
  };

  let navigate = useNavigate();

  const updateWarehouse = (warehouseId) => {
    navigate("/warehouses/" + warehouseId);
  };

  const handleSubmit = (event) => {
    console.log("hello");
    console.log(warehouseContactPosition);
    event.preventDefault();

    console.log("Test " + warehouseAddress);
    console.log("Test " + warehouse.address);

    let name = warehouseName ? warehouseName : warehouse.warehouse_name;
    let address = warehouseAddress ? warehouseAddress : warehouse.address;
    let city = warehouseCity ? warehouseCity : warehouse.city;
    let country = warehouseCountry ? warehouseCountry : warehouse.country;
    let contactN = warehouseContactName;
    let position = warehouseContactPosition
      ? warehouseContactPosition
      : warehouse.contact_position;
    let phone = warehouseContactPhone
      ? warehouseContactPhone
      : warehouse.contact_phone;
    let email = warehouseContactEmail
      ? warehouseContactEmail
      : warehouse.contact_email;

    console.log(
      "Result " + address + city + name + country + contactN + position + email
    );

    // axios
    //   .put(URL + warehouseId, {
    //     warehouse_name: warehouseName,
    //     address: warehouseAddress,
    //     city: warehouseCity,
    //     country: warehouseCountry,
    //     contact_name: warehouseContactName,
    //     contact_position: warehouseContactPosition,
    //     contact_phone: warehouseContactPhone,
    //     contact_email: warehouseContactEmail,
    //   })
    //   .then((response) => {
    //     console.log(response.data);
    //     if (response.status === 200) {
    //       updateWarehouse(warehouseId);
    //     }
    //   })
    //   .catch((error) => console.log(error));
  };

  return (
    <>
      <header className="form__header">
        <img
          className="form__header-img"
          src={ArrowIcon}
          alt="Back arrow icon"
        ></img>

        <h1 className="form__header-title">Edit Warehouse</h1>
      </header>

      {warehouse && (
        <main className="main">
          <form>
            <section className="form__main">
              <section className="form__warehouse-detailsFirst">
                <div className="form__input-wrapper">
                  <h2 className="form__warehouse-details-title">
                    Warehouse Details
                  </h2>
                  <label className="form__input-title">Warehouse Name</label>
                  <input
                    name="warehouseName"
                    className="form__input"
                    id="warehouseName"
                    defaultValue={warehouse.warehouse_name}
                    onChange={handleChangeWarehouseName}
                  ></input>
                  <p className="form__input-title">Street Address</p>
                  <input
                    name="warehouseAddress"
                    className="form__input"
                    id="warehouseAddress"
                    defaultValue={warehouse.address}
                    onChange={handleChangeWarehouseAddress}
                  ></input>

                  <label className="form__input-title">City</label>
                  <input
                    name="warehouseCity"
                    className="form__input"
                    id="warehouseCity"
                    defaultValue={warehouse.city}
                    onChange={handleChangeWarehouseCity}
                  ></input>
                  <label className="form__input-title">Country</label>
                  <input
                    name="warehouseCountry"
                    className="form__input"
                    id="warehouseCountry"
                    defaultValue={warehouse.country}
                    onChange={handleChangeWarehouseCountry}
                  ></input>
                </div>
              </section>
              <section className="form__warehouse-detailsSecond">
                <div className="form__input-wrapper">
                  <h2 className="form__warehouse-details-title">
                    Contact Details
                  </h2>
                  <label className="form__input-title">Contact Name</label>
                  <input
                    name="contactName"
                    className="form__input"
                    id="contacName"
                    placeholder="Contact Name"
                    value={warehouseContactName}
                    onChange={handleChangeContactName}
                  ></input>
                  <label className="form__input-title">Position</label>
                  <input
                    name="ContactPosition"
                    className="form__input"
                    id="ContactPosition"
                    placeholder="Position"
                    value={warehouseContactPosition}
                    onChange={handleChangeContactPosition}
                  ></input>
                  <p className="form__input-title">Phone Number</p>
                  <input
                    name="warehouseContactPhone"
                    className="form__input"
                    id="warehouseContactPhone"
                    placeholder="Phone Number"
                    value={warehouseContactPhone}
                    onChange={handleChangeContactPhone}
                  ></input>
                  <p className="form__input-title">Email</p>
                  <input
                    name="warehouseContactEmail"
                    className="form__input"
                    id="warehouseContactEmail"
                    placeholder="Email"
                    value={warehouseContactEmail}
                    onChange={handleChangeContactEmail}
                  ></input>
                </div>
              </section>
            </section>
            <div className="form__btn-wrapper">
              <div className="form__btn-item">
                <button className="form__btn--cancel">Cancel</button>
              </div>
              <div className="form__btn-item">
                <button className="form__btn--addItem" onClick={handleSubmit}>
                  Save
                </button>
              </div>
            </div>
          </form>
        </main>
      )}
    </>
  );
}
