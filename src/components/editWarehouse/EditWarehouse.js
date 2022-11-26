import "./editWarehouse.scss";
import ArrowIcon from "../../assets/Icons/arrow_back-24px.svg";
import { useState, useEffect } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import { useForm } from "react-hook-form";

const URL = "http://localhost:8080/warehouses/";

export default function EditWarehouse() {
  const [warehouse, setWarehouse] = useState();

  const params = useParams();
  const warehouseId = "5bf7bd6c-2b16-4129-bddc-9d37ff8539e9";

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
                    name="name"
                    className="form__input"
                    id="name"
                    placeholder=""
                    defaultValue={warehouse.warehouse_name}
                  ></input>
                  <p className="form__input-title">Street Address</p>
                  <input
                    name="adress"
                    className="form__input"
                    id="adress"
                    placeholder=""
                    defaultValue={warehouse.address}
                  ></input>

                  <p className="form__input-title">City</p>
                  <input
                    name="adress"
                    className="form__input"
                    id="adress"
                    defaultValue={warehouse.city}
                  ></input>
                  <p className="form__input-title">Country</p>
                  <input
                    name="adress"
                    className="form__input"
                    id="adress"
                    defaultValue={warehouse.country}
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
                    placeholder=""
                    defaultValue={warehouse.contact_name}
                  ></input>
                  <p className="form__input-title">Position</p>
                  <input
                    name="adress"
                    className="form__input"
                    id="adress"
                    placeholder=""
                    defaultValue={warehouse.contact_position}
                  ></input>
                  <p className="form__input-title">Phone Number</p>
                  <input
                    name="phoneNumber"
                    className="form__input"
                    id="phoneNumber"
                    defaultValue={warehouse.contact_phone}
                  ></input>
                  <p className="form__input-title">Email</p>
                  <input
                    name="email"
                    className="form__input"
                    id="email"
                    defaultValue={warehouse.contact_email}
                  ></input>
                </div>
              </section>
            </section>
            <div className="form__btn-wrapper">
              <div className="form__btn-item">
                <button className="form__btn--cancel">Cancel</button>
              </div>
              <div className="form__btn-item">
                <button className="form__btn--addItem">Save</button>
              </div>
            </div>
          </form>
        </main>
      )}
    </>
  );
}
