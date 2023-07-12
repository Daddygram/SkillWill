import React from 'react'
import { useParams } from 'react-router-dom'

const data = [
    {id:1, fact: "Bruce Wayne's Name Comes from Two Real Heroes"},
    {id:2, fact: "Batman Beat Darkseid… Twice!"},
    {id:3, fact:"There’s a Batman College Course"}
]

const Dynamic = () => {
    const param = useParams()

    const facts = data.find(fact => fact.id == param.id)

    if(!facts){
        return <div>Fact Not Found</div>
    }

  return (
    <div>
        <h1>{facts.fact}</h1>
    </div>
  )
}

export default Dynamic