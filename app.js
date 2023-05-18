"use strict"
const itemsListContainer = document.querySelector(`.to-do__list`);
const inputField = document.getElementById(`new__entry`);
const inputBtn = document.querySelector(`.new__entry-btn`);
let toDoDB = []; 
let deleteBtns = [];
let editBtns = [];

if(!toDoDB){
  let toDoDB = [
    {
      id: '',
      status: ``,
      text: ``,
    }
  ];  
}

// testing DB data
toDoDB = [
  {
    id: 0,
    status: `pending`,
    text: `Lorem ips `,
  },
  {
    id: 1,
    status: `pending`,
    text: `Lorem ips `,
  },
  {
    id: 2,
    status: `pending`,
    text: `Lorem ips `,
  },
  {
    id: 3,
    status: `pending`,
    text: `Lorem ips `,
  },
];  



// Functions

const displayDB = function displayItemsFromDB(data) {
  itemsListContainer.innerHTML = '';
  data.forEach((item) => {
    let itemDisplay = 
    `
    <div class="to-do__item item__status--${item.status}" data-id="${item.id}">
      <div class="item__check item__function-box-center"><input type="checkbox" name="" id="" class="item__check-checkbox"></div>
      <div class="item__text">${item.text}</div>
      <div class="item__edit item__function-box-center">
        <button class="item__btn item__edit-btn">
        <span class="material-symbols-outlined item__fnc-btn-ico item__edit-btn-ico">edit</span>
      </button>
    </div>
    <div class="item__delete item__function-box-center">
      <button class="item__btn item__delete-btn">
        <span class="material-symbols-outlined item__fnc-btn-ico item__delete-btn-ico">delete</span>
      </button>
    </div>
    </div>
    `;

    itemsListContainer.insertAdjacentHTML('afterbegin', itemDisplay);
  })

  deleteBtns = [...document.querySelectorAll('.item__delete-btn')];
  editBtns = [...document.querySelectorAll('.item__edit-btn')];
  
  deleteBtns.forEach((item) => {
    item.addEventListener('click', function(e) {
      deleteItem(e.target);
    })
  })

  editBtns.forEach((item) => {
    item.addEventListener('click', function(e) {
      editItem(e.target);
    })
  })
};

const getNewEntry =  function addEntryValues(input) {
  let newId = toDoDB.length;
  let newStatus = 'pending';
  let newText = input.value;

  let newEntryObject =  {
    id: newId,
    status: newStatus,
    text: newText,
  }

  return newEntryObject;
}

const updateDB = function updateDbWithNewEntry(newEntryData) {
  toDoDB.push(newEntryData);
  updateLocalStorage();
  getLocalStorage();
}

const deleteItem = function deleteItem(target){
  let item = target.closest('.to-do__item');
  let itemID = item.dataset.id;

  if(itemID !== -1){
    deleteItemDB(itemID);
  }

  displayDB(toDoDB);
}

const deleteItemDB = function deleteItemDB(id){
  toDoDB.splice(id, 1);
  updateLocalStorage();
  getLocalStorage();
}


const editItem = function editItemInDOM(target) {
  let item = target.closest('.to-do__item');
  let itemID = item.dataset.id;

  let itemTextDiv = item.querySelector('.item__text')
  let itemText = itemTextDiv.innerText;
  
  const inputElement = document.createElement('input');
  inputElement.setAttribute('type', 'text');
  inputElement.setAttribute('name', 'new__entry');
  inputElement.setAttribute('id', 'new__entry');
  inputElement.setAttribute('class', 'edit__entry-input');
  inputElement.value = itemText;



  if(itemID !== -1){
    item.replaceChild(inputElement, itemTextDiv);
    item.classList.add('edit-now');
  }

  if(item.classList.contains('edit-now')){
    target.addEventListener('click', function(){
      let newData = inputElement.value;
      toDoDB[itemID].text = newData;
      item.replaceChild(itemTextDiv, inputElement);
      displayDB(toDoDB);
      console.log(toDoDB);
    })
  } 

  updateLocalStorage();
  getLocalStorage();
}

// Local storage
const updateLocalStorage = function updateDataInlocalStorage(){
  localStorage.clear();
  let dataString = JSON.stringify(toDoDB);
  localStorage.setItem('data', dataString);
}

const getLocalStorage = function getDataFromLocalStorage(){
  let dataString = localStorage.getItem('data');

  if(!dataString){
    return;
  } else {
    let dataArray = JSON.parse(dataString);
    toDoDB = dataArray;
  }

  return toDoDB;
}

// Calls
updateLocalStorage();
getLocalStorage();
displayDB(toDoDB);

inputBtn.addEventListener('click', function() {
  updateDB(getNewEntry(inputField));
  displayDB(toDoDB);
})

deleteBtns.forEach((item) => {
  item.addEventListener('click', function(e) {
    deleteItem(e.target);
  })
})

editBtns.forEach((item) => {
  item.addEventListener('click', function(e) {
    editItem(e.target);
  })
})