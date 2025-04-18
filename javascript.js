const addUnitButtonRow = document.querySelector(".button-row")
const addUnitButton = document.getElementById("add-new-unit");

const unitListElement = document.getElementById("unit-row-data-element")
const unitListContainer = document.getElementById("unit-list")

let deleteArr = [];

//Create new unit item to unit list

addUnitButton.addEventListener("click", () => {
    let newElement = unitListElement.cloneNode(true);

    newElement.childNodes.forEach(function (currentValue) {
        currentValue.nodeName === 'SELECT' ?
            currentValue.value = "Choose One" : currentValue.value = "";
        ;

    })

  
    //Delete button
    let deleteButton = newElement.querySelector("button")
    deleteButton.addEventListener("dblclick", () => newElement.remove())

    unitListContainer.insertBefore(newElement, addUnitButtonRow);

   
   
})

//Delete this unit item

