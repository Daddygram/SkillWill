
import Book from "../Components/Book.jsx"
import bookImg from "../img/book.jpg"

const data = [
    {id:1, name:"Eloquent", image:bookImg, description:"This is Description", characters:['html', 'css', 'javascript']},
    {id:2, name:"Eloquent", image:bookImg, description:"This is Description", characters:['html', 'css', 'javascript']},
    {id:3, name:"Eloquent", image:bookImg, description:"This is Description", characters:['html', 'css', 'javascript']},
    {id:4, name:"Eloquent", image:bookImg, description:"This is Description", characters:['html', 'css', 'javascript']},
    
]

const BookList = () => {

    function action(characters) {
        console.log('Characters: ' + characters)
    }

  return (
    <div className="book-list">
        {data.map((book) => <Book key={book.id} name={book.name} image={book.image} description={book.description} characters={book.characters} action={action}/>)}
    </div>
  )
}

export default BookList