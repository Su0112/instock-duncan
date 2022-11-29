import "./editInventoryItemDetails.scss";
import ArrowIcon from "../../assets/Icons/arrow_back-24px.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function EditInventoryItemDetails() {
  const params = useParams();
  const navigate = useNavigate();

  const [inventories, setInventories] = useState("");
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemCategory, setItemCategory] = useState("");
  const [itemStatus, setItemStatus] = useState("");
  const [itemQuantity, setItemQuantity] = useState("");
  const [itemWarehouse, setItemWarehouse] = useState("");

  const BACK_END_URL = `${process.env.REACT_APP_BACKEND_URL}/inventories/${params.inventoryId}`;

  useEffect(() => {
    const fetchInventories = () => {
      axios
        .get(BACK_END_URL)
        .then((response) => {
          setInventories(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchInventories();
  }, [params.inventoryId]);

  const handleNameChange = (e) => {
    setItemName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setItemDescription(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setItemCategory(e.target.value);
  };

  const handleStatusChange = (e) => {
    setItemStatus(e.target.checked);
  };

  const handleQuantityChange = (e) => {
    setItemQuantity(e.target.value);
  };

  const handleWarehouseChange = (e) => {
    setItemWarehouse(e.target.value);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:8080/inventories/${params.inventoryId}`, {
        item_name: itemName,
        description: itemDescription,
        category: itemCategory,
        status: itemStatus,
        quantity: itemQuantity,
        warehouse_id: itemWarehouse,
      })
      .then((response) => {})
      .catch((err) => {
        console.log(err);
      });
    navigate("/inventories");
  };
  
  return (
    <>
      {inventories && (
        <div>
          <form className="form" id="addItemForm" onSubmit={handleUpdate}>
            <header className="form__header">
              <Link to={"/inventories"} className="form__header-link">
                <img
                  className="form__header-img"
                  src={ArrowIcon}
                  alt="Back arrow icon"
                ></img>
              </Link>
              <h1 className="form__header-title">Edit Inventory Item</h1>
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
                    defaultValue={inventories.item_name}
                    onChange={handleNameChange}
                  ></textarea>
                </div>
                <div className="form__input">
                  <p className="form__input-title">Description</p>
                  <textarea
                    name="description"
                    id="description"
                    className="form__input-description"
                    placeholder="Please enter a brief item description..."
                    defaultValue={inventories.description}
                    onChange={handleDescriptionChange}
                  ></textarea>
                </div>
                <div className="form__select-categories-container">
                  <label htmlFor="category" className="form__input-title">
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    className="form__select-categories"
                    defaultValue={inventories.category}
                    onChange={handleCategoryChange}
                  >
                    <option value="Accessories">Accessories</option>
                    <option value="Gear">Gear</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Health">Health</option>
                    <option value="Apparel">Apparel</option>
                  </select>
                </div>
              </section>
              <section className="form__item-avail">
                <h2 className="form__item-avail-title">Item Availability</h2>
                <p className="form__input-title">Status</p>
                <div className="form__radio-btn-wrapper">
                  <div className="form__radio-btn">
                    <input
                      className="form__radio-btn--in radio-custom"
                      type="radio"
                      id="status"
                      name="status"
                      value="In stock"
                      onChange={handleStatusChange}
                    ></input>
                    <label className="form__radio-btn-label" htmlFor="status">
                      In stock
                    </label>
                  </div>
                  <div className="form__radio-btn">
                    <input
                      className="form__radio-btn--out radio-custom"
                      type="radio"
                      id="status"
                      name="status"
                      defaultValue={inventories.status}
                      onChange={handleStatusChange}
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
                    defaultValue={inventories.quantity}
                    onChange={handleQuantityChange}
                  ></textarea>
                </div>

                <div className="select-category">
                  <label className="form__input-title">Warehouse</label>
                  <select
                    className="form__select-categories"
                    id="warehouse_id"
                    name="warehouse_id"
                    defaultValue={inventories.warehouse_id}
                    onChange={handleWarehouseChange}
                  >
                    <option value="150a36cf-f38e-4f59-8e31-39974207372d">
                      Boston
                    </option>
                    <option value="2922c286-16cd-4d43-ab98-c79f698aeab0">
                      Manhattan
                    </option>
                    <option value="5bf7bd6c-2b16-4129-bddc-9d37ff8539e9">
                      Washington
                    </option>
                    <option value="89898957-04ba-4bd0-9f5c-a7aea7447963">
                      Santa Monica
                    </option>
                    <option value="90ac3319-70d1-4a51-b91d-ba6c2464408c">
                      Jersey
                    </option>
                    <option value="ade0a47b-cee6-4693-b4cd-a7e6cb25f4b7">
                      Seattle
                    </option>
                    <option value="bb1491eb-30e6-4728-a5fa-72f89feaf622">
                      Miami
                    </option>
                    <option value="bfc9bea7-66f1-44e9-879b-4d363a888eb4">
                      San Francisco
                    </option>
                  </select>
                </div>
              </section>
            </main>
          </form>
        </div>
      )}
      <div className="form__btn-wrapper">
        <Link to={"/inventories"}>
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
            Save
          </button>
        </div>
      </div>
    </>
  );
}

export default EditInventoryItemDetails;
