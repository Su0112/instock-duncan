//import { Link } from "react-router-dom";
import "./deleteWarehouseModal.scss";
import closeIcon from "../../assets/Icons/close-24px.svg";
//import React from "react";

function DeleteWarehouseModal({
  closeDeleteWarehouse,
  deleteWarehouseData,
  handleDelete,
}) {
  return (
    <>
      <div className="warehouse__delete__background">
        <div className="warehouse__delete__inner">
          <button
            className="warehouse__delete__btn-close"
            onClick={() => closeDeleteWarehouse(false)}
          >
            <img src={closeIcon} alt="close" />
          </button>
          <div className="warehouse__delete__header-wrapper">
            <h1 className="warehouse__delete__headerText">
              Delete {deleteWarehouseData.warehouse_name} warehouse?
            </h1>
          </div>
          <div className="warehouse__delete__details-wrapper">
            <p></p>
            <p className="warehouse__delete__detailsText">
              Please confirm that you’d like to delete {""}
              {deleteWarehouseData.warehouse_name} from the list of warehouses.
              You won’t be able to undo this action.
            </p>
          </div>
          <div className="warehouse__delete__btns-wrapper">
            <button
              className="warehouse__delete__btns-cancel"
              onClick={() => closeDeleteWarehouse(false)}
            >
              Cancel
            </button>
            <button
              className="warehouse__delete__btns-delete"
              onClick={(event) => handleDelete(event, deleteWarehouseData.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeleteWarehouseModal;
