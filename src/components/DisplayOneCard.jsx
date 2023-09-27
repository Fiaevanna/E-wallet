
const DisplayOneCard = ({
  vendor,
  cardnumber,
  cardholder,
  expiremonth,
  expireyear,
  cvv,
  
}) => {
  return (
    <>
      

      <div
        style={{
          width: "500px",
          height: "250px",
          backgroundColor: "pink",
          color: "black",
          fontWeight: "bold",
        }}
      >
        <h3>{vendor}</h3>
        <p>Cardnumber: <br /> {cardnumber}</p>
        <p>
          Cardholder: <br />
          {cardholder}
        </p>
        <p>
          M/Y {expiremonth}/{expireyear}
        </p>
        <h4>Cvv: {cvv}</h4>
      </div>
      <br />
      
    </>
  );
};

export default DisplayOneCard;
