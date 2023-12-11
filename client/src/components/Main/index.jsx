import styles from './styleMain.css';
import ViewPost from './model/ViewPost';
import { Link } from 'react-router-dom';

const NamrPer = localStorage.getItem('Name');

window.onload = ViewPost;

const Main = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location = '/login';
  };

  // добавляем в элемент h1 текстовый узел
  return (
    <div className={styles.main_container}>
      <header>
        <div class="wrap-logo">
          <a href="#logo" class="logo">
            PPNews
          </a>
        </div>
        <nav>
          <Link to="/AddPost">
            <button class="button-1">Добавить пост</button>
          </Link>
          <Link to="/UpdateUser">
            <button class="button-1" onClick={ViewPost}>
              {NamrPer}
            </button>
          </Link>
          <button class="button-1" onClick={handleLogout}>
            Logout
          </button>
        </nav>
      </header>

      <div>
        <div id="Viewp" class="postst"></div>
      </div>
    </div>
  );
};

export default Main;
