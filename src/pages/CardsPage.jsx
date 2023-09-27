import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DisplayOneCard from "../components/DisplayOneCard";

/* Här är ingången till mina kort som visas på /cards */
const CardsPage = () => {
  /* Här är en state som är en tom array  som sedan tar emot object med alla kort saker*/
  const [cardList, setCardList] = useState([]);

  /* Här skapar jag en variabel som går in i localstorage och letar efter nycklen "allCards" 
  villket innehåller en array med object som sparas i allCards   */

  useEffect(() => {
    const allCards = localStorage.getItem("allCards");
    /* Här kollar jag om det inte finns några kort och om så är fallet så skapar jag ett object
     som är ett hårkodatkort som jag sparar i localstorage genom att stringifya arrayen, 
     för att localst tar bara emot strings och sparar även i state "cardList"*/
    if (allCards === null) {
      const newCard = {
        vendor: "PFC",
        cardnumber: "4534 5434 9876 1234",
        cardholder: "Sofia Andersen",
        expiremonth: 7,
        expireyear: 6,
        cvv: 111,
      };

      setCardList([newCard]);
      localStorage.setItem("allCards", JSON.stringify([newCard]));
      /* Annars om allCard inte är null så omvandlar jag kort till en array som jag sedan lägger upp i state  */
    } else {
      const cards = JSON.parse(allCards);
      setCardList(cards);
    }
  }, []);
  return (
    <>
      {/* här mapar jag igenom cardList och renderar ut ett kort i taget (DisplayOneCard) , 
    index har jag satt till key för att jag inte använder id i mia kort-object
     */}
      {cardList.map((card, index) => (
        <DisplayOneCard key={index} {...card} />
      ))}
      {/* här googla jag och hitta att man kan diseble länkar via css attrebutet pointerEvents som kollar ett condition 
      (sätter den till none om det finns 4 kort och då ska man inte kunne lägga till fler kort) */}
      <Link
        style={{ pointerEvents: cardList.length >= 4 ? "none" : "" }}
        to={"/newcard"}
      >
        <button>Add new card</button>
      </Link>
    </>
  );
};

export default CardsPage;
