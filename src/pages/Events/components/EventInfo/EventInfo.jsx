import React from 'react'
import image30_1 from 'assets/imgs/png/image 30 (3).png'
import image30_2 from 'assets/imgs/png/image 31 (1).png'
import image30_3 from 'assets/imgs/png/image 32.png'
import frame from 'assets/imgs/png/Frame 168.png'

function EventInfo() {
  return (
    <>

      <section className="info-aquapark-content">
        <div className="info-aquapark">
          <h1 className="info-aquapark__title">«Мероприятии»</h1>
          <p className="info-aquapark__text">Мы подберём развлекательную программу, спортивные игры или различные квесты именно для вашего коллектива, учтём все пожелания и специфику вашей работы.В нашем арсенале огромное количество сценариев, главной задачей которых является объединение коллектива.С нашей помощью каждый Ваш сотрудник почувствует заботу компании, в которой он работает.</p>
          <img className="info-aquapark__wave-img" src={frame} alt="" />
        </div>
        <img className="info-aquapark__l-img" src={image30_1} alt="" />
        <img className="info-aquapark__r-img" src={image30_2} alt="" />
        <img className="info-aquapark__subimg desctop-dn" src={image30_3} alt="" />
      </section>

    </>
  )
}

export default EventInfo