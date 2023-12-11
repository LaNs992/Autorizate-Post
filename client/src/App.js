import { Route, Routes, Navigate } from 'react-router-dom';
import Main from './components/Main';
import Signup from './components/Singup';
import Login from './components/Login';
import CreatePost from './components/AddPost';
import UpdateUser from './components/UpdateUser';

function App() {
  // const user = localStorage.getItem("token");

  return (
    <Routes>
      <Route path="/User" exact element={<Main />} />
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/AddPost" exact element={<CreatePost />} />\
      <Route path="/UpdateUser" exact element={<UpdateUser />} />
      <Route path="/" element={<Navigate replace to="/login" />} />
    </Routes>
  );
}

export default App;
