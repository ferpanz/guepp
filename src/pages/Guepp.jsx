import React from 'react'
import CardNaranja from '../components/CardNaranja'
import CardList from '../components/CardList'
import HeaderGuepp from '../components/HeaderGuepp'
import BtnInfo from '../subcomponents/BtnInfo'

const Guepp = () => {
  return (
    <>
      <HeaderGuepp />
      <CardList />
      <CardNaranja />
      
      <BtnInfo />
    </>
  )
}

export default Guepp
