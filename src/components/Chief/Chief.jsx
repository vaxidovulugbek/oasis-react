import React from 'react'
import image30_1 from '../../assets/imgs/png/image 30 (1).png'
import image30_2 from '../../assets/imgs/png/image 32.png'
import frame from '../../assets/imgs/png/Frame 168.png'
import image30_3 from '../../assets/imgs/png/Images.png'
import backgraund from '../../assets/imgs/png/bg2.png'
import Chief_Card from './ChiefCard'
import {v4 as uuidv4} from 'uuid';

function Chief_Content() {
  const data = [
    {
      img:image30_3,
      title:"Дмитрий Ветлин",
      sub_title:"Шеф-повар",
    },
    {
      img:image30_3,
      title:"Дмитрий Ветлин",
      sub_title:"Шеф-повар",
    },
    {
      img:image30_3,
      title:"Дмитрий Ветлин",
      sub_title:"Шеф-повар",
    },
    {
      img:image30_3,
      title:"Дмитрий Ветлин",
      sub_title:"Шеф-повар",
    },
  ]
  return (
    <>
      <section className="info-aquapark-content">
        <div className="info-aquapark">
            <h1 className="info-aquapark__title">«Кухня»</h1>
            <p className="info-aquapark__text">В аквапарке очень хорошая кухня, шеф-повар каждый день выходит в кухню и проверяет качество еды и даже сам садится и обедает, а это не часто увидишь в парках. Есть рай блюдо на любой вкус и холодные напитки.</p>
            <img className="info-aquapark__wave-img" src={frame} alt="" />
        </div>
        <img className="info-aquapark__img" src={image30_1} alt="" />
        <img className="info-aquapark__subimg" src={image30_2} alt="" />
        <img className="info-aquapark__bg" src={backgraund} alt="" />

        <ul className="d-flex aquapark-chef-list">

          {
            data.map((el) => {
              return <Chief_Card el={el} key={uuidv4()}/>
            })
          }
           
        </ul>
      </section>

    </>
  )
}

export default Chief_Content