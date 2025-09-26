import React from "react";
import Card from "./card";

export default function CardsContainer() {
  return (
    <div>
      {/*     <!-- Title --> */}
      <h2 className="text-2xl flex w-full items-center justify-center font-semibold text-slate-700 mb-6">
        Mountain Pictures
      </h2>

      {/*     <!-- Gallery --> */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-5xl lg:grid-cols-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
