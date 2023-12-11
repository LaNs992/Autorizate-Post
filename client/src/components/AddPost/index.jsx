import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import styles from './../AddPost/style.css';
const NamrPer = localStorage.getItem('Name');

const CreatePost = () => {
  const [data, setData] = useState({
    Email: '',
    description: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    data.Email = NamrPer;
    setData({ ...data, [input.name]: input.value });
  };
  const URLRAD = 'https://lanskirill-001-site1.etempurl.com';
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = URLRAD + '/Post/Create';
      const { data: res } = await axios.post(url, data);
      navigate('/User');
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
      <form className={styles.form_container} onSubmit={handleSubmit}>
        <div class="form-left-decoration"></div>
        <div class="form-right-decoration"></div>
        <div class="circle"></div>
        <h1>Создание вашего поста</h1>
        <input
          type="description"
          placeholder="Что хотите написать!) "
          name="description"
          onChange={handleChange}
          value={data.description}
          required
          className={styles.input}
        />
        {error && <div className={styles.error_msg}>{error}</div>}
        <span>
          <button type="submit" class="submit-button">
            Create Post
          </button>
          <Link to="/User">
            <button type="button" class="submit-button">
              Back
            </button>
          </Link>
        </span>
      </form>
    </div>
  );
};

export default CreatePost;
