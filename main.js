let form = document.querySelector('#addForm');
let itemList = document.querySelector('#items');
let filter = document.querySelector('#filter');

//form submit event
form.addEventListener('submit', addItem);

//delete event
itemList.addEventListener('click', removeItem);

//filter event
filter.addEventListener('keyup', filterItems);


//add item
function addItem(e){
    e.preventDefault();

    //get input value
    let newItem = document.querySelector('#item').value;

    //create new li element
    let li = document.createElement('li');
    //add class
    li.className = 'list-group-items';
    //add textNode with input value
    li.appendChild(document.createTextNode(newItem));

    //create del button element
    let delbtn = document.createElement('button');

    //add button class
    delbtn.className = 'deletebtn';

    //append textNode
    delbtn.appendChild(document.createTextNode('X'));

    //append button to li
    li.appendChild(delbtn);

    //append li to list
    itemList.appendChild(li);
}

//remove item
function removeItem(e){
    e.preventDefault();
    if(e.target.classList.contains('deletebtn')){
        if(confirm('Are you sure?')){
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// filter items
function filterItems(e){
    //convert to lowercase
    let text = e.target.value.toLowerCase();
    //get list
    let items = itemList.getElementsByTagName('li');
    //convert to array
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    });
}
