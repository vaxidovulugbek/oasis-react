import React from 'react'
import {v4 as uuidv4} from 'uuid';

function Chief_Card({ el }) {

  return (
    <>
      <li className="aquapark-chef-list__item" key={uuidv4()}>
        <img className="aquapark-chef-list__img " src={el?.img} alt="" />
        <div className="aquapark-chef-list__content">
          <h3>{el?.title}</h3>
          <h4>{el?.sub_title}</h4>
        </div>
      </li>
    </>
  )
}

export default Chief_Card