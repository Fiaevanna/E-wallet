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
  const [error, setError] = useState("");

  /* denna funktionen stoppar state om man skriver mer en vad som är requierd för dens fält annars så sparar den värdet i state */

  const handleOnChange = (event, inputKey) => {
    setError("");
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
      setError("Plz select a vendor");
      return;
    }
    if (formCardInputs.cardholder.length > 49) {
      setError("your name is to long, plz change it!");
      return;
    }
    if (formCardInputs.cardnumber.length !== 16) {
      setError("we need 16 numbers plz for your cardnumber");
      return;
    }

    if (
      formCardInputs.expiremonth.length > 2 ||
      formCardInputs.expiremonth.length === 0
    ) {
      setError("expire month requires 1 or 2 numbers");
      return;
    }

    if (
      formCardInputs.expireyear.length > 2 ||
      formCardInputs.expireyear.length === 0
    ) {
      setError("expire year requires 1 or 2 numbers");
      return;
    }

    if (formCardInputs.cvv.length !== 3) {
      setError("three cvv-numbers are requierd");
      return;
    }

    const allCards = localStorage.getItem("allCards");
    const allCardsParsed = JSON.parse(allCards);
    if (allCardsParsed.lenght >= 4) {
      setError("you can only have 4 active cards :( ");
      return;
    }

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

      <p style={{ color: "darkred" }}>{error}</p>

      <button
        onClick={save}
        style={{
          width: "320px",
          marginTop: "30px",
          backgroundColor: "darkGreen",
        }}
      >
        Save
      </button>
    </>
  );
};

export default Forms;
