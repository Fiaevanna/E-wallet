import { useState } from "react";
import DisplayOneCard from "./DisplayOneCard";
import { useNavigate } from "react-router-dom";
const Forms = () => {
  const [formCardInputs, setFormCardInputs] = useState({
    vendor: "",
    cardnumber: "",
    cardholder: "",
    expiremonth: "",
    expireyear: "",
    cvv: "",
  });

  const handleOnChange = (event, inputKey) => {
    if (inputKey === "cardholder" && event.target.value.length > 49) {
      return;
    }
    if (inputKey === "cardnumber" && event.target.value.length > 16) {
      return;
    }

    if (inputKey === "expiremonth" && event.target.value.length > 2) {
      return;
    }

    if (inputKey === "expireyear" && event.target.value.length > 2) {
      return;
    }

    if (inputKey === "cvv" && event.target.value.length > 3) {
      return;
    }

    setFormCardInputs({
      ...formCardInputs,
      [inputKey]: event.target.value,
    });
  };

  const navigate = useNavigate();
  const save = () => {
    if (formCardInputs.vendor === "") {
      return;
    }
    if (formCardInputs.cardholder.length > 49) {
      return;
    }
    if (formCardInputs.cardnumber.length !== 16) {
      return;
    }

    if (
      formCardInputs.expiremonth.length > 2 ||
      formCardInputs.expiremonth.length === 0
    ) {
      return;
    }

    if (
      formCardInputs.expireyear.length > 2 ||
      formCardInputs.expireyear.length === 0
    ) {
      return;
    }

    if (formCardInputs.cvv.length !== 3) {
      return;
    }

    const allCards = localStorage.getItem("allCards");
    const allCardsParsed = JSON.parse(allCards);

    allCardsParsed.push(formCardInputs);
    localStorage.setItem("allCards", JSON.stringify(allCardsParsed));

    navigate("/cards");
  };

  return (
    <>
      <DisplayOneCard
        vendor={formCardInputs.vendor}
        cardnumber={formCardInputs.cardnumber}
        cardholder={formCardInputs.cardholder}
        expiremonth={formCardInputs.expiremonth}
        expireyear={formCardInputs.expireyear}
        cvv={formCardInputs.cvv}
      />
      <form>
        <label
          style={{ paddingTop: "10px", display: "block" }}
          htmlFor="vendor"
        >
          Vendor: <br />
          <select
            style={{ width: "300px", padding: "10px" }}
            name="vendor"
            id="vendor"
            value={formCardInputs.vendor}
            onChange={(event) => handleOnChange(event, "vendor")}
          >
            <option value="">Pick a vendor</option>
            <option value="MasterCard">MasterCard</option>
            <option value="AmericanExpress">AmericanExpress</option>
            <option value="Visa">VISA</option>
            <option value="Pfc">PFC</option>
          </select>
        </label>

        <br />

        <label
          style={{ paddingTop: "20px", display: "block" }}
          htmlFor="cardholder"
        >
          Card Holder:
          <br />
          <input
            style={{ width: "300px", padding: "10px" }}
            name="cardholder"
            value={formCardInputs.cardholder}
            onChange={(event) => handleOnChange(event, "cardholder")}
            type="text"
          />
        </label>

        <label
          style={{ paddingTop: "20px", display: "block" }}
          htmlFor="cardnumber"
        >
          Card number:
          <br />
          <input
            style={{ width: "300px", padding: "10px" }}
            name="cardnumber"
            value={formCardInputs.cardnumber}
            onChange={(event) => handleOnChange(event, "cardnumber")}
            type="number"
          />
        </label>
        <br />

        <label
          style={{ paddingTop: "20px", display: "block" }}
          htmlFor="expiremonth"
        >
          Expire month: <br />
          <input
            style={{ width: "300px", padding: "10px" }}
            name="expiremonth"
            value={formCardInputs.expiremonth}
            onChange={(event) => handleOnChange(event, "expiremonth")}
            type="number"
          />
        </label>

        <br />

        <label
          style={{ paddingTop: "20px", display: "block" }}
          htmlFor="expireyear"
        >
          Expire year: <br />
          <input
            style={{ width: "300px", padding: "10px" }}
            name="expireyear"
            value={formCardInputs.expireyear}
            onChange={(event) => handleOnChange(event, "expireyear")}
            type="number"
          />
        </label>

        <br />

        <label style={{ paddingTop: "20px", display: "block" }} htmlFor="cvv">
          Cvv: <br />
          <input
            style={{ width: "300px", padding: "10px" }}
            cvv="cvv"
            value={formCardInputs.cvv}
            onChange={(event) => handleOnChange(event, "cvv")}
            type="number"
          />
        </label>
      </form>

      <button onClick={save} style={{ width: "320px", marginTop: "30px",  backgroundColor: "darkGreen" }}>
        Save
      </button>
    </>
  );
};

export default Forms;
