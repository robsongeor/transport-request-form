const addUnitButtonRow = document.querySelector(".button-row")
const addUnitButton = document.getElementById("add-new-unit");

const unitListElement = document.getElementById("unit-row-data-element")
const unitListContainer = document.getElementById("unit-list")

//Create new unit item to unit list
addUnitButton.addEventListener("click", () => {
    let newElement = unitListElement.cloneNode(true);
    let newDataValues = newElement.querySelectorAll("input", "select");

    newElement.childNodes.forEach(function (currentValue) {
        currentValue.nodeName === 'SELECT' ?
            currentValue.value = "Choose One" : currentValue.value = "";
        ;

    })

    unitListContainer.insertBefore(newElement, addUnitButtonRow);

})

