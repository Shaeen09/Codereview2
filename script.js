function main() {
    createCards();
    addEventListeners();
}

function createCards() {
    for (let val of task) {
        document.getElementById("result").innerHTML += `
    <div>
        <div class="card" style="width: 18rem;">
            <img src="${val.pic}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${val.taskName}</h5>
                <p class="likes">${val.description}</p>
                <a class="btn btn-secondary btn-sm importancebtn">importance</a>
                <p class="importance">${val.importance}</p>
                <a href="#" class="btn btn-success ">done</a>
                <a href="#" class="btn btn-danger ">delete</a>
             </div>
        </div>
    </div>`;

    }
}

function addEventListeners() {
    let btns = document.getElementsByClassName("importancebtn");
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click",
            function() {
                task[i].importance++;
                console.log(task[i].importance);
                document.getElementsByClassName("importance")[i].innerHTML = task[i].importance;
            }

        );
    }
}

main();