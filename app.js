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
};

const addNewEntry =  function addEntryToDB() {
  
}


// Calls
displayDB(toDoDB);