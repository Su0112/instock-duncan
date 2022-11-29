import "./editWarehouse.scss";
import ArrowIcon from "../../assets/Icons/arrow_back-24px.svg";
import { useState, useEffect } from "react";
import React from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const URL = `${process.env.REACT_APP_BACKEND_URL}` + "/warehouses/";

export default function EditWarehouse() {
  const [warehouse, setWarehouse] = useState();

  const params = useParams();

  const warehouseId = params.warehouseId;

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
    event.preventDefault();

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

    axios
      .put(URL + warehouseId, {
        warehouse_name: name,
        address: address,
        city: city,
        country: country,
        contact_name: contactN,
        contact_position: position,
        contact_phone: phone,
        contact_email: email,
      })
      .then((response) => {
        console.log(response.data);
        if (response.status === 200) {
          updateWarehouse(warehouseId);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <header className="formWarehouse">
        <NavLink to={"/warehouses"}>
          <img
            className="formWarehouse-img"
            src={ArrowIcon}
            alt="Back arrow icon"
          ></img>
        </NavLink>

        <h1 className="formWarehouse-title">Edit Warehouse</h1>
      </header>

      {warehouse && (
        <main className="mainEdit">
          <form>
            <section className="formWarehouse__main">
              <section className="formWarehouse__warehouse-detailsFirst">
                <div className="formWarehouse__input-wrapper">
                  <h2 className="formWarehouse__warehouse-details-title">
                    Warehouse Details
                  </h2>
                  <label className="formWarehouse__input-title">
                    Warehouse Name
                  </label>
                  <input
                    name="warehouseName"
                    className="formWarehouse__input"
                    id="warehouseName"
                    defaultValue={warehouse.warehouse_name}
                    onChange={handleChangeWarehouseName}
                  ></input>
                  <p className="formWarehouse__input-title">Street Address</p>
                  <input
                    name="warehouseAddress"
                    className="formWarehouse__input"
                    id="warehouseAddress"
                    defaultValue={warehouse.address}
                    onChange={handleChangeWarehouseAddress}
                  ></input>

                  <label className="formWarehouse__input-title">City</label>
                  <input
                    name="warehouseCity"
                    className="formWarehouse__input"
                    id="warehouseCity"
                    defaultValue={warehouse.city}
                    onChange={handleChangeWarehouseCity}
                  ></input>
                  <label className="formWarehouse__input-title">Country</label>
                  <input
                    name="warehouseCountry"
                    className="formWarehouse__input"
                    id="warehouseCountry"
                    defaultValue={warehouse.country}
                    onChange={handleChangeWarehouseCountry}
                  ></input>
                </div>
              </section>
              <section className="formWarehouse__warehouse-detailsSecond">
                <div className="formWarehouse_input-wrapper">
                  <h2 className="formWarehouse__warehouse-details-title">
                    Contact Details
                  </h2>
                  <label className="formWarehouse__input-title">
                    Contact Name
                  </label>
                  <input
                    name="contactName"
                    className="formWarehouse__input"
                    id="contacName"
                    placeholder="Contact Name"
                    value={warehouseContactName}
                    onChange={handleChangeContactName}
                  ></input>
                  <label className="formWarehouse__input-title">Position</label>
                  <input
                    name="ContactPosition"
                    className="formWarehouse__input"
                    id="ContactPosition"
                    placeholder="Position"
                    value={warehouseContactPosition}
                    onChange={handleChangeContactPosition}
                  ></input>
                  <p className="formWarehouse__input-title">Phone Number</p>
                  <input
                    name="warehouseContactPhone"
                    className="formWarehouse__input"
                    id="warehouseContactPhone"
                    placeholder="Phone Number"
                    value={warehouseContactPhone}
                    onChange={handleChangeContactPhone}
                  ></input>
                  <p className="formWarehouse__input-title">Email</p>
                  <input
                    name="warehouseContactEmail"
                    className="formWarehouse__input"
                    id="warehouseContactEmail"
                    placeholder="Email"
                    value={warehouseContactEmail}
                    onChange={handleChangeContactEmail}
                  ></input>
                </div>
              </section>
            </section>
            <div className="formWarehouse__btn-wrapper">
              <div className="formWarehouse__btn-item">
                <NavLink to={"/warehouses"}>
                  <button className="formWarehouse__btn--cancel">Cancel</button>
                </NavLink>
              </div>
              <div className="formWarehouse__btn-item">
                <button
                  className="formWarehouse__btn--addItem"
                  onClick={handleSubmit}
                >
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
