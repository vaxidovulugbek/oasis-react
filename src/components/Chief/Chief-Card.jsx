import React from 'react'
import './Chief.scss'
import image30_1 from '../../assets/imgs/png/image 30 (1).png'
import image30_2 from '../../assets/imgs/png/image 32.png'
import image30_3 from '../../assets/imgs/png/Images.png'
import frame from '../../assets/imgs/png/Frame 168.png'
function Chief_Card() {
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
          <img className="info-aquapark__wave-img" src={frame} alt />
        </div>
        <img className="info-aquapark__img" src={image30_1} alt />
        <img className="info-aquapark__subimg" src={image30_2} alt />
        <ul className="d-flex aquapark-chef-list">

          {
            data.map((el,i) => {
              return <li className="aquapark-chef-list__item">
              <img className="aquapark-chef-list__img " src={el.img} alt />
              <div className="aquapark-chef-list__content">
                <h3>{el.title}</h3>
                <h4>{el.sub_title}</h4>
              </div>
            </li>
            })
          }
           
        </ul>
      </section>

    </>
  )
}

export default Chief_Card