import "./warehouseDetails.scss";
import { useState, useEffect } from "react";
import React from "react";
import { useParams, NavLink } from "react-router-dom";
import axios from "axios";
import Edit from "../../assets/Icons/edit-24px.svg";
import Back from "../../assets/Icons/arrow_back-24px.svg";
import SortIcon from "../../assets/Icons/sort-24px.svg";
import DeleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import Chevron from "../../assets/Icons/chevron_right-24px.svg";
import { ReactComponent as Icon } from "../../assets/Icons/edit-white.svg";
import DeleteInventoryItem from "../deleteInventoryItem/DeleteInventoryItem";

const URL = `${process.env.REACT_APP_BACKEND_URL}` + "/warehouses/";

const InventoryList_API = "http://localhost:8080/inventories/";

export default function WarehouseDetails() {
  const [warehouse, setWarehouse] = useState();
  const [inventories, setInventories] = useState([]);
  const [isDeleteInventory, setIsDeleteInventory] = useState(false);
  const [inventory, setInventory] = useState();

  const params = useParams();
  const warehouseId = params.warehouseId;
  const inventoryId = params.inventoryId;

  const getWarehouseInventories = (warehouseId) => {
    axios
      .get(URL + warehouseId + "/inventories")
      .then((response) => {
        setInventories(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    console.log("Init: " + params.warehouseId);
    axios
      .get(URL + warehouseId)
      .then((response) => {
        if (response.status === 200) {
          setWarehouse(response.data);
          getWarehouseInventories(warehouseId);
        } else {
          // todo redirect to warehouses
        }
      })
      .catch((error) => console.log(error));
  }, [params]);

  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 767;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const handleDeleteInventory = (event, inventoryId) => {
    axios.delete(InventoryList_API + inventoryId).then((response) => {
      if (response.status == "204") {
        setIsDeleteInventory(false);
        getWarehouseInventories(warehouseId);
      } else {
        alert("Failed to delete, try again later maybe?");
      }
    });
  };

  return width < breakpoint ? (
    <>
      {warehouse && (
        <section className="mainBlock">
          <div className="warehouseDetails-header">
            <img
              className="warehouseDetails-header__back"
              src={Back}
              alt="pencil"
            ></img>

            <h3 className="warehouseDetails__headerText">
              {warehouse.warehouse_name}
            </h3>

            <NavLink
              to={"/warehouses/editWarehouse"}
              className="warehouseDetails-header__edit"
            >
              <Icon fill="white"></Icon>
            </NavLink>
          </div>
          <div className="warehouseDetails-contact">
            <div className="warehouseDetails-contact__first">
              <h5 className="warehouseDetails-contact__header">
                WAREHOUSE ADRESS:
              </h5>
              <p className="warehouseDetails-contact__content">
                {warehouse.address}
              </p>
            </div>

            <div className="warehouseDetails-contact__second">
              <div className="warehouseDetails-contact__third">
                <h5 className="warehouseDetails-contact__header">
                  CONTACT NAME:
                </h5>
                <p className="warehouseDetails-contact__content">
                  {warehouse.contact_name}
                </p>
                <p className="warehouseDetails-contact__content">
                  {warehouse.contact_position}
                </p>
              </div>

              <div className="warehouseDetails-contact__third">
                <h5 className="warehouseDetails-contact__header">
                  CONTACT INFORMATION:
                </h5>
                <p className="warehouseDetails-contact__content">
                  {warehouse.contact_phone}
                </p>
                <p className="warehouseDetails-contact__content">
                  {warehouse.contact_email}
                </p>
              </div>
            </div>
          </div>

          {inventories.length > 0 ? (
            <section className="warehouseDetails">
              {isDeleteInventory && (
                <DeleteInventoryItem
                  closeDeleteInventory={setIsDeleteInventory}
                  deleteInventoryData={inventory}
                  handleDelete={handleDeleteInventory}
                />
              )}
              {inventories.map((inventory) => (
                <div className="warehouseDetails__list" key={inventory.id}>
                  <div className="warehouseDetails__card-wrapper">
                    {/* warehouseDetails ITEM */}
                    <div className="warehouseDetails__item-wrapper">
                      <div className="warehouseDetails__sort-header">
                        <h5 className="warehouseDetails__sort-headerText ">
                          Inventory ITEM
                        </h5>

                        <div>
                          <a href="" className="warehouseDetails__item">
                            <p className="warehouseDetails__categoryText">
                              {inventory.item_name}
                            </p>
                            <img
                              src={Chevron}
                              alt="right arrow"
                              className="warehouseDetails__item-icon"
                            />
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* warehouseDetails STATUS */}
                    <div className="warehouseDetails__status-wrapper">
                      <div className="warehouseDetails__sort-header">
                        <h5 className="warehouseDetails__sort-headerText">
                          STATUS
                        </h5>
                      </div>
                      <p
                        className={`warehouseDetails__status ${
                          inventory.status == "In Stock"
                            ? "status--inStock"
                            : "status--outOfStock"
                        }`}
                      >
                        {inventory.status}
                      </p>
                    </div>

                    <div className="warehouseDetails__category-wrapper">
                      <div className="warehouseDetails__sort-header">
                        <h5 className="warehouseDetails__sort-headerText">
                          CATEGORY
                        </h5>
                      </div>
                      <p className="warehouseDetails__qtyText">
                        {inventory.category}
                      </p>
                    </div>

                    <div className="warehouseDetails__qty-wrapper">
                      <div className="warehouseDetails__sort-header">
                        <h5 className="warehouseDetails__sort-headerText">
                          QTY
                        </h5>
                        <img
                          className="warehouseDetails__sort-sortIcon"
                          src={SortIcon}
                          alt="sort icon"
                        />
                      </div>
                      <p className="warehouseDetails__qtyText">
                        {" "}
                        {inventory.quantity}
                      </p>
                    </div>
                  </div>
                  <div className="warehouseDetails__actions">
                    <div className="warehouseDetails__actions-btns">
                      <button
                        onClick={() => {
                          setInventory(inventory);
                          setIsDeleteInventory(true);
                        }}
                      >
                        <img src={DeleteIcon} alt="delete icon" />
                      </button>

                      <NavLink
                        to={"/inventories/:inventoryId"}
                        className="form__header-link"
                      >
                        <button>
                          <img src={Edit} alt="edit icon" />
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          ) : (
            <section className="warehouseDettails__container">
              <p className="warehouseDettails__no-data">No inventory</p>
            </section>
          )}
        </section>
      )}
    </>
  ) : (
    <>
      {warehouse && (
        <section className="mainBlock">
          <div className="warehouseDetails-header">
            <img
              className="warehouseDetails-header__back"
              src={Back}
              alt="pencil"
            ></img>
            <h3 className="warehouseDetails__headerText">
              {warehouse.warehouse_name}
            </h3>
            <Icon
              className="warehouseDetails-header__edit"
              src={Edit}
              alt="pencil"
            ></Icon>
          </div>
          <div className="warehouseDetails-contact">
            <div className="warehouseDetails-contact__first">
              <h5 className="warehouseDetails-contact__header">
                WAREHOUSE ADRESS:
              </h5>
              <p className="warehouseDetails-contact__content">
                {warehouse.address}
              </p>
            </div>
            <div className="warehouseDetails-contact__second">
              <div className="warehouseDetails-contact__third">
                <h5 className="warehouseDetails-contact__header">
                  CONTACT NAME:
                </h5>
                <p className="warehouseDetails-contact__content">
                  {warehouse.contact_name}
                </p>
                <p className="warehouseDetails-contact__content">
                  {warehouse.contact_position}
                </p>
              </div>

              <div className="warehouseDetails-contact__third">
                <h5 className="warehouseDetails-contact__header">
                  CONTACT INFORMATION:
                </h5>
                <p className="warehouseDetails-contact__content">
                  {warehouse.contact_phone}
                </p>
                <p className="warehouseDetails-contact__content">
                  {warehouse.contact_email}
                </p>
              </div>
            </div>
          </div>

          <div className="warehouseDetails__headerLarge">
            <div className="warehouseDetails__headerLarge-box">
              <h5 className="warehouseDetails__headerLarge-text">
                Inventory ITEM
              </h5>
              <img
                className="warehouseDetails__headerLarge-icon"
                src={SortIcon}
                alt="sort icon"
              />
            </div>
            <div className="warehouseDetails__headerLarge-box">
              <h5 className="warehouseDetails__headerLarge-text">STATUS</h5>
              <img
                className="warehouseDetails__headerLarge-icon"
                src={SortIcon}
                alt="sort icon"
              />
            </div>
            <div className="warehouseDetails__headerLarge-box">
              <h5 className="warehouseDetails__headerLarge-text">CATEGORY</h5>
              <img
                className="warehouseDetails__headerLarge-icon"
                src={SortIcon}
                alt="sort icon"
              />
            </div>
            <div className="warehouseDetails__headerLarge-box">
              <h5 className="warehouseDetails__headerLarge-text">QTY</h5>
              <img
                className="warehouseDetails__headerLarge-icon"
                src={SortIcon}
                alt="sort icon"
              />
            </div>
            <div className="warehouseDetails__headerLarge-box last">
              <h5 className="warehouseDetails__headerLarge-text">ACTIONS</h5>
            </div>
          </div>

          {inventories.length > 0 ? (
            <section className="warehouseDetails-large">
              {inventories.map((inventory) => (
                <div className="warehouseDetails__list" key={inventory.id}>
                  {/* warehouseDetails ITEM */}

                  <div>
                    <a href="" className="warehouseDetails__item">
                      <p className="warehouseDetails__item-text">
                        {inventory.item_name}
                      </p>
                      <img
                        src={Chevron}
                        alt="right arrow"
                        className="warehouseDetails__item-icon"
                      />
                    </a>
                  </div>

                  <p className="warehouseDetails__text">{inventory.category}</p>

                  <p
                    className={`warehouseDetails__status ${
                      inventory.status == "In Stock"
                        ? "status--inStock"
                        : "status--outOfStock"
                    }`}
                  >
                    {inventory.status}
                  </p>

                  <p className="warehouseDetails__text">
                    {" "}
                    {inventory.quantity}
                  </p>

                  {/* warehouseDetails ACTIONS BUTTONS */}
                  <div className="warehouseDetails__actions">
                    <div className="warehouseDetails__actions-btns">
                      <button>
                        <img src={DeleteIcon} alt="delete icon" />
                      </button>

                      <NavLink to="/inventories/:inventoryId">
                        {" "}
                        <button>
                          <img src={Edit} alt="edit icon" />
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          ) : (
            <section className="warehouseDettails__container">
              <p className="warehouseDettails__no-data">No inventory</p>
            </section>
          )}
        </section>
      )}
    </>
  );
}
