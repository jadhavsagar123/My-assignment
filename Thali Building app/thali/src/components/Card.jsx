import React from "react";
import { useDispatch } from "react-redux";
import { customization } from "../slices/thaliSlice";

const Card = ({ food }) => {
  const dispatch = useDispatch();

  const addTocart = (f) => {
    dispatch(customization(f));
  };

  return (
    <div>
      <div
        className="card container p-3 mt-4 shadow p-3 mb-5 bg-body rounded"
        style={{ width: "18rem", height: "30rem" }}
      >
        <img
          src={food.image}
          height="300px"
          width="400px"
          className="card-img-top"
          alt="food"
        />
        <div className="card-body">
          <h5 className="card-title text-wrap">{food.item}</h5>
          <h3>₹{food.price}</h3>
          <button className="btn btn-primary" onClick={() => addTocart(food)}>
            Add to thali
          </button>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Card;
