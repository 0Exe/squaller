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

            let code = components[j.tagName.toLocaleLowerCase()];

            // remove all spacing except for spacing between text
            let sail = j.getAttribute("sail")

            // todo fix this formatting bc rn it only works for one space AFTER ; and : -- weird
            sail = sail.replaceAll(": ", ":");
            sail = sail.replaceAll("; ", ";");
            

            sail = sail.split(";")
            for (let sail_name of sail) {
                code = code.replace("${" + sail_name.split(":")[0] + "}", sail_name.split(":")[1]);
            }

            j.innerHTML = code;
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
    hideComponents();
}

window.onload = main();