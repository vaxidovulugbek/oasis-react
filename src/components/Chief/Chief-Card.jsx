import React from 'react'
import image30_3 from '../../assets/imgs/png/Images.png'
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