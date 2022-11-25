//import { Link } from "react-router-dom";
import "./DeleteInventoryItem.scss";
import closeIcon from "../../assets/Icons/close-24px.svg";
//import React from "react";

//this is a popup for delete inventory
//pass prop closeDeleteInventory;
//

function DeleteInventoryItem({ closeDeleteInventory, deleteInventoryData }) {
  //console.log("deleteInventoryData", deleteInventoryData);
  return (
    <>
      <div className="delete__background">
        <div className="delete__inner">
          <button
            className="delete__btn-close"
            onClick={() => closeDeleteInventory(false)}
          >
            <img src={closeIcon} alt="close" />
          </button>
          <div className="delete__header-wrapper">
            <h1 className="delete__headerText">
              Delete {deleteInventoryData.item_name} inventory item?
            </h1>
          </div>
          <div className="delete__details-wrapper">
            <p></p>
            <p className="delete__detailsText">
              Please confirm that you’d like to delete //Television// from the
              inventory list.You won’t be able to undo this action.
            </p>
          </div>
          <div className="delete__btns-wrapper">
            <button
              className="delete__btns-cancel"
              onClick={() => closeDeleteInventory(false)}
            >
              Cancel
            </button>
            <button className="delete__btns-delete">Delete</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeleteInventoryItem;
