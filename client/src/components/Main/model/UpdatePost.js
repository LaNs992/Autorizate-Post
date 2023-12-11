import axios from 'axios';

const NamrPer = localStorage.getItem('Name');
const Id = localStorage.getItem('Id');

function Update(formPost, idP) {
  const URLRAD = 'https://localhost:7189';
  const handleSubmit = async (e) => {
    var data = new Data();
    data.id = idP;
    data.email = NamrPer;
    data.description = document.getElementById('inpId').value;
    console.log(data);
    e.preventDefault();
    try {
      const url = URLRAD + '/Post/Update';
      const { data: res } = await axios.put(url, data);

      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
      }
    }
  };
  class Data {
    id;
    email;
    description;
  }

  const inp = document.createElement('input');
  formPost.appendChild(inp);
  inp.classList.add('inp');
  inp.setAttribute('placeholder', 'Изменить текст');
  inp.setAttribute('id', 'inpId');
  inp.setAttribute('onChange', null);
  inp.setAttribute('value', '');
  const Btn = document.createElement('button');
  formPost.appendChild(Btn);
  Btn.classList.add('BtnUp');
  Btn.innerText = 'Обновить';
  Btn.addEventListener('click', handleSubmit);
}

export default Update;
