import React from "react";
import { Link } from "react-router-dom";
const Room = ({ room }) => {
  const { name, slug, images, price } = room;
  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0]} alt="single-room" />
        <div className="price-top">
          <h6>Rs{price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          Features
        </Link>
      </div>
    </article>
  );
};

export default Room;
