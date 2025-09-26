import React from "react";

export default function Header() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      {/*       <!-- Logo --> */}
      <h1 className="text-5xl font-bold text-slate-800 mb-8 text-center">
        SnapShot
      </h1>

      {/*     <!-- Search bar --> */}
      <div className="flex items-center w-full max-w-md mb-6">
        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-gray-200 border border-slate-300 rounded-l-md px-4 py-2 shadow-md focus:outline-none"
        />
        <button className="bg-sky-700 px-4 py-2 rounded-r-md text-white cursor-pointer">
          🔍
        </button>
      </div>

      {/*     <!-- Categories --> */}
      <div className="flex flex-col w-full items-center justify-center gap-3 mb-8 md:flex-row">
        <button className="bg-slate-800 text-white px-4 py-1 w-full hover:scale-105 cursor-pointer rounded md:w-25">
          Mountain
        </button>
        <button className="bg-slate-800 text-white px-4 py-1 w-full hover:scale-105 cursor-pointer rounded md:w-25">
          Beaches
        </button>
        <button className="bg-slate-800 text-white px-4 py-1 w-full hover:scale-105 cursor-pointer rounded md:w-25">
          Birds
        </button>
        <button className="bg-slate-800 text-white px-4 py-1 w-full hover:scale-105 cursor-pointer rounded md:w-25">
          Food
        </button>
      </div>
    </div>
  );
}
