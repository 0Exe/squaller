// js module -- defer
let components = {};

function createComponents() {
    let createdComponents = document.querySelectorAll("squallerComponent");
    
    for (let i of createdComponents) {
        let name = i.getAttribute("name").toLocaleLowerCase();
        components[name] = i.innerHTML;
    }
}

function loadComponents() {

    for (let i in components) {
        let obj = document.getElementsByTagName(i);
        for (let j of obj) {
            j.innerHTML = components[j.tagName.toLocaleLowerCase()];
        }
    }
}

function hideComponents() {
    for (let i of document.getElementsByTagName("squallerComponent")) {
        i.style.display = "none";
    }
}

function main() {
    createComponents();
    loadComponents();
    hideComponents()
}

window.onload = main();