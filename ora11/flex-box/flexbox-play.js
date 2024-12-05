const container = document.getElementById("container");

function additem(event){
    const item = document.createElement("div");
    item.className = "item";
    item.innerHTML = container.children.length +1;
    container.appendChild(item);
}

function removeitem(event){
    while( container.firstChild){
        container.removeChild(container.firstChild);
    }
}

document.getElementById("add-item-button").addEventListener("click", additem);
document.getElementById("remove-item-button").addEventListener("click", removeitem);


function changeflexdirection(event){
    const value = event.currentTarget.value;
    console.log(`Flex direction is set to ${value}` );
    container.style.flexDirection = value;
}

document.getElementById("flex-direction-select").addEventListener("change", changeflexdirection);


function changejustifycontent(event){
    const value = event.currentTarget.value;
    console.log(`justify select is set to ${value}`);
    container.style.justifyContent = value;
}

document.getElementById("justify-content-select").addEventListener("change", changejustifycontent);


function changealignitem(event){
    const value = event.currentTarget.value;
    console.log(`align item is set to ${value}`);
    container.style.alignItems = value;
}

document.getElementById("align-item-select").addEventListener("change", changealignitem);