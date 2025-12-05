const inpBox = document.querySelector(".inpBox");
const addBtn = document.querySelector(".addBtn");

const showList = document.querySelector(".showList");

addBtn.addEventListener("click", () => {
    if(inpBox.value == '') {
        alert("Please add task");
    } else {
        let task = inpBox.value;

        showList.innerHTML += 
            `<div class="taskCont">
                <p class="task">${task}</p>
                <div class="btnCont">
                    <button id="editBtn" class="creBtn">Edit</button>
                    <button id="doneBtn" class="creBtn">Done</button>
                </div>
            </div>`





            
        inpBox.value = '';
    }
})