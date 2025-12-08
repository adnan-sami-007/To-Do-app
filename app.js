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
                    <button class="creBtn editBtn">Edit</button>
                    <button class="creBtn doneBtn">Done</button>
                </div>
            </div>`

        inpBox.value = '';
    }

    let doneBtn = document.querySelectorAll(".doneBtn");

    doneBtn.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            let taskText = e.target.parentElement.previousElementSibling;
            console.log(taskText);

            taskText.classList.add("remove");

            console.log("done");
        })
    })



});


