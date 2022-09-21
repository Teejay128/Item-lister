let body = document.querySelector('body')
let form = document.querySelector('#addForm');
let itemList = document.querySelector('#items');
let filter = document.querySelector('#filter');
let header = document.querySelector('header');

//form submit event
form.addEventListener('submit', addItem);

//delete event
itemList.addEventListener('click', removeItem);

//filter event
filter.addEventListener('keyup', filterItems);


//add item
function addItem(e){
    e.preventDefault();
    let newItem = document.querySelector('#item');

    if(newItem.value == ''){
        // ERROR MESSAGE
    } else {
        //create new li element
        let li = document.createElement('li');
        //add class
        li.className = 'list-group-items';
        //add textNode with input value
        li.innerText = newItem.value;

        //create del button element
        let delbtn = document.createElement('button');

        //add button class
        delbtn.className = 'deletebtn';

        //append textNode
        delbtn.innerHTML = '&times;';

        //append button to li
        li.appendChild(delbtn);

        //append li to list
        itemList.appendChild(li);

        newItem.value = '';
    }
}

//remove item
function removeItem(e){
    e.preventDefault();
    if(e.target.classList.contains('deletebtn')){

        let div = document.createElement('div');
        div.className = ('delMsg');
        div.innerHTML = `<p>Are you sure?</p>`
    
        let btnDiv = document.createElement('div');
        btnDiv.className = ('btnDiv');
    
        let yesBtn = document.createElement('button');
        let noBtn = document.createElement('button');
    
        yesBtn.className = ('yesBtn');
        noBtn.className = ('noBtn');
    
        yesBtn.innerText = 'yes';
        noBtn.innerText = 'no';
    
        btnDiv.appendChild(yesBtn);
        btnDiv.appendChild(noBtn);
        div.appendChild(btnDiv)
    
        let wrapper = document.querySelector('.wrapper')
        body.appendChild(div)
        wrapper.style.opacity = 0.2;
    
        
        yesBtn.addEventListener('click', () => {
            let li = e.target.parentElement;
            itemList.removeChild(li);
            div.remove()
            wrapper.style.opacity = 1;
        })
        noBtn.addEventListener('click', () => {
            console.log('Okay')
        })
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