import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const Login = () => {
  const [data, setData] = useState({ Email: '', Password: '' });

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  const URLRAD = 'https://lanskirill-001-site1.etempurl.com';
  var token = '';
  var NamePer = '';
  var IdUser = '';
  const handleSubmit = async (e) => {
    fetch(
      URLRAD + '/GetToken?Email=' + data.Email + '&Password=' + data.Password,
      {
        method: 'POST',
      }
    )
      .then((res) => res.json())
      .then((parsed) => {
        console.log(parsed);
        token = parsed['access_token'];
        NamePer = parsed['username'];
        IdUser = parsed['id'];
        localStorage.setItem('JWT', token);
        localStorage.setItem('Name', NamePer);
        localStorage.setItem('Id', IdUser);

        if (token != null) {
          window.location = '/User';
        } else {
          window.confirm('Неправально введён пароль или логин');
        }
      })
      .catch((err) => console.error('error', err));
  };

  return (
    <div className={styles.login_container}>
      <div className={styles.login_form_container}>
        <div className={styles.left}>
          <form className={styles.form_container}>
            <h1>Login to Your Account{token}</h1>
            <input
              type="email"
              placeholder="Email"
              name="Email"
              onChange={handleChange}
              value={data.Email}
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              name="Password"
              onChange={handleChange}
              value={data.Password}
              required
              className={styles.input}
            />
          </form>
          <button
            name="signIn"
            type="submit"
            onClick={handleSubmit}
            className={styles.green_btn}
          >
            Sing In
          </button>
        </div>
        <div className={styles.right}>
          <h1>New Here ?</h1>
          <Link to="/signup">
            <button type="button" className={styles.white_btn}>
              Sing Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
