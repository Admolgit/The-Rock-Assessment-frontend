import { useState } from 'react';
import { FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AUTH_ACTIONS } from '../../store/AuthReducer';
import { useDispatch } from 'react-redux';
import { apiPost } from '../../utils/apiHelpers';
import styles from './Signin.module.css';
import img1 from "../../assets/images/Rectangle 560.png";
import img2 from "../../assets/images/Rectangle 561.png";
import img3 from "../../assets/images/Rectangle 562.png";
import img4 from "../../assets/images/Rectangle 563.png";

const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(true);
  const [data, setData] = useState({ email: '', password: '' });

  const toggleBtn = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await apiPost('/auth/login', data, {});
      dispatch( AUTH_ACTIONS.login(response?.data) );
      if(response.status === 200) {
        navigate(`/dashboard/dashboards`);
      } else {
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.signin}>
      <div>
        <img src={img4} className={styles.img4} alt="" />
        <img src={img3} className={styles.img3} alt="" />
      </div>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <h1 className={styles.title}>THE ROCK</h1>
        </div>
        <div className={styles.signinContainer}>
          <div className={styles.innerContainerContent}>
          <h2 className={styles.signinContent}>Sign In</h2>
          <form className={styles.formGroup} onSubmit={handleSubmit}>
            <div className={styles.signinInput}>
              <label className={styles.label} htmlFor='email'>
                Email
              </label>
              <input
                className={styles.input}
                name='email'
                type='email'
                placeholder='Email'
                value={data.email}
                onChange={handleChange}
              />
            </div>
            <div className={styles.signinInput}>
              <label className={styles.label} htmlFor='password'>
                Password
              </label>
              <div className={styles.passwordToggle}>
                <input
                  type={showPassword ? "password" : "text"}
                  className={`${styles.input} ${styles.password}`}
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={data.password}
                  onChange={handleChange}
                />
                  <FaEye className={styles.togglebtn} onClick={toggleBtn}></FaEye>
              </div>
            </div>
            <div className={styles.forget}>
              <p>Forgot Password?</p>
            </div>
            <div className={styles.btns}>
              <button type="submit" className={styles.signinBtn}>
                Sign In
              </button>
            </div>
          </form>
          </div>
        </div>
        <div className={styles.instead}>
            <Link className={styles.link} to="/">
              <p>Sign up instead </p>
            </Link>
          </div>
      </div>
      <div>
        <img src={img2} className={styles.img2} alt="" />
        <img src={img1} className={styles.img1} alt="" />
      </div>
    </div>
  );
};

export default Signin;
