"use strict"
const itemsListContainer = document.querySelector(`.to-do__list`);
const inputField = document.getElementById(`new__entry`);
const inputBtn = document.querySelector(`.new__entry-btn`);
let toDoDB = []; 
let deleteBtns = [];

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

let entryTemplate = `
<div class="to-do__item" data-id="id">
<div class="item__check item__function-box-center"><input type="checkbox" name="" id="" class="item__check-checkbox"></div>
<div class="item__text">Text</div>
<div class="item__edit item__function-box-center">
  <button class="item__btn item__edit-btn">
  <span class="material-symbols-outlined item__fnc-btn-ico item__edit-btn-ico">edit</span>
</button>
</div>
<div class="item__delete item__function-box-center">
<button class="item__btn item__delete-btn">
  <span class="material-symbols-outlined item__fnc-btn-ico item__delete-btn-ico">delete</span>
</button>
`;

// Functions
const displayDB = function displayDB(dataDB) {
  itemsListContainer.textContent = '';

  dataDB.forEach((item) => {

    let itemDisplay = `
    <div class="to-do__item status--${item.status}" data-id="${item.id}">
    <div class="item__check item__function-box-center"><input type="checkbox" name="" id="" class="item__check-checkbox"></div>
    <div class="item__text">${item.text} ${item.id}</div>
    <div class="item__edit item__function-box-center">
      <button class="item__btn item__edit-btn">
      <span class="material-symbols-outlined item__fnc-btn-ico item__edit-btn-ico">edit</span>
    </button>
    </div>
    <div class="item__delete item__function-box-center">
    <button class="item__btn item__delete-btn">
      <span class="material-symbols-outlined item__fnc-btn-ico item__delete-btn-ico">delete</span>
    </button>
    `;

    itemsListContainer.insertAdjacentHTML('afterbegin', itemDisplay);    
  })
}

const addNewEntry = function addNewEntry(newData) {
  let newEntryId = toDoDB.length;
  let newEntryStatus = 'pending';
  let newEntryText = newData.value;
  let newObjectData = {
    id: newEntryId,
    status: newEntryStatus,
    text: newEntryText,
  }

  return newObjectData;
}

const updateDB = function updateDbWithNewEntry(newData) {
  toDoDB.push(newData);
  displayDB(toDoDB);

  deleteBtns = [...document.querySelectorAll('.item__delete-btn')];
  deleteBtns.forEach((item) => {
    item.addEventListener('click', function() {
      deleteItem(item);
    })
  })
}

const deleteItemDOM = function deleteItemFromDOM() {

}

const deleteItemDB = function deleteItemFromDB() {

}

const deleteItem = function deleteItemFromDomAndDb(btn) {
  console.log(`Delete`);
}

// Calls
displayDB(toDoDB);
deleteBtns = [...document.querySelectorAll('.item__delete-btn')];

inputBtn.addEventListener('click', function() {
  updateDB(addNewEntry(inputField));
});

deleteBtns.forEach((item) => {
  item.addEventListener('click', function() {
    deleteItem(item);
  })
})
