import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "./Title";
const RoomFilter = () => {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = context;

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        <div className="form-group">
          <lalbel htmlFor="type">room type</lalbel>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          />
        </div>
      </form>
    </section>
  );
};

export default RoomFilter;
