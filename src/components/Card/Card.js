import React from 'react';
import './Card.scss'

function Card(props) {

  


  return (
    <div className='Card' onClick={()=>{ props.getshowid(props.showinfo.id)}}>
        <img src={props.showinfo.image.original}/>
        <div className="rating">{props.showinfo.rating.average}</div>
        <h3>{props.showinfo.name}</h3>
    </div>
  );
}

export default Card;
