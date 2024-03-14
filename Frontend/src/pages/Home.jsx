import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'
import { Link } from 'react-router-dom'
import BookCard from '../components/BookCard'
import BookTable from '../components/BookTable'

const Home = () => {
    const [books,setBooks]=useState([]);
    const [loading,setLoading]=useState(false);
    const [showType,setShowtype]=useState('Card');

    useEffect(()=>{
        const url=`/api/books`
        setLoading(true);
        axios
        .get(url)
        .then((response)=>{
            console.log(response?.status)
            setBooks(response.data.data)
            setLoading(false);
        })
        .catch((error)=>{
            setLoading(false)
            console.log(error)  
        })
    },[])
  return (
    
    <div className='p-4'>
        <div className='p-4 flex justify-center'>
           <button className='bg-sky-400 hover:bg-sky-600 p-2 mx-4 rounded-xl' onClick={()=>{setShowtype('Table')}}>
            Table
           </button>
           <button className='bg-sky-400 hover:bg-sky-600 p-2 rounded-xl' onClick={()=>{setShowtype('Card')}}>
            Card
           </button>
        </div>
      <div className='flex justify-between items-center'>
            
                <Link to="/Books/Create">
                   <h1 className='text-2xl text-gray-600'>Add Books</h1>
                </Link>
                

      </div>
      {loading?(<Spinner/>):(showType==='Table'?(<BookTable books={books}/>):(<BookCard books={books}/>))}

    </div>
  )
}

export default Home
