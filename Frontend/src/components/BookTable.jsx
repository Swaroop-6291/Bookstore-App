import React from 'react'
import { Link } from 'react-router-dom'

const BookTable = ({books}) => {
  return (
    <table className='w-full border-separate border-spacing-2'>
            <thead>
                <tr>
                    <th className='border border-slate-500 rounded-md text-center'>S.no</th>
                    <th className='border border-slate-500 rounded-md'>Title</th>
                    <th className='border border-slate-500 rounded-md max-md:hidden'>Author</th>
                    <th className='border border-slate-500 rounded-md max-md:hidden'>PublishYear</th>
                    <th className='border border-slate-500 rounded-md'>Operations</th>
                </tr>
            </thead>

            <tbody>
                {
                    books.map((book,index)=>(
                         <tr key={book._id}>
                            <td className='border border-slate-500 rounded-md text-center'>
                                {index+1}
                            </td>
                            <td className='border border-slate-500 rounded-md text-center'>
                                {book.title}
                            </td>
                            <td className='border border-slate-500 rounded-md max-md:hidden text-center'>
                                {book.author}
                            </td>
                            <td className='border border-slate-500 rounded-md max-md:hidden text-center'>
                                {book.publishYear}
                            </td>
                            <td className='border border-slate-500 rounded-md '>
                                 <div className='flex justify-center gap-x-4'>
                                    <Link to={`/books/Details/${book._id}`}>
                                       <h1 className='text-2xl text-green-600'>Details</h1>
                                    </Link>
                                    <Link to={`/books/Edit/${book._id}`}>
                                       <h1 className='text-2xl text-yellow-600'>Edit</h1>
                                    </Link>
                                    <Link to={`/books/Delete/${book._id}`}>
                                       <h1 className='text-2xl text-red-600'>Delete</h1>
                                    </Link>
                                 </div>
                            </td>
                        </tr>
                    ))
                }
            </tbody>

        </table>
  )
}

export default BookTable
