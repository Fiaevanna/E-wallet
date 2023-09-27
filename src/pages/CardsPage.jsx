import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DisplayOneCard from "../components/DisplayOneCard";
const CardsPage = () => {
  const [cardList, setCardList] = useState([]);
  useEffect(() => {
    const allCards = localStorage.getItem("allCards");
    if (allCards === null) {
      const newCard = {
        vendor: "PFC",
        cardnumber: "4534 5434 9876 1234",
        cardholder: "Sofia Andersen",
        expiremonth: 7,
        expireyear: 6,
        cvv: 111,
        
      };
      setCardList([newCard])
      localStorage.setItem("allCards", JSON.stringify([newCard]))
    } else {
      const cards = JSON.parse(allCards)
     setCardList(cards)
    }
  }, []);
  return (
    <>
      {cardList.map((card, index) => (
        <DisplayOneCard key={index} {...card} />
      ))}
      <Link style={{pointerEvents: cardList.length >= 4 ? 'none' : ''}} aria-disabled to={"/newcard"}>
        <button>Add new card</button>
      </Link>
    </>
  );
};

export default CardsPage;

/* key={card.id}
          vendor={card.vendor}
          cardNumber={card.cardNumber}
          expireMonth={card.expireMonth}
          expireYear={card.expireYear}
          CVV={card.CVV}
          id={card.id} */
