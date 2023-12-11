import AddPost from './addPost';

import Update from './UpdatePost';
const mail = localStorage.getItem('Name');
var id = 1;

const ViewPost = async (e) => {
  fetch('https://lanskirill-001-site1.etempurl.com/Post/Read', {
    method: 'GET',
  })
    .then((res) => res.json())
    .then((parsed) => {
      console.log(parsed);
      parsed.map((p) => {
        const formPost = document.createElement('form');
        formPost.setAttribute('id', 'tableForm' + id);
        var formp = document.getElementById('Viewp');
        formp.appendChild(formPost);
        AddPost(p['id'], 'idD', formPost);
        AddPost(p['name'], 'nameD', formPost);
        AddPost(p['email'], 'emailD', formPost);
        AddPost(p['description'], 'desD', formPost);

        if (p['email'] == mail) {
          Update(formPost, p['id']);
        }
        id++;
      });
    })
    .catch((err) => console.error('error', err));
};

export default ViewPost;
