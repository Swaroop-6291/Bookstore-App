import React from 'react'
import BookSingleCard from './BookSingleCard'

const BookCard = ({books}) => {
  return (
    <div className='flex flex-wrap relative'>
       {books.map((item)=>(
         <BookSingleCard key={item._id} item={item} />
       ))}
    </div>
  )
}

export default BookCard