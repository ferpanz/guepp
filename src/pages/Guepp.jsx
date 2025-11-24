import React from 'react'
import CardNaranja from '../components/CardNaranja'
import CardList from '../components/CardList'
import HeaderGuepp from '../components/HeaderGuepp'
import BtnInfo from '../subcomponents/BtnInfo'
import CardProfesional from '../components/CardProfesional'

const Guepp = () => {
  return (
    <>
      <HeaderGuepp />
      <CardList />
      <CardNaranja />
      <CardProfesional />
      
      <BtnInfo />
      <footer className='container text-center mt-5 mb-5 '>
        <hr />
        <a className='link-opacity-100' href="https://ferpanz.github.io/" target='_blanck'>by Fernán Barberón</a>
      </footer>
    </>
  )
}

export default Guepp
