import React from "react";
import ReadingBook from "../bookReader/ReadingBook";
const Home = () => {
  const BookRead = {
    name: "Social",
    prize: 150,
    about : [
      "This is a book about Social Studies",
      "This book is for class 7th students",
      "This book is published by XYZ publications"
    ]
  };
  const BookRead2 = {
    name : "Maths",
    prize : 200,
    about:[
      "This is a book about Mathematics",
      "This book is for class 8th students",
      "This book is published by ABC publications"
    ]
  }

    

  return (
    <div>
      {/* <ReadingBook  data={'hi'} bookData1={'maths'} /> */}
      <ReadingBook  BookData={BookRead} />
      <hr />
      <ReadingBook  BookData={BookRead2} />
      <ReadingBook  />
    </div>
  );
};

export default Home;
