import React from 'react';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { RiMailUnreadLine, RiCheckboxBlankCircleFill } from 'react-icons/ri';
import styles from './Header.module.css';
import isAuthenticated from '../../store/Auth';

function Header() {
  
  const user = isAuthenticated();

  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerContents}>
          <h1 className={styles.headerText}>Dashboard</h1>
          <p className={styles.headerPara}>Hello {user.fullName}</p>
        </div>
        <div className={styles.headerContent}>
          <div className={styles.notification}>
            <RiMailUnreadLine className={styles.icons} />
          </div>
          <div className={styles.notification}>
            <IoMdNotificationsOutline className={styles.icons} />
          </div>
          <div className={styles.notification}>
            <RiCheckboxBlankCircleFill className={styles.icons} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header