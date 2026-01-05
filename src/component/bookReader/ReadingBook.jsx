import React, { useState } from "react";
import "./readBook.scss";

const defaultData = {
  name: "Dummy",
  prize: "0",
  about: ["This is a dummy book", "No details available"],
};

const ReadingBook = ({ BookData }) => {

  const data = BookData || defaultData;

  // ✅ initialize price properly
  const [dynamicPrice,setDynamicPrice] = useState(Number(data.prize));

  const handleAddMore = () => {
    console.log("Before:", dynamicPrice);

    // ✅ correct state update
   setDynamicPrice(dynamicPrice => dynamicPrice + 50)

    console.log("After:", dynamicPrice);
  };

  return (
    <div className="book">
      <h1>{data.name} book</h1>

      {data.name === "Maths" ? (
        <p>This is a Dummy Book</p>
      ) : (
        <p>This is a real Book</p>
      )}

      {data.about.map((abc, index) => (
        <li key={index} style={{ color: "green" }}>
          {abc}
        </li>
      ))}

      <button onClick={handleAddMore}>Add More</button>

      <p>Price ₹ {dynamicPrice}</p>
    </div>
  );
};

export default ReadingBook;
