import { useState } from "react";
import { FaEye, FaFacebook, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { apiPost } from "../../utils/apiHelpers";
import styles from "./Signup.module.css";
import img1 from "../../assets/images/Rectangle 560.png";
import img2 from "../../assets/images/Rectangle 561.png";
import img3 from "../../assets/images/Rectangle 562.png";
import img4 from "../../assets/images/Rectangle 563.png";

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(true);
  const [data, setData] = useState({ 
    fullName: "", 
    email: "", 
    password: "" 
  });

  const toggleBtn = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await apiPost('/auth/register', data, {});
      console.log(response.data);
      if(response.status === 201) {
        navigate(`/signin`);
      } else {
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.signup}>
      <div>
        <img src={img4} className={styles.img4} alt='' />
        <img src={img3} className={styles.img3} alt='' />
      </div>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <h1 className={styles.title}>THE ROCK</h1>
        </div>
        <div className={styles.signupContainer}>
          <div className={styles.innerContainerContent}>
            <h2 className={styles.signupContent}>Sign Up</h2>
            <form className={styles.formGroup} onSubmit={handleSubmit}>
              <div className={styles.signupInput}>
                <label className={styles.label} htmlFor='full name'>
                  Full Name
                </label>
                <input
                  className={styles.input}
                  name='fullName'
                  type='text'
                  placeholder='John Lennon'
                  value={data.fullName}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.signupInput}>
                <label className={styles.label} htmlFor='email'>
                  Email
                </label>
                <input
                  className={styles.input}
                  name='email'
                  type='email'
                  placeholder='Johnlennon@gmail.com'
                  value={data.email}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.signupInput}>
                <label className={styles.label} htmlFor='password'>
                  Password
                </label>
                <div className={styles.passwordToggle}>
                  <input
                    type={showPassword ? "password" : "text"}
                    className={`${styles.input} ${styles.password}`}
                    id='password'
                    name='password'
                    placeholder='*****************'
                    value={data.password}
                    onChange={handleChange}
                  />
                  <FaEye
                    className={styles.togglebtn}
                    onClick={toggleBtn}
                  ></FaEye>
                </div>
              </div>
              <div className={styles.btns}>
                <button type='submit' className={styles.signupBtn}>
                  Sign Up
                </button>
              </div>
              <div className={styles.btn}>
                <button className={styles.signupBtn}>
                  <FaGoogle /> Google
                </button>
              </div>
              <div className={styles.btn}>
                <button className={styles.signupBtn}>
                  <FaFacebook /> Facebook
                </button>
              </div>
            </form>
            <div className={styles.instead}>
              <Link to='/signin' className={styles.link}>
                <p>Sign in instead </p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div>
        <img src={img2} className={styles.img2} alt='' />
        <img src={img1} className={styles.img1} alt='' />
      </div>
    </div>
  );
};

export default Signup;
