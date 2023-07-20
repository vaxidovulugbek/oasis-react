import React from 'react'
import beverage from '../../assets/imgs/png/Rectangle 11770.png'
function Beverages() {
  const dataBevarages = [
    {
      name:'Ice-tea',
      category:"Классический",
      price:"18 000",
      img:beverage
    },
    {
      name:'Ice-tea',
      category:"Классический",
      price:"18 000",
      img:beverage
    },
    {
      name:'Ice-tea',
      category:"Классический",
      price:"18 000",
      img:beverage
    },
    {
      name:'Ice-tea',
      category:"Классический",
      price:"18 000",
      img:beverage
    },
    {
      name:'Ice-tea',
      category:"Классический",
      price:"18 000",
      img:beverage
    },
    {
      name:'Ice-tea',
      category:"Классический",
      price:"18 000",
      img:beverage
    },
    {
      name:'Ice-tea',
      category:"Классический",
      price:"18 000",
      img:beverage
    },
    {
      name:'Ice-tea',
      category:"Классический",
      price:"18 000",
      img:beverage
    },
    {
      name:'Ice-tea',
      category:"Классический",
      price:"18 000",
      img:beverage
    },
    {
      name:'Ice-tea',
      category:"Классический",
      price:"18 000",
      img:beverage
    },
  ]
  return (
    <>
      <section className="beverages">
          <div className="chief-section-title">«Напитки»</div>
          <ul className="beverages__list w-100">
            {
              dataBevarages.map((item,index) => {
                return <li className="beverages__item col-sm-2" key={index}>
                <img src={item.img} alt />
                <div className="beverages__item-content">
                  <div>
                    <h2 className="beverages__item-title">{item.name}</h2>
                    <p className="beverages__item-category">{item.category}</p>
                  </div>
                  <p className="beverages__item-price m-0">{item.price} сум</p>
                </div>
              </li>
              })
            }
          </ul>
        </section>
    </>
  )
}

export default Beverages