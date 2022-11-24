import sortIcon from "../../assets/Icons/sort-24px.svg";
import chevronRightIcon from "../../assets/Icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import { Link } from "react-router-dom";
import "./InventoryList.scss";

function InventoryList() {
  return (
    <section className="inventory">
      <div className="inventory__top-wrapper">
        {/* <div className="inventory__header-wrapper"> */}
        <h1 className="inventory__headerText">Inventory</h1>
        {/* </div> */}

        <div className="inventory__searchBar-wrapper">
          <form className="inventory__searchBar">
            <label>
              <input
                className="inventory__search-input"
                type="search"
                placeholder="Search..."
              ></input>
            </label>
          </form>
        </div>

        <div className="inventory__addItems-wrapper">
          <Link to={"/addInventoryItem"}>
            <button className="inventory__addItem-btn" type="submit">
              +Add New Item
            </button>
          </Link>
        </div>
      </div>

      <div className="inventory__list">
        <div className="inventory__card-wrapper">
          {/* INVENTORY ITEM */}
          <div className="inventory__item-wrapper">
            <div className="inventory__sort-header">
              <h5 className="inventory__sort-headerText ">INVENTORY ITEM</h5>
              <img
                className="inventory__sort-sortIcon"
                src={sortIcon}
                alt="sort icon"
              />
            </div>
            <div className="inventory__appliance-wrapper">
              <a href="">
                <p className="inventory__applianceText">Television</p>

                <img src={chevronRightIcon} alt="right Icon" />
              </a>
            </div>
          </div>

          {/* INVENTORY STATUS */}
          <div className="inventory__status-wrapper">
            <div className="inventory__sort-header">
              <h5 className="inventory__sort-headerText">STATUS</h5>
              <img
                className="inventory__sort-sortIcon"
                src={sortIcon}
                alt="sort icon"
              />
            </div>
            <p className="inventory__statusText">IN STOCK</p>
          </div>

          {/* INVENTORY CATEGORY */}
          <div className="inventory__category-wrapper">
            <div className="inventory__sort-header">
              <h5 className="inventory__sort-headerText">CATEGORY</h5>
              <img
                className="inventory__sort-sortIcon"
                src={sortIcon}
                alt="sort icon"
              />
            </div>
            <p className="inventory__categoryText">Electronics</p>
          </div>

          {/* INVENTORY QTY */}
          <div className="inventory__qty-wrapper">
            <div className="inventory__sort-header">
              <h5 className="inventory__sort-headerText">QTY</h5>
              <img
                className="inventory__sort-sortIcon"
                src={sortIcon}
                alt="sort icon"
              />
            </div>
            <p className="inventory__qtyText">500</p>
          </div>
          {/* INVENTORY WAREHOUSE */}
          <div className="inventory__warehouse-wrapper">
            <div className="inventory__sort-header">
              <h5 className="inventory__sort-headerText">WAREHOUSE</h5>
              <img
                className="inventory__sort-sortIcon"
                src={sortIcon}
                alt="sort icon"
              />
            </div>
            <p className="inventory__warehouseText">Manhattan</p>
          </div>

          {/* INVENTORY ACTIONS BUTTONS */}
          <div className="inventory__actions">
            <div className="inventory__actions-header">
              <h5 className="inventory__sort-headerText">ACTIONS</h5>
            </div>

            <div className="inventory__actions-btns">
              <button>
                <img src={deleteIcon} alt="delete icon" />
              </button>
              <button>
                <img src={editIcon} alt="edit icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InventoryList;
