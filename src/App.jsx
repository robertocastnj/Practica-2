import React from "react";
import Header from "./Components/header";
import CardsContainer from "./Components/cards-container";

export default function App() {
  async function fetchData() {
    try {
      const response = await fetch(
        "https://api.pexels.com/v1/search?query=tiguer&per_page=15",
        {
          headers: {
            Authorization: import.meta.env.VITE_KEY,
          },
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  fetchData();

  return (
    <div className="flex flex-col items-center p-8 w-full h-full">
      <Header />
      <CardsContainer />
    </div>
  );
}
