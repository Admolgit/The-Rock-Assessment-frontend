import React from 'react';
import Sidenav from '../../controllers/Sidenav/Sidenav';
import Header from '../../controllers/Header/Header';
import styles from './Dashboard.module.css';
import { Outlet } from 'react-router-dom';

function Dashboard() {
  return (
      <div className={styles.headers}>
        <div className={styles.sidenav}>
          <Sidenav className={styles.sideChilds} />
        </div>
        <div className={styles.outlet}>
          <div className={styles.header}>
          <Header />
          </div>
          <div className={styles.mainOutlet}>
          <Outlet />
          </div>
        </div>
      </div>
  )
}

export default Dashboard