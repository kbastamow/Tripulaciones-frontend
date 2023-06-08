import React from 'react'
import NavBar from '../../components/navBar/NavBar'
import "./Community.scss"
const Community = () => {
  return (
      <>
    <div className='community-container'>
        <div className='btns'>
            <button>Mis contactos</button>
            <button>Mis grupos</button>
        </div>
        <h2>Gente que podrías conocer:</h2>
        
    </div>
    <NavBar/>
    </>
  )
}

export default Community