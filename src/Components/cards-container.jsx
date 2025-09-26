import React, { useState, useEffect } from 'react'
import Card from './card'

function replaceString(str) {
  if (!str) return ''
  return str.trim().split(' ').join('_')
}

function uperCase(str) {
  if (!str) return ''
  return str[0].toUpperCase() + str.slice(1)
}

export default function CardsContainer({ image }) {
  const search = replaceString(image)
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  async function fetchData() {
    try {
      const response = await fetch(
        `https://api.pexels.com/v1/search?query=${search}&per_page=15`,
        {
          headers: {
            Authorization: import.meta.env.VITE_KEY,
          },
        }
      )

      if (!response.ok) {
        throw new Error(`Sorry we can't find that kind of images :c`)
      }

      const data = await response.json()

      setPhotos(data.photos)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [image])

  console.log(photos)

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      </div>
    )
  }
  if (error) return <p className="text-red-700">{error}</p>

  return (
    <div>
      <h2 className="text-2xl flex w-full items-center justify-center font-semibold text-slate-700 mb-6">
        {`${uperCase(image)}`}
      </h2>
      {photos.length > 1 ? (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-5xl lg:grid-cols-4">
          {photos.map((p) => (
            <Card key={p.id} ident={p.id} url={p.src.original} a={p.alt} />
          ))}
        </div>
      ) : (
        <p className="text-red-700 text-[2rem] text-center">{`Sorry, we can't find that kind of image :c`}</p>
      )}
    </div>
  )
}
