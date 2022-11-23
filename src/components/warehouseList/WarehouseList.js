//scss
import "./warehouseList.scss";
//in-built imports
import React from "react";
//import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const URL = "http://localhost:8080/warehouses/";
export default function WarehouseList() {
  const [warehouse, setWarehouse] = useState();
  const params = useParams();
  const warehouseId = "5bf7bd6c-2b16-4129-bddc-9d37ff8539e9";
  useEffect(() => {
    axios
      .get(URL + warehouseId)
      .then((response) => {
        if (response.status === 200) {
          setWarehouse(response.data);
        } else {
          // todo redirect to warehouses
        }
      })
      .catch((error) => console.log(error));
    // console.log(warehouse);
  }, [params]);
  return (
    <section className="warehouses">
      <div className="warehouses__container">
        <div className="warehouses__header">
          <h1 className="warehouses__header-title">Warehouses</h1>
          <div className="warehouses__header-wrapper">
            <div className="warehouses__header-search">
              <input
                className="warehouses__header-search-bar"
                type="text"
                placeholder="Search..."
              />
            </div>
            <div className="warehouses__header-button">
              {/* <Link to={"/"}> */}
              <button className="warehouses__header-button-bar">
                +Add New Warehouse
              </button>
              {/* </Link> */}
            </div>
          </div>
        </div>
        <div className="warehouses__list">
          <div className="warehouses__list-wrapper--large">
            <div className="warehouses__list-content">WAREHOUSE</div>
            <div className="warehouses__list-content">ADDRESS</div>
            <div className="warehouses__list-content">CONTACT NAME</div>
            <div className="warehouses__list-content">CONTACT INFROMATION</div>
            <div className="warehouses__list-content">ACTIONS</div>
          </div>
          {}
          <div className="warehouses__list-container">
            <div className="warehouses__list-container-wrap">
              <div className="list__location-address">
                <div className="list__location-container">
                  <div className="list__location-title">WAREHOUSE{}</div>
                  <div className="list__location-info"></div>
                </div>
                <div className="list__address-container">
                  <div className="list__address-title">ADDRESS</div>
                  <div className="list__address-info"></div>
                </div>
              </div>

              <div className="list__name-container">
                <div className="list__name-contact">
                  <div className="list__name-title">CONTACT NAME</div>
                  <div className="list__name-info"></div>
                </div>
                <div className="list__contact-container">
                  <div className="list__contact-title">CONTACT INFROMATION</div>
                  <div className="list__contact-info"></div>
                </div>
              </div>
            </div>

            <div className="list__actions-container">
              <div className="list__actions-delete"></div>
              <div className="list__actions-edit">edit</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
