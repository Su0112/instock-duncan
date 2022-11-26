import "./warehouseDetails.scss";
import { useState, useEffect } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Edit from "../../assets/Icons/edit-24px.svg";
import Back from "../../assets/Icons/arrow_back-24px.svg";
import SortIcon from "../../assets/Icons/sort-24px.svg";
import DeleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import Chevron from "../../assets/Icons/chevron_right-24px.svg";
import { ReactComponent as Icon } from "../../assets/Icons/edit-white.svg";
const URL = "http://localhost:8080/warehouses/";

export default function WarehouseDetails() {
  const [warehouse, setWarehouse] = useState();
  const [inventories, setInventories] = useState([]);
  const [state, setState] = useState("true");

  const params = useParams();
  const warehouseId = "5bf7bd6c-2b16-4129-bddc-9d37ff8539e9";

  useEffect(() => {
    axios
      .get(URL + warehouseId)
      .then((response) => {
        if (response.status === 200) {
          setWarehouse(response.data);
          axios
            .get(URL + warehouseId + "/inventories")
            .then((response) => {
              setInventories(response.data);
            })
            .catch((error) => console.log(error));
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

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

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
            <Icon
              className="warehouseDetails-header__edit"
              //   src={Edit}
              //   alt="pencil"
              fill="white"
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

          {inventories.length > 0 ? (
            <section className="warehouseDetails">
              {inventories.map((inventory) => (
                <div className="warehouseDetails__list" key={inventory.id}>
                  <div className="warehouseDetails__card-wrapper">
                    {/* warehouseDetails ITEM */}
                    <div className="warehouseDetails__item-wrapper">
                      <div className="warehouseDetails__sort-header">
                        <h5 className="warehouseDetails__sort-headerText ">
                          Inventory ITEM
                        </h5>
                        <img
                          className="warehouseDetails__sort-sortIcon"
                          src={SortIcon}
                          alt="sort icon"
                        />
                      </div>
                      <div className="warehouseDetails__appliance-wrapper">
                        <a href="">
                          <p className="warehouseDetails__applianceText">
                            {inventory.item_name}
                          </p>
                          <img src={Chevron} alt="right arrow" />
                        </a>
                      </div>
                    </div>

                    {/* warehouseDetails STATUS */}
                    <div className="warehouseDetails__status-wrapper">
                      <div className="warehouseDetails__sort-header">
                        <h5 className="warehouseDetails__sort-headerText">
                          STATUS
                        </h5>
                        <img
                          className="warehouseDetails__sort-sortIcon"
                          src={SortIcon}
                          alt="sort icon"
                        />
                      </div>
                      <p
                        className="warehouseDetails__statusText"
                        style={{
                          color: state === "true" ? "#C94515" : "#158463",
                        }}
                      >
                        {inventory.status}
                      </p>
                    </div>

                    {/* warehouseDetails CATEGORY */}
                    <div className="warehouseDetails__category-wrapper">
                      <div className="warehouseDetails__sort-header">
                        <h5 className="warehouseDetails__sort-headerText">
                          CATEGORY
                        </h5>
                        <img
                          className="warehouseDetails__sort-sortIcon"
                          src={SortIcon}
                          alt="sort icon"
                        />
                      </div>
                      <p className="warehouseDetails__categoryText">
                        {inventory.category}
                      </p>
                    </div>

                    {/* warehouseDetails QTY */}
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

                    {/* warehouseDetails ACTIONS BUTTONS */}
                    <div className="warehouseDetails__actions">
                      <div className="warehouseDetails__actions-header">
                        <h5 className="warehouseDetails__sort-headerText">
                          ACTIONS
                        </h5>
                      </div>

                      <div className="warehouseDetails__actions-btns">
                        <button>
                          <img src={DeleteIcon} alt="delete icon" />
                        </button>
                        <button>
                          <img src={Edit} alt="edit icon" />
                        </button>
                      </div>
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
            <section className="warehouseDetails">
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

                  <p className="warehouseDetails__text">{inventory.status}</p>

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
                      <button>
                        <img src={Edit} alt="edit icon" />
                      </button>
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
