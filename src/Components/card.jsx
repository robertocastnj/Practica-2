import React from 'react'

export default function Card({ ident, url, a }) {
  return (
    <div className="w-90 h-60 overflow-hidden rounded-lg sm:w-75 md:w-58">
      <img
        key={ident}
        src={url}
        alt={a}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 "
      />
    </div>
  )
}
