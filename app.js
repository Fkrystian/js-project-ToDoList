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

// Functions

const displayDB = function displayItemsFromDB(data) {
  itemsListContainer.innerHTML = '';
  data.forEach((item) => {
    let itemDisplay = 
    `
    <div class="to-do__item item__status--${item.status}" data-id="${item.id}">
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
    </div>
    </div>
    `;

    itemsListContainer.insertAdjacentHTML('afterbegin', itemDisplay);
  })

  deleteBtns = [...document.querySelectorAll('.item__delete-btn')];

  deleteBtns.forEach((item) => {
    item.addEventListener('click', function(e) {
      deleteItem(e.target);
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
}

// Calls
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