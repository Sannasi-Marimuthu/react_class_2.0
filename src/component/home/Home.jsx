import React from "react";
import ReadingBook from "../bookReader/ReadingBook";
const Home = () => {
  const BookRead = {
    name: "Social",
    prize: 150,
  };

  

  return (
    <div>
      {/* <ReadingBook  data={'hi'} bookData1={'maths'} /> */}
      <ReadingBook  BookData={BookRead} />
      <ReadingBook />
    </div>
  );
};

export default Home;
