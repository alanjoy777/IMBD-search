

import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Search from './components/Search'

function App() {
   
  const[movieName,setMovieName]=useState('')


    const handlesearch=(movie)=>{
      setMovieName(movie)
    }

  return (
    <>
    <Header searchmovie={handlesearch}/>
  <Search movieName={movieName}/>
     <Footer/> 
    </>
  )
}

export default App
