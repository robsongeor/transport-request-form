(function () {
    let units = {
        units: [],

        init: function () {
            this.cacheDom();
            this.bindEvents();
            //Add first element
            this.initDefaultRow();

        },
        initDefaultRow() {
            this.units.push(this.unitRowHTML);
            this.bindDeleteButton();
        },
        cacheDom: function () {
            this.unitRowHTML = document.getElementById("unit-row-data-element");
            this.addButton = document.getElementById("add-new-unit");
            this.unitListContainer = document.getElementById("unit-list");
        },
        bindEvents: function () {
            this.addButton.addEventListener("click", this.addUnit.bind(this));
        },
        addUnit: function () {
            let newElement = this.unitRowHTML.cloneNode(true)
            
            this.units.push(newElement);
            this.resetInputValues(newElement);
            this.bindDeleteButton();
            this.render();
        },
        deleteUnit: function (e) {
            //Filter out divs that arent unit input divs
            let rowsOnly = [...this.unitListContainer.children].filter(
                (element) => element.classList.contains("unit-row")
            )
            let index = rowsOnly.indexOf(e.target.parentElement)

            //Remove from array
            this.units.splice(index, 1);

            //Remove from dom
            this.unitListContainer.removeChild(e.target.parentElement)

        },
        render: function () {
            this.unitListContainer.insertBefore(
                this.units[this.units.length - 1],
                this.unitListContainer.lastChild.previousSibling
            )
        },
        bindDeleteButton: function () {
            let deleteButton = this.units[this.units.length - 1].querySelector("button");
            deleteButton.addEventListener("dblclick", this.deleteUnit.bind(this))
        },
        resetInputValues: function (element){
            element.childNodes.forEach(
                (node) => {
                    isNodeOfType(node, "INPUT") ? node.value = "" :
                    isNodeOfType(node, "SELECT") ?  node.value = node.options[0].textContent: ""
                })
        }

    };

    units.init();
})();

function isNodeOfType(node, ...typeStrings){
    return typeStrings.some(
        (typeString) => node.nodeName === typeString
    )
}