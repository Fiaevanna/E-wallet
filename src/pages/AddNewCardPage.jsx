import { useState } from "react";
import Forms from "../components/Forms";
import { Link } from "react-router-dom";

const AddNewCardPage = () => {
  return (
    <>
      <Forms />

      <div
        style={{
          margin: "30px auto",
          display: "flex",
          width: "320px",
          marginTop: "30px",
          justifyContent: "space-between",
        }}
      >
        
        <Link to={"/cards"}>
          <button style={{  width: "320px", marginTop: "30px",backgroundColor: "darkRed" }}>Go back</button>
        </Link>
      </div>
    </>
  );
};

export default AddNewCardPage;
