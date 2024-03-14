import {createBrowserRouter,RouterProvider } from "react-router-dom"
import React from "react"
import Main from "./components/Main"
import Home from "./pages/Home"
import ShowBook from "./pages/ShowBook"
import CreateBook from "./pages/CreateBook"
import EditBook from "./pages/EditBook"
import DeleteBook from "./pages/DeleteBook"
const Router=createBrowserRouter([
  {
    path:"",
    element:<Main/>,
    children:[
      {
        path:"/",
        element:<Home/>,
        children:[]
      },
      {
        path:"/Books/Details/:id",
        element:<ShowBook/>,
        children:[]
      },
      {
        path:"/Books/Create",
        element:<CreateBook/>,
        children:[]
      },
      {
        path:"/Books/Edit/:id",
        element:<EditBook/>,
        children:[]
      },
      {
        path:"/Books/Delete/:id",
        element:<DeleteBook/>,
        children:[]
      }
    ]
  }
])

export default function App() {
  return (
    <RouterProvider router={Router}/>
  )
}