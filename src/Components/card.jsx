import React from "react";

export default function Card() {
  return (
    <div className="w-auto overflow-hidden rounded-lg">
      <img
        src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=500"
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 "
      />
    </div>
  );
}
