// UNIT LIST HANDLER //
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
            this.setInputNames(this.unitRowHTML, "");
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
            this.setInputNames(newElement, this.units.length)
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
        resetInputValues: function (element) {
            element.childNodes.forEach(
                (node) => {
                    isNodeOfType(node, "INPUT") ? node.value = "" :
                        isNodeOfType(node, "SELECT") ? node.value = node.options[0].textContent : ""
                })
        },
        setInputNames: function (element, index) {
            element.childNodes.forEach(
                (node) => {
                    isNodeOfType(node, "INPUT") ? node.name += index :
                        isNodeOfType(node, "SELECT") ? node.name += index : ""
                })
        }

    };

    units.init();
})();


const formData = function() {
    const formData = new FormData(document.getElementById("form"))
    let obj = {};

    const fd = function() {
        for (const [key, value] of formData) {
            obj[key] = value;
        }

        console.table(obj)
    }

    return {fd};
}


function isNodeOfType(node, ...typeStrings) {
    return typeStrings.some(
        (typeString) => node.nodeName === typeString
    )
}