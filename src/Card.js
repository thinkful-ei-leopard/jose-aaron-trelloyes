import React from 'react';
import './Card.css';

export default function Card(props) {
  return (
    <div className='Card'>
      <button onClick={() => {
        props.oranges(props.cardid)
      }}
        type='button'
        cardid={props.id}
      >
        delete
      </button>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  )
}

