import React from 'react';
import style from './Draw.module.css';
import Search from '../Search/Search';
import ViewDraw from '../ViewDraw/ViewDraw';

function Draw() {
  return (
    <div className={style.container}>
      <Search />
      <ViewDraw />
    </div>
  )
}

export default Draw