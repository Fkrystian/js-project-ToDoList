"use strict"
const itemsListContainer = document.querySelector(`.to-do__list`);
const inputField = document.getElementById(`new__entry`);
const inputBtn = document.querySelector(`.new__entry-btn`);

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

// Functions
const getNewEntry = function getDataFromInputField(input){
  let newEntryData = input.value;

  return newEntryData;
}


const addNewEntry = function addNewEntryToDB(data){
  let newId = toDoDB.length + 1;
  let newStatus = 'pending';
  let newText = data;

  let newEntry = {
    id: newId,
    status: newStatus,
    text: newText,
  }  

  toDoDB.push(newEntry);

  console.log(toDoDB);
}

// Calls
inputBtn.addEventListener('click', function() {
  addNewEntry(getNewEntry(inputField));  
})