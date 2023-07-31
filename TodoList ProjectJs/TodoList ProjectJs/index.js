// Get DOM Elements
const input = document.querySelector('.entered-list');
const add = document.querySelector('.add-list');
const tasks = document.querySelector('.tasks');
const AddBtn = document.querySelector('.addBtn');

// add btn disabled
input.addEventListener('keyup', () => {
    console.log("Event listener triggered");
    if(input.value.trim() !=""){
        AddBtn.classList.add('active');
    }else{
        AddBtn.classList.remove('active');
    }
});

// add new item to List

AddBtn.addEventListener('click', () => {
    if(input.value.trim() !=0){
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `
        <p> ${input.value}</p>
            <div class="item-btn">
                <i class="fa-solid fa-pen-to-square"></i>
                <i class="fa-sharp fa-solid fa-xmark"></i>
            </div>
        `;
        tasks.appendChild(newItem);
        input.value = "";
    }
    else {
        alert("Please enter task")
    }
});
