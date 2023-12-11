import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
const NamrPer = localStorage.getItem('Name');
const Id = localStorage.getItem('Id');
const UpdateUser = () => {
  const [data, setData] = useState({
    Name: '',
    Email: '',
    Password: '',
    Id: Id,
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  const URLRAD = 'https://lanskirill-001-site1.etempurl.com/Post/Read';
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = URLRAD + '/User/Update';
      const { data: res } = await axios.put(url, data);
      navigate('/User');
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className={styles.signup_container}>
      <div className={styles.signup_form_container}>
        <div className={styles.left}>
          <h1>Назад?</h1>
          <Link to="/User">
            <button type="button" className={styles.white_btn}>
              Back
            </button>
          </Link>
        </div>
        <div className={styles.right}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Ваш профиль {NamrPer}</h1>

            <input
              type="text"
              placeholder="Name"
              name="Name"
              onChange={handleChange}
              value={data.Name}
              required
              className={styles.input}
            />
            <input
              type="email"
              placeholder="Email"
              name="Email"
              onChange={handleChange}
              value={NamrPer}
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

            {error && <div className={styles.error_msg}>{error}</div>}
            <button type="submit" className={styles.green_btn}>
              Обновить
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
