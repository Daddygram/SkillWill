import React from 'react'

const Book = ({name, image, description, characters, action}) => {
  return (
    <div className='book'>
      <header className='book-title'> {name} </header>
      
      <div className='img-box'>
        <img src={image} alt={name}></img>
      </div>

      <p> {description} </p>
      {characters.map((w) => <div>{w}</div>)}
      <button onClick={() => action(characters)} className='btn'>Button</button>
    </div>
  )
}

export default Book