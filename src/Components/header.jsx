import React, { useState } from 'react'

export default function Header({ image, setImage }) {
  const prestates = ['Mountain', 'Beaches', 'Birds', 'Food']
  const [name, setName] = useState()

  console.log(name)

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold text-slate-800 mb-8 text-center">
        SnapShot
      </h1>

      <div className="flex items-center w-full max-w-md mb-6">
        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-gray-200 border border-slate-300 rounded-l-md px-4 py-2 shadow-md focus:outline-none"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <button
          type="button"
          className="bg-sky-700 px-4 py-2 rounded-r-md text-white cursor-pointer"
          onClick={() => {
            setImage(name)
          }}
        >
          🔍
        </button>
      </div>

      <div className="flex flex-col w-full items-center justify-center gap-3 mb-8 md:flex-row">
        {prestates.map((pre) => (
          <button
            key={pre}
            className="bg-slate-800 text-white px-4 py-1 w-full hover:scale-105 cursor-pointer rounded md:w-25"
            onClick={(e) => {
              setImage(pre)
              setName(pre)
            }}
          >
            {pre}
          </button>
        ))}
      </div>
    </div>
  )
}
