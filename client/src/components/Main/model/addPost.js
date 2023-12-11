function AddPost(headerText, ClassDiv, formPost) {
  //   const formPost = document.createElement('from');
  //   formPost.classList.add('tableForm');
  //   var formp = document.getElementById('Viewp');

  //formp.appendChild(formPost); // // добавляем элемент h1 на страницу в элемент body
  const header = document.createElement('div');
  header.appendChild(document.createTextNode(headerText)); // добавляем в элемент h1 текстовый узел
  formPost.appendChild(header); // // добавляем элемент h1 на страницу в элемент body
  header.classList.add(ClassDiv);

  const dec1 = document.createElement('div');
  formPost.appendChild(dec1);
  dec1.classList.add('form-left-decoration');
  const dec2 = document.createElement('div');
  formPost.appendChild(dec2);
  dec2.classList.add('form-right-decoration');
  const circle = document.createElement('div');
  formPost.appendChild(circle);
  circle.classList.add('circle');
}
export default AddPost;
