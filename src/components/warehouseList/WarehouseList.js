//scss
import "./warehouseList.scss";
//in-built imports
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import sortIcon from "../../assets/Icons/sort-24px.svg";
import chevronRightIcon from "../../assets/Icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import DeleteWarehouseModal from "../deleteWarehouseModal/DeleteWarehouseModal";

const URL = "http://localhost:8080/warehouses/";
export default function WarehouseList() {
  const [warehouse, setWarehouse] = useState(null);
  const [refreshWarehouses, setRefreshWarehouses] = useState(null);

  const params = useParams();
  const warehouseId = "5bf7bd6c-2b16-4129-bddc-9d37ff8539e9";

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        if (response.status === 200) {
          setWarehouse(response.data);
        } else {
          // todo redirect to warehouses
        }
      })
      .catch((error) => console.log(error));
  }, [params]);

  useEffect(() => {
    const fetchWarehouse = async () => {
      const { data } = await axios.get(URL);

      setWarehouse(data);
    };
    fetchWarehouse();
  }, [refreshWarehouses]);

  // function getWarehouseName(id) {
  //   let warehouse = warehouse.filter((warehouse) => warehouse.id === id);
  //   return warehouse[0].warehouse_name;
  // }

  //added for popup
  const [openDeleteWarehouse, setDeleteWarehouse] = useState(false);
  const [deleteWarehouseData, setDeleteWarehouseData] = useState({});

  const handleShow = (warehouse) => {
    setDeleteWarehouseData(warehouse);
    setDeleteWarehouse(true);
  };

  const handleDelete = (event, warehouseId) => {
    axios.delete(`${URL}/${warehouseId}`).then((response) => {
      if (response.status == "204") {
        let newWarehouses = warehouse.filter((el) => el.id !== warehouse.id);
        setWarehouse(newWarehouses);
        setDeleteWarehouse(false);
        setRefreshWarehouses(warehouseId);
      } else {
        alert("Failed to delete, try again later maybe?");
      }
    });
  };

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
              <Link to={"/addWarehouse"}>
                <button className="warehouses__header-button-bar">
                  +Add New Warehouse
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="warehouses__list">
          <div className="warehouses__list-wrapper--large">
            <div className="warehouses__list-content">
              <div className="warehouses__list-contentText">WAREHOUSE</div>
              <img
                className="warehouses__list-sortIcon"
                src={sortIcon}
                alt="sort icon"
              />
            </div>
            <div className="warehouses__list-content">
              <div className="warehouses__list-contentText">ADDRESS</div>
              <img
                className="warehouses__list-sortIcon"
                src={sortIcon}
                alt="sort icon"
              />
            </div>
            <div className="warehouses__list-content">
              <div className="warehouses__list-contentText">CONTACT NAME</div>
              <img
                className="warehouses__list-sortIcon"
                src={sortIcon}
                alt="sort icon"
              />
            </div>
            <div className="warehouses__list-content">
              <div className="warehouses__list-contentText">
                CONTACT INFORMATION
              </div>
              <img
                className="warehouses__list-sortIcon"
                src={sortIcon}
                alt="sort icon"
              />
            </div>
            <div className="warehouses__list-content">ACTIONS</div>
          </div>

          {openDeleteWarehouse && (
            <DeleteWarehouseModal
              closeDeleteWarehouse={setDeleteWarehouse}
              deleteWarehouseData={deleteWarehouseData}
              handleDelete={handleDelete}
            />
          )}

          {warehouse?.length > 0 ? (
            <section className="warehouses__list-wrapper">
              {warehouse.map((warehouse) => (
                <div className="warehouses__list-container" key={warehouse.id}>
                  <div className="warehouses__list-container-wrap">
                    <div className="list__location-address">
                      <div className="list__location-container">
                        <div className="list__location-title">
                          <p className="list__location-titleText">WAREHOUSE</p>
                          <img
                            className="warehouses__list-sortIcon"
                            src={sortIcon}
                            alt="sort icon"
                          />
                        </div>
                        <NavLink to={`/warehouses/${warehouse.id}`}>
                          <div className="list__location-info-wrapper">
                            <div className="list__location-info">
                              <p className="list__location-infoText">
                                {warehouse.warehouse_name}
                              </p>
                            </div>

                            <div className="list__location-info">
                              <img src={chevronRightIcon} alt="right Icon" />
                            </div>
                          </div>
                        </NavLink>
                      </div>
                      <div className="list__address-container">
                        <div className="list__address-title">
                          <p className="list__address-titleText">ADDRESS</p>
                          <img
                            className="warehouses__list-sortIcon"
                            src={sortIcon}
                            alt="sort icon"
                          />
                        </div>
                        <div className="list__address-info">
                          <p className="list__address-infoText">
                            {warehouse.address} {warehouse.city}{" "}
                            {warehouse.country}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="list__name-contact">
                      <div className="list__name-container">
                        <div className="list__name-title">
                          <p className="list__name-titleText">CONTACT NAME</p>
                          <img
                            className="warehouses__list-sortIcon"
                            src={sortIcon}
                            alt="sort icon"
                          />
                        </div>
                        <div className="list__name-info">
                          <p className="list__name-infoText">
                            {warehouse.contact_name}
                          </p>
                        </div>
                      </div>
                      <div className="list__contact-container">
                        <div className="list__contact-title">
                          <p className="list__contact-titleText">
                            CONTACT INFORMATION
                          </p>
                          <img
                            className="warehouses__list-sortIcon"
                            src={sortIcon}
                            alt="sort icon"
                          />
                        </div>
                        <div className="list__contact-info">
                          <p className="list__contact-infoText">
                            {warehouse.contact_phone} {warehouse.contact_email}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="warehouses__actions-container">
                    <div className="warehouses__actions-buttons">
                      <button
                        onClick={() => {
                          handleShow(warehouse);
                        }}
                        className="warehouses__actions-button"
                      >
                        <img src={deleteIcon} alt="delete icon" />
                      </button>

                      <NavLink to={`/warehouses/${warehouse.id}/editWarehouse`}>
                        <button className="warehouses__actions-button">
                          <img src={editIcon} alt="edit icon" />
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          ) : (
            <section className="warehouseList__container">
              <p className="warehouseList__no-data">No warehouse</p>
            </section>
          )}
        </div>
      </div>
    </section>
  );
}
