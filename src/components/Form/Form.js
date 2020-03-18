import React from "react";
import "./style.css";

export default function Form({ newCard, setNewCard, cardData, setCardData }) {
  const sendCard = payload => {
    const oldArray = cardData;
    const newArray = [...oldArray, payload];
    setCardData(newArray);
    setNewCard({ linkHref: "", linkName: "" });
  };

  return (
    <form onSubmit={e => e.preventDefault()} className="form">
      <h2 className="formTitle">Add your fav website</h2>
      <div className="formInput">
        <input
          value={newCard.linkName}
          onChange={e =>
            setNewCard({ ...newCard, linkName: e.currentTarget.value })
          }
          type="text"
          minLength="1"
          maxLength="25"
          placeholder="Add bookmark"
        ></input>
      </div>
      <div className="formInput">
        <input
          value={newCard.linkHref}
          onChange={e =>
            setNewCard({ ...newCard, linkHref: e.currentTarget.value })
          }
          type="text"
          minLength="1"
          placeholder="Add Link"
        ></input>
      </div>
      <button onClick={() => sendCard(newCard)} className="formButton">
        Add
      </button>
    </form>
  );
}
