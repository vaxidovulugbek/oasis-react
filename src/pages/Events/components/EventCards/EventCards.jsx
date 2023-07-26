import React, { useState } from 'react'
import image_card from 'assets/imgs/png/Снимок экрана 2023-06-28 в 01.01 1.png'
import arrow from 'assets/imgs/svg/arrow_back_ios_new.svg'
import {v4 as uuidv4} from 'uuid';
import InputMask from 'react-input-mask';
import backgraund1 from 'assets/imgs/png/bg2.png'
import backgraund2 from 'assets/imgs/png/bg1.png'
import backgraund4 from 'assets/imgs/png/bg4.png'

function Event_Cards() {

  const [phone, setPhone] = useState("");
  const handleInput = ({ target: { value } }) => setPhone(value);

  const data = [
    {
      img:image_card,
      title:"«Пираты Карибского моря»",
      text:"Вперёд на поиски таинственно сокровищ",
      date:"30 июня 10:40"
    },
    {
      img:image_card,
      title:"«Пираты Карибского моря»",
      text:"Вперёд на поиски таинственно сокровищ",
      date:"30 июня 10:40"
    },
    {
      img:image_card,
      title:"«Пираты Карибского моря»",
      text:"Вперёд на поиски таинственно сокровищ",
      date:"30 июня 10:40"
    },
    {
      img:image_card,
      title:"«Пираты Карибского моря»",
      text:"Вперёд на поиски таинственно сокровищ",
      date:"30 июня 10:40"
    },
    {
      img:image_card,
      title:"«Пираты Карибского моря»",
      text:"Вперёд на поиски таинственно сокровищ",
      date:"30 июня 10:40"
    },
    {
      img:image_card,
      title:"«Пираты Карибского моря»",
      text:"Вперёд на поиски таинственно сокровищ",
      date:"30 июня 10:40"
    },
    {
      img:image_card,
      title:"«Пираты Карибского моря»",
      text:"Вперёд на поиски таинственно сокровищ",
      date:"30 июня 10:40"
    },
    {
      img:image_card,
      title:"«Пираты Карибского моря»",
      text:"Вперёд на поиски таинственно сокровищ",
      date:"30 июня 10:40"
    },
    {
      img:image_card,
      title:"«Пираты Карибского моря»",
      text:"Вперёд на поиски таинственно сокровищ",
      date:"30 июня 10:40"
    },
  ]
  return (
    <>
      <section className='events-section'>
        <img className='events-section__bg' src={backgraund1} alt="" />
        <img className='events-section__bg2' src={backgraund2} alt="" />
        <img className='events-section__bg3' src={backgraund1} alt="" />
        <img className='events-section__bg4' src={backgraund4} alt="" />
        <img className='events-section__bg5' src={backgraund1} alt="" />
        <ul className="info-aquapark__list w-100">
          {
            data.map((el,i) => {
              return  <li className="info-aquapark__item" key={uuidv4()}>
              <div>
                <img className="info-aquapark__event-img w-100" src={el?.img} alt="" />
                <h2 className="info-aquapark__event-title">{el?.title}</h2>
                <p className="info-aquapark__event-text">{el?.text}</p>
              </div>
              <div className="info-aquapark__event-info">
                <p className="info-aquapark__event-date">{el?.date}</p>
                <div className="d-flex align-items-center justify-content-center gap-3">
                    <button data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" className="info-aquapark__bron">Бронировать</button>
                    <button data-bs-target="#exampleModalToggle" data-bs-toggle="modal" className="info-aquapark__more">Подробнее <img src={arrow} alt="" /></button>
                </div>
              </div>
            </li>
            })
          }
         
        </ul>
      </section>

{/* START OF MODALS */}
    <div className="modall-bron">
      <div className="modal fade" id="exampleModalToggle2" aria-labelledby="exampleModalToggleLabel" tabIndex={-1} aria-hidden="true" style={{display: 'none'}}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body modal-bron-body">
              <img className="modall-bron__img" src="https://picsum.photos/id/48/618/584" alt="" />
              <div className="d-flex flex-column modall-bron__content">
                <h2 className="modall-bron__title">«Пираты Карибского моря»</h2>
                <div className="mb-2">
                  <p className="modall-bron__subtext">В программу входит:</p>
                  <p className="modall-bron__text">Часовая анимационная программа
                    (Программа включает 4 аниматора: 3 актёра и 1 аква-няня)</p>
                </div>
                <div>
                  <p className="modall-bron__subtext">3 часа в аквазоне:</p>
                  <p className="modall-bron__text">- Бумажное шоу</p>
                  <p className="modall-bron__text">- Праздничный банкет</p>
                  <p className="modall-bron__text">- Отдых в аквазоне/детской игровой зоне</p>
                  <p className="modall-bron__text">- Шарики- Фотосессия</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="modall-more">
      <div className="modal fade" id="exampleModalToggle" aria-labelledby="exampleModalToggleLabel" tabIndex={-1} aria-hidden="true" style={{display: 'none'}}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <form className="modal-body">
              <p className="aquapark-event-title">Оставьте заявку на бронирование</p>
              <p className="aquapark-event-text">мы с ввяжемся с вами в ближайшее время</p>
              <fieldset className="d-flex flex-column">
                <input className="aquapark-event-input mb-2" type="text" placeholder="Ваша имя" />
                <div className='aquapark-event-input'>
                  <span>+998 </span>
                  <InputMask 
                    placeholder='(__)___ __ __'
                    mask='(99) 999 99 99' 
                    value={phone} 
                    onChange={handleInput}>
                  </InputMask>
                </div>
              </fieldset>
              <button className="aquapark-event-btn" type="submit">Забронировать</button>
            </form>
          </div>
        </div>
      </div>
    </div>

{/* END OF MODALS */}
    </>
  )
}

export default Event_Cards