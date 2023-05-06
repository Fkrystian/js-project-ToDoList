"use strict"
const itemsListContainer = document.querySelector(`.to-do__list`);
const inputField = document.getElementById(`new__entry`);
const inputBtn = document.querySelector(`.new__entry-btn`);
let deleteBtns = [];
let editBtns = [];


const toDoDB = []; 


if(!toDoDB){
  const toDoDB = [
    {
      id: ``,
      status: ``,
      text: ``,
    }
  ];  
}

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
const getNewEntry = function getDataFromInputField(input){
  let newEntryData = input.value;
  let newId = toDoDB.length;
  let newStatus = 'pending';
  let newText = newEntryData;

  let newEntry = {
    id: newId,
    status: newStatus,
    text: newText,
  }  

  return newEntry;
}


const addNewEntry = function addNewEntryToDB(data){
  toDoDB.push(data);

  console.log(toDoDB);
}

const displayDB = function onLoadDisplayDB(db){
  db.forEach((item) => {
    entryTemplate = `
    <div class="to-do__item" data-id="${item.id}">
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
    `;
    
    itemsListContainer.insertAdjacentHTML('afterbegin', entryTemplate);
  })
}

const displayNewEntry = function displayNewEntry(entry){
  entryTemplate = `
  <div class="to-do__item" data-id="${entry.id}">
  <div class="item__check item__function-box-center"><input type="checkbox" name="" id="" class="item__check-checkbox"></div>
  <div class="item__text">${entry.text}</div>
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
  
  itemsListContainer.insertAdjacentHTML('afterbegin', entryTemplate);
}

// Calls
displayDB(toDoDB);
deleteBtns = [...document.querySelectorAll('.item__delete-btn')];
editBtns = [...document.querySelectorAll('.item__edit-btn')];


inputBtn.addEventListener('click', function() {
  addNewEntry(getNewEntry(inputField));  
  displayNewEntry(getNewEntry(inputField));
  deleteBtns = [...document.querySelectorAll('.item__delete-btn')];
  editBtns = [...document.querySelectorAll('.item__edit-btn')];
  console.log(deleteBtns);
console.log(editBtns);
})

// Change template to load check/unchecked input depending on status 
console.log(deleteBtns);
console.log(editBtns);