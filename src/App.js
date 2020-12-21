import React, { useState } from "react";
import "./styles.css";

const foodDictionary = {
  chinesse: [
    { name: "Hot Soup", rating: "5/5" },
    { name: "Chilli Potato", rating: "4/5" },
    { name: "Dumplings", rating: "4.5/5" },
    { name: "Chow Mein", rating: "3.5/5" }
  ],
  italian: [
    { name: "White Pasta", rating: "4/5" },
    { name: "Pizza", rating: "3.5/5" },
    { name: "Lasagna", rating: "3/5" },
    { name: "Rissoto", rating: "3.5/5" }
  ],
  indian: [
    { name: "Dal Makhani", rating: "4.5/5" },
    { name: "Shahi Paneer", rating: "5/5" },
    { name: "Shahi Pulav", rating: "5/5" },
    { name: "Stuffed Pratha", rating: "4/5" }
  ],
  japanese: [
    { name: "Ramen", rating: "4.5/5" },
    { name: "Udon", rating: "3.5/5" },
    { name: "Unagi", rating: "4/5" },
    { name: "Rice Bowl", rating: "3.5/5" }
  ],
  thai: [
    { name: "Tom Yum Goong", rating: "4/5" },
    { name: "Pad Thai", rating: "3.5/5" },
    { name: "Khao Pad", rating: "4.5/5" },
    { name: "Tom kha Kai", rating: "3.5/5" }
  ]
};

export default function App() {
  const [selectedFood, setFood] = useState("chinesse");

  function getBackground(index) {
    if (index % 2 === 1) {
      return "white";
    }
    return "lightgrey";
  }
  //click handler for button to select the countries food
  function foodClickHandler(foodsitem) {
    setFood(foodsitem);
  }

  return (
    <div className="App">
      <nav style={{ border: "red" }}>
        <h1
          style={{
            color: "white",
            backgroundColor: "red",
            textAlign: "center",
            fontWeight: "bolder"
          }}
        >
          Soul Kitchen <span>👨‍🍳 🍽️</span>
        </h1>
        <p
          style={{
            fontSize: "larger",
            color: "red",
            textAlign: "center",
            fontWeight: "bolder"
          }}
        >
          We offer cousines from five varieties..<span>😋</span>😋
        </p>
      </nav>
      <div>
        {Object.keys(foodDictionary).map((foods) => (
          <button
            onClick={() => foodClickHandler(foods)}
            style={{
              cursor: "pointer",
              backgroundColor: "orange",
              borderRadius: "0.5rem",
              margin: "1rem 0.3rem",
              fontWeight: "bolder",
              fontSize: "larger",
              textAlign: "center",
              padding: "0.5rem  1rem",
              border: "2px solid black"
            }}
          >
            {foods}
          </button>
        ))}
      </div>

      <div style={{ textAlign: "center" }}>
        <ul style={{ paddingInlineEnd: "22px" }}>
          {foodDictionary[selectedFood].map((food, index) => (
            <li
              key={food.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                margin: "1rem 0rem",
                borderRadius: "0.5rem",
                backgroundColor: getBackground(index),
                boxShadow: "gray",
                border: "2px solid",
                width: "80%"
              }}
            >
              <div style={{ fontSize: "larger", fontWeight: "bolder" }}>
                Dish Name : {food.name}
              </div>
              <div style={{ fontSize: "smaller", fontWeight: "bolder" }}>
                Dish Raing : {food.rating}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <footer>
        <p>
          As the name suggests, We put our souls into the food that we prepare,
          so tat that our customers are full not just upto their tummy but to
          their soul too. 👩‍🍳
        </p>
      </footer>
    </div>
  );
}
