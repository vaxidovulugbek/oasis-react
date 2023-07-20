import React from 'react'
import Beverages from '../components/Beverages/Beverages'
import Chief_Card from '../components/Chief/Chief-Card'
import Menu from '../components/Menu/Menu'
// images
import image30_1 from '../assets/imgs/png/image 30 (1).png'
import image30_2 from '../assets/imgs/png/image 32.png'
import frame from '../assets/imgs/png/Frame 168.png'

function Chief() {
  return (
   <>
      <div className="info-aquapark">
          <h1 className="info-aquapark__title">«Кухня»</h1>
          <p className="info-aquapark__text">В аквапарке очень хорошая кухня, шеф-повар каждый день выходит в кухню и проверяет качество еды и даже сам садится и обедает, а это не часто увидишь в парках. Есть рай блюдо на любой вкус и холодные напитки.</p>
          <img className="info-aquapark__wave-img" src={frame} alt />
      </div>
      <img className="info-aquapark__img" src={image30_1} alt />
      <img className="info-aquapark__subimg" src={image30_2} alt />
      <Chief_Card />
      <Menu />
      <Beverages />
   </>
  )
}

export default Chief