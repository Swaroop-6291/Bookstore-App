import React,{useState,useEffect} from 'react'
import axios from 'axios'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import { useNavigate,useParams } from 'react-router-dom'
import { useSnackbar } from 'notistack'

const DeleteBook = () => {
  const [loading,setLoading]=useState(false)
  const navigate=useNavigate();
  const {id}=useParams();
  const {enqueueSnackbar}=useSnackbar()

  const handleDeleteBook=()=>{
    setLoading(true);
    axios.
    delete(`/api/books/${id}`)
    .then((response)=>{
      setLoading(true)
      enqueueSnackbar(`Book deleted successfully`,{variant:`success`})
      navigate('/');
    })
    .catch((error)=>{
      setLoading(false)
      enqueueSnackbar(`Error`,{variant:`error`})
      console.log(error);
    })
  }
  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Delete Book</h1>
      {loading? <Spinner/>:''}
      <div className='flex flex-col items-center rounded-xl text-green-400'>
          <h1>Are You sure to delete it</h1>
          <button className='p-2 m-2 rounded-md text-white bg-red-700' onClick={handleDeleteBook}>
            Yes Sure
          </button>
      </div>
    </div>
  )
}

export default DeleteBook