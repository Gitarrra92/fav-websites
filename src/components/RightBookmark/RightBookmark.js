import React from "react";
import "./style.css";

export default function RightBookmark({ cardData }) {
  return (
    <>
      <div className="rightContent">
        {cardData.map((card, i) => {
          return (
            <div className="rightSection">
              <h2>
                <a href={card.linkHref}>{card.linkName}</a>
              </h2>
            </div>
          );
        })}
      </div>
    </>
  );
}
