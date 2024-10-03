import React, { useState } from 'react'
import {
    MDBNavbar,
    MDBContainer,
    MDBNavbarBrand,
    MDBInputGroup,
    MDBBtn
  } from 'mdb-react-ui-kit';
  
function Header({searchmovie}) {
   
    const[moviename,setMoviename]=useState('')

  const handleSearchmovie=(e)=>{
    e.preventDefault();
    if(moviename){
        searchmovie(moviename)
    }
  }

  
  return (
    
    <div>

<MDBNavbar light bgColor='info'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#' className='fw-bold'>
          IMDb
        </MDBNavbarBrand>

        <MDBInputGroup tag="form" className='d-flex w-auto ms-auto'>
          <input className='form-control' onChange={(e)=>setMoviename(e.target.value)} placeholder='Search for movies' type='text' />
          <MDBBtn color='primary' onClick={handleSearchmovie}>Search</MDBBtn>
        </MDBInputGroup>
      </MDBContainer>
    </MDBNavbar>


    </div>
  )
}

export default Header
