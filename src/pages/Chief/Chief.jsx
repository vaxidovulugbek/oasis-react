import React from 'react'
import Beverages from 'pages/Chief/components/Beverages/Beverages'
import Menu from 'pages/Chief/components/Menu/Menu'
// images
import Chief_Content from './components/Chief/Chief'

function Chief() {
  return (
   <>
      <Chief_Content />
      <Menu />
      <Beverages />
   </>
  )
}

export default Chief