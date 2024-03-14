import React from 'react'

import { Outlet } from 'react-router-dom'
import {SnackbarProvider} from 'notistack'

const Main = () => {
  return (
    <>
        <SnackbarProvider>
         <Outlet/>
        </SnackbarProvider>
    </>
  )
}

export default Main
