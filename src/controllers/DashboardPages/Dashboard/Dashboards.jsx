import React from 'react';
import style from './Dashboards.module.css';
import { FaDollarSign } from 'react-icons/fa';
import { BsArrowDownRight } from 'react-icons/bs';
import NewDraws from '../NewDraws/NewDraws';

function Dashboards() {
  return (
    <div className={style.container}>
      <div className={style.DashContainer}>
        <div className={style.DashCard}>
          <div className={style.DashCardcontent}>
            <FaDollarSign className={style.DashIcon} />
          </div>
          <div className={style.DashCardcontents}>
            <h3 className={style.tms}>Total money spent</h3>
            <p className={style.ms}>$ 148,000</p>
          </div>
        </div>
        <div className={style.DashCard}>
          <div className={style.DashCardcontent}>
            <FaDollarSign className={style.DashIcon} />
          </div>
          <div className={style.DashCardcontents}>
            <h3 className={style.tms}>Total money won</h3>
            <p className={style.ms}>$ 1,000,000</p>
          </div>
        </div>
        <div className={style.DashCard}>
          <div className={style.DashCardcontent}>
            <BsArrowDownRight className={style.DashIcon} />
          </div>
          <div className={style.DashCardcontents}>
            <h3 className={style.tms}>Total raffle draw</h3>
            <p className={style.ms}>10,000</p>
          </div>
        </div>
      </div>
      <NewDraws />
    </div>
  )
}

export default Dashboards