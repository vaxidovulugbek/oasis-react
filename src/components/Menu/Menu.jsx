import React from 'react'
import food from '../../assets/imgs/png/food.png'
import image_33 from '../../assets/imgs/png/image 33.png'
function Menu() {
  return (
    <>
      <section className="menu">
        <div className="chief-section-title">«Меню»</div>
        <ul className="menu__list p-0">
          <li className="menu__item ">
            <img className="menu__item-img" src={food} alt />
            <div className="d-flex flex-column">
              <h2 className="menu__item-title">Острая лапша с морепродуктами</h2>
              <p className="menu__item-price">60 000 сум</p>
            </div>
          </li>
          <li className="menu__subitem ">
            <img className="menu__item-img" src={food} alt />
            <div className="d-flex flex-column">
              <h2 className="menu__item-title">Пельмени из говядины</h2>
              <p className="menu__item-price">60 000 сум</p>
            </div>
          </li>
          <li className="menu__subitem">
            <img className="menu__item-img" src={food} alt />
            <div className="d-flex flex-column">
              <h2 className="menu__item-title">Пельмени из говядины</h2>
              <p className="menu__item-price">60 000 сум</p>
            </div>
          </li>
          <li className="menu__item ">
            <img className="menu__item-img" src={food} alt />
            <div className="d-flex flex-column">
              <h2 className="menu__item-title">Острая лапша с морепродуктами</h2>
              <p className="menu__item-price">60 000 сум</p>
            </div>
          </li>
          <li className="menu__item">
            <img className="menu__item-img" src={food} alt />
            <div className="d-flex flex-column">
              <h2 className="menu__item-title">Острая лапша с морепродуктами</h2>
              <p className="menu__item-price">60 000 сум</p>
            </div>
          </li>
          <li className="menu__subitem ">
            <img className="menu__item-img" src={food} alt />
            <div className="d-flex flex-column">
              <h2 className="menu__item-title">Пельмени из говядины</h2>
              <p className="menu__item-price">60 000 сум</p>
            </div>
          </li>
          <li className="menu__subitem ">
            <img className="menu__item-img" src={food} alt />
            <div className="d-flex flex-column">
              <h2 className="menu__item-title">Пельмени из говядины</h2>
              <p className="menu__item-price">60 000 сум</p>
            </div>
          </li>
          <li className="menu__item ">
            <img className="menu__item-img" src={food} alt />
            <div className="d-flex flex-column">
              <h2 className="menu__item-title">Острая лапша с морепродуктами</h2>
              <p className="menu__item-price">60 000 сум</p>
            </div>
          </li>
        </ul>
        <img className="menu__bg-img" src={image_33} alt />
      </section>
    </>
  )
}

export default Menu