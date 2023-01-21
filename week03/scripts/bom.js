

const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
  displayList(chapter);
});
button.addEventListener('click', () => {
  if (input.value != '') {
    displayList(input.value);
    chaptersArray.push(input.value);
    setChapterList();
    input.value = '';
    input.focus();
  }
});
function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  setChapterList();
}

function setChapterList() {
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function displayList(item) {
  let li = document.createElement('li');
  let deletebutton = document.createElement('button');
  li.textContent = item; // note the use of the item parameter and then delete this comment
  deletebutton.textContent = '❌';
  deletebutton.classList.add('delete'); // this references the CSS rule .delete{width:fit-content;} to size the delete button
  li.append(deletebutton);
  list.append(li);
  deletebutton.addEventListener('click', function () {
    list.removeChild(li);
    deleteChapter(li.textContent); // note this new function that is needed to remove the chapter from the array and localStorage.
    input.focus();
  });
}

button.addEventListener('click', () => {
    if (input.value != '') {
      const li = document.createElement('li');
      const deleteButton = document.createElement('button');
      li.textContent = input.value;
      deleteButton.textContent = '❌';
      li.append(deleteButton);
      list.append(li);
      deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        input.focus();
      });
      input.value = '';
      input.focus();
    } else {
      alert("Please enter a book and chapter");
      input.focus();
    }
  });
  
  
  
  