import React from 'react'
import food from 'assets/imgs/png/food.png'
import image_33 from 'assets/imgs/png/image 33.png'
import backgraund from 'assets/imgs/png/bg1.png'
import backgraund2 from 'assets/imgs/png/bg3.png'
import backgraund3 from 'assets/imgs/png/bg4.png'
import {v4 as uuidv4} from 'uuid';

function Menu() {
  const data = [
    {
      title:"Пельмени из говядины",
      price:'60 000',
      img:food,
      isactive:true
    },
    {
      title:"Пельмени из говядины",
      price:'60 000',
      img:food,
      isactive:false
    },
    {
      title:"Пельмени из говядины",
      price:'60 000',
      img:food,
      isactive:false
    },
    {
      title:"Пельмени из говядины",
      price:'60 000',
      img:food,
      isactive:true
    },
    {
      title:"Пельмени из говядины",
      price:'60 000',
      img:food,
      isactive:true
    },
    {
      title:"Пельмени из говядины",
      price:'60 000',
      img:food,
      isactive:false
    },
    {
      title:"Пельмени из говядины",
      price:'60 000',
      img:food,
      isactive:false
    },
    {
      title:"Пельмени из говядины",
      price:'60 000',
      img:food,
      isactive:true
    },
  ]
  return (
    <>
      <section className="menu">
        <div className="chief-section-title">«Меню»</div>
        <img className='chief-menu-bg' src={backgraund} alt="" />
        <img className='chief-menu-subbg' src={backgraund2} alt="" />
        <img className='chief-menu-subbg2' src={backgraund3} alt="" />
        <ul className="menu__list p-0">
          {
            data.map((item) => {
              return <li className={item.isactive === true ? 
                "menu__item"
                : 
                "menu__subitem "
              } key={uuidv4()}>
              <img className="menu__item-img" src={item?.img} alt="" />
              <div className="d-flex flex-column">
                <h2 className="menu__item-title">{item?.title}</h2>
                <p className="menu__item-price">{item?.price} сум</p>
              </div>
            </li>
            })
          }
        </ul>
        <img className="menu__bg-img" src={image_33} alt="" />
      </section>
    </>
  )
}

export default Menu