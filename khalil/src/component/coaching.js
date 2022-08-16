import React from 'react'
import { useState } from 'react'
import Coachingcard from './coachingcard'
import './card.css'
function Coaching() {
  const [Card, setCard] = useState([
    {
      title: "WORKOUT 100DT",
      description: "Due to a political conspiracy, an innocent man is sent to death row and his only hope is his brother, who makes it his mission to deliberately get himself sent to the same prison in order to break the both of them out, from the inside.",
      posterURL: "card image/card.jpg",
    },
    {
      title: "DIET+WORKOUT LIFESTYLE 200DT",
      description: "Due to a political conspiracy, an innocent man is sent to death row and his only hope is his brother, who makes it his mission to deliberately get himself sent to the same prison in order to break the both of them out, from the inside.",
      posterURL: "card image/card.jpg",
    },
    {
      title: "DIET+WORKOUT LIFESTYLE 550DT",
      description: "Due to a political conspiracy, an innocent man is sent to death row and his only hope is his brother, who makes it his mission to deliberately get himself sent to the same prison in order to break the both of them out, from the inside.",
      posterURL: "card image/card.jpg",
    },
    {
      title: "SÉANCE PRIVÉE 50DT",
      description: "Due to a political conspiracy, an innocent man is sent to death row and his only hope is his brother, who makes it his mission to deliberately get himself sent to the same prison in order to break the both of them out, from the inside.",
      posterURL: "card image/card.jpg",

    },

  ])
  return (
    <div>
      {Card.map(el => <Coachingcard key={Coachingcard.id} title={el.title} description={el.description} posterURL={el.posterURL} />)}
    </div>
  )
}

export default Coaching
