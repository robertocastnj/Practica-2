import Header from './Components/header'
import CardsContainer from './Components/cards-container'
import { useState } from 'react'

export default function App() {
  const [image, setImage] = useState('Mountain')
  console.log(image)

  return (
    <div className="flex flex-col items-center p-8 w-full h-full">
      <Header image={image} setImage={setImage} />
      <CardsContainer image={image} />
    </div>
  )
}
