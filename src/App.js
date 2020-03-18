import React, { useState } from "react";
import "./App.css";

import LeftBookmark from "./components/LeftBookmark/LeftBookmark";
import RightBookmark from "./components/RightBookmark/RightBookmark";

function App() {
  const [cardData, setCardData] = useState([
    { linkName: "my first website", linkHref: "www.google.com" }
  ]);
  const [newCard, setNewCard] = useState({ linkName: "", linkHref: "" });

  return (
    <div className="App">
      <main>
        <LeftBookmark
          newCard={newCard}
          setNewCard={setNewCard}
          cardData={cardData}
          setCardData={setCardData}
        />
        <RightBookmark cardData={cardData} />
      </main>
    </div>
  );
}

export default App;
