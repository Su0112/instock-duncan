import "./editInventoryItemDetails.scss";
import Select from "react-select";
import ArrowIcon from "../../assets/Icons/arrow_back-24px.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import axios from "axios";

const category = [
  { value: "Accessories", label: "Accessories" },
  { value: "Gear", label: "Gear" },
  { value: "Electronics", label: "Electronics" },
  { value: "Health", label: "Health" },
  { value: "Apparel", label: "Apparel" },
];

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
    value: "bfc9bea7-66f1-44e9-879b-4d363a888eb4",
    label: "San Francisco",
  },
];

function EditInventoryItemDetails() {
  const params = useParams();

  const [defaultForm, setDefaultForm] = useState({
    item_name: "Television",
    description:
      'This 50", 4K LED TV provides a crystal-clear picture and vivid colors.',
  });

  const [selected, setSelected] = useState("Out of Stock");
  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  const [inventoryId, setInventoryId] = useState([]);
  const [inventories, setInventories] = useState([]);
  const [editId, setEditId] = useState([]);

  const BACK_END_URL = `${process.env.REACT_APP_BACKEND_URL}/inventories`;

  const formRef = useRef();
  const navigate = useNavigate();

  //   const handleEdit = (event, inventoryId) => {
  //     event.preventDefault();
  //     setEditId(inventoryId);
  //   };
  //   useEffect(() => {
  //     axios
  //       .get(
  //         `http://localhost:8080/inventories/${params.id}`
  //       )
  //       .then((response) => {
  //         console.log(response.data);
  //       });
  //   });

  const handleUpdate = async (event, inventoryId) => {
    event.preventDefault();
    try {
      const { data } = await axios.put(
        `${BACK_END_URL}/${params.inventoryId}/edit`,
        {
          item_name: formRef.current.item_name.value,
          description: formRef.current.description.value,
          category: formRef.current.category.value,
          status: formRef.current.status.value,
          warehouse_id: formRef.current.warehouse_id.value,
        }
      );
      setInventories(data);
      //   setEditId(null);
    } catch {
      console.log("error");
    }
  };

  return (
    <>
      <form
        className="form"
        ref={formRef}
        id="addItemForm"
        onSubmit={(event) => handleUpdate(event, inventoryId)}
      >
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
                defaultValue={defaultForm.item_name}
                // onChange={handleNameChange}
              ></textarea>
            </div>
            <div className="form__input">
              <p className="form__input-title">Description</p>
              <textarea
                name="description"
                id="description"
                className="form__input-description"
                placeholder="Please enter a brief item description..."
                defaultValue={defaultForm.description}
                //  onChange={handleDescriptionChange}
              ></textarea>
            </div>
            <div className="select-category">
              <p className="form__input-title">Category</p>
              <Select
                id="category"
                name="category"
                classNamePrefix="react-select"
                options={category}
                defaultValue={{
                  value: "Electronics",
                  label: "Electronics",
                }}
              />
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
                  defaultChecked={selected === "In Stock"}
                  onChange={handleChange}
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
                  defaultChecked={selected === "Out of Stock"}
                  value="Out of Stock"
                  onChange={handleChange}
                ></input>
                <label className="form__radio-btn-label" htmlFor="status">
                  Out of stock
                </label>
              </div>
            </div>
            <div className="select-category">
              <p className="form__input-title">Warehouse</p>
              <Select
                id="warehouse_id"
                name="warehouse_id"
                options={warehouse}
                defaultValue={{
                  value: "2922c286-16cd-4d43-ab98-c79f698aeab0",
                  label: "Manhattan",
                }}
              />
            </div>
          </section>
        </main>
      </form>
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
