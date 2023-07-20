import React from 'react'
import image_card from '../../assets/imgs/png/Снимок экрана 2023-06-28 в 01.01 1.png'
import arrow from '../../assets/imgs/svg/arrow_back_ios_new.svg'
function Event_Cards() {
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
  ]
  return (
    <>
      <section>
        <ul className="info-aquapark__list w-100">
          {
            data.map((el,i) => {
              return  <li className="info-aquapark__item" key={i}>
              <div>
                <img className="info-aquapark__event-img w-100" src={el.img} alt />
                <h2 className="info-aquapark__event-title">{el.title}</h2>
                <p className="info-aquapark__event-text">{el.text}</p>
              </div>
              <div className="info-aquapark__event-info">
                <p className="info-aquapark__event-date">{el.date}</p>
                <div className="d-flex align-items-center justify-content-center gap-3">
                    <button data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" class="info-aquapark__bron">Бронировать</button>
                </div>
              </div>
            </li>
            })
          }
         
        </ul>
      </section>


    <div className="modall-bron">
    <div className="modal fade" id="exampleModalToggle2" aria-labelledby="exampleModalToggleLabel" tabIndex={-1} aria-hidden="true" style={{display: 'none'}}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body modal-bron-body">
            <img className="modall-bron__img" src="https://picsum.photos/id/48/618/584" alt />
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

    </>
  )
}

export default Event_Cards