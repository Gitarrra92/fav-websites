import React from "react";
import "./style.css";

import Form from "../Form/Form";

export default function LeftBookmark({
  newCard,
  setNewCard,
  cardData,
  setCardData
}) {
  return (
    <div className="leftContent">
      <img src={require("../../data/img/book.jpg")} alt="book"></img>
      <Form
        newCard={newCard}
        setNewCard={setNewCard}
        cardData={cardData}
        setCardData={setCardData}
      />
    </div>
  );
}
