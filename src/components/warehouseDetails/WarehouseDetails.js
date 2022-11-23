import "./warehouseDetails.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const URL = "http://localhost:8080/warehouses/";

export default function WarehouseDetails() {
  const [warehouse, setWarehouse] = useState();
  const [inventories, setInventories] = useState([]);

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
              //   console.log(inventories);
            })
            .catch((error) => console.log(error));
        } else {
          // todo redirect to warehouses
        }
      })
      .catch((error) => console.log(error));
    // console.log(warehouse);
  }, [params]);

  return (
    <>
      {warehouse && (
        <div className="main">
          <div className="warehoseDetail">
            <h3 className="warehoseDetail__name">{warehouse.warehouse_name}</h3>
          </div>
        </div>
      )}

      {
        // console.log(inventories)
        // console.log(inventories)
      }
    </>
  );
}
