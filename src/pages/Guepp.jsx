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
    </>
  )
}

export default Guepp
