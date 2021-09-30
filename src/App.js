import React, { useState } from "react";

import "./styles.css";

export default function App() {
  const [tab, setTab] = useState("India");

  const data = {
    India: [
      {
        name: "Delhi",
        rating: "5/5"
      },
      {
        name: "Chennai",
        rating: "5/5"
      },
      {
        name: "Hyderabad",
        rating: "5/5"
      }
    ],
    USA: [
      {
        name: "New York",
        rating: "5/5"
      },
      {
        name: "Florida",
        rating: "4/5"
      },
      {
        name: "California",
        rating: "4/5"
      }
    ],
    Japan: [
      {
        name: "Tokyo",
        rating: "4/5"
      },
      {
        name: "Kyoto",
        rating: "4/5"
      },
      {
        name: "Osaka",
        rating: "4/5"
      }
    ]
  };

  return (
    <div className="App">
      <h1>🏔️ GoodTravels</h1>
      <p>My favorite places to visit</p>
      <div>
        <button onClick={() => setTab("India")}>India</button>
        <button onClick={() => setTab("USA")}>USA</button>
        <button onClick={() => setTab("Japan")}>Japan</button>
      </div>
      <div>
        {data[tab].map((item) => (
          <div class="card">
            <h2>{item.name}</h2>
            <p>{item.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
