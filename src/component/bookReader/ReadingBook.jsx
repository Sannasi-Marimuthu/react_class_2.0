import React from "react";
import "./readBook.scss";

const ReadingBook = ({BookData}) => {
  const defaultData = {
    name: "Dummy",
    prize: "0"
  };

  const data = BookData || defaultData

  return (
    <div className="book">
      <h1>{data.name} book</h1>
      <p>Price ₹ {data.prize}</p>
    </div>
  );
};

export default ReadingBook;
