import { useState } from 'react';
import { Link, NavLink, useNavigate} from 'react-router-dom';
// import { FiGrid } from 'react-icons/fi';
// import { VscBellDot } from 'react-icons/vsc';
import { useDispatch } from 'react-redux'
import { AUTH_ACTIONS } from '../../store/AuthReducer'
import { MdLogout } from 'react-icons/md';
import styles from './Sidenav.module.css';

function Sidenav() {

  const [bg, setBg] = useState({
    dashboard: true,
    draw: false,
    play: false,
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({ type: AUTH_ACTIONS.logout });
    navigate('/signin');
  };
  
  return (
    <div className={styles.container}>
      <h1 className={styles.logoText}>THE ROCK</h1>
      <Link to='/dashboard/dashboards' className={styles.link}>
      <div
          className={`${bg.dashboard ? styles.secondStyle : styles.style}`}
          onClick={() =>
            setBg({
              ...bg,
              dashboard: true,
              draw: false,
              play: false,
            })
          }
        >
          Dashboard
        </div>
      </Link>
      <NavLink to='/dashboard/draw' className={styles.link}>
      <div
          className={`${bg.draw ? styles.secondStyle : styles.style}`}
          onClick={() =>
            setBg({
              ...bg,
              dashboard: false,
              draw: true,
              play: false,
            })
          }
        >
          View Draw
        </div>
      </NavLink>
      <NavLink to='/dashboard/play-draw' className={styles.link}>
      <div
          className={`${bg.play ? styles.secondStyle : styles.style}`}
          onClick={() =>
            setBg({
              ...bg,
              dashboard: false,
              draw: false,
              play: true,
            })
          }
        >
          Play Draw
        </div>
      </NavLink>
      <button className={styles.btn} onClick={handleLogout}>
        <MdLogout/>Logout
      </button>
    </div>
  )
}

export default Sidenav