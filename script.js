let task = [{
        taskName: "Cleaning",
        descriptioe: "Cleaning the living area",
        importance: 0,
        pic: "images\img2.jpg",


    },
    {
        taskName: "dishes",
        description: "dishes on a regular basis",
        importance: 0,
        pic: "images\img3.jpg"


    },
    {
        taskName: "VaccumCleaning",
        description: "Cleaning the bedroom",
        importance: 0,
        pic: "images\img4.jpg"
    },
    {
        taskName: "Cooking",
        description: "Cleaning with grandmother",
        importance: 0,
        pic: "images\img5.jpg"

    },
    {
        taskName: "Vaccum",
        description: "Cleaning the living area",
        importance: 0,
        pic: "images\img6.jpg"

    },
    {
        etaskName: "Grocery",
        descriptioe: "Grocery shopping for the week",
        importance: 0,
        pic: "images\img7.jpg"
    },
    {
        taskName: "Playtime",
        description: "Playing with the kids",
        importance: 0,
        pic: "images\img8.jpg"


    },
    {
        taskName: "Vaccum",
        description: "Cleaning the living area",
        importance: 0,
        pic: "images\img9.jpg"

    },
    {
        taskName: "Vaccum",
        description: "Cleaning the living area",
        importance: 0,
        pic: "images\img10.jpg"

    },
];

for (let val of task) {
    document.getElementById("result").innerHTML += `
    <div>
<div class="card" style="width: 18rem;">
<img src="${val.image}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${val.taskName}</h5>
  <p class="likes">${val.description}</p>
  <a href="#" class="btn btn-secondary btn-sm importancebtn">importance</a>
  <p class="importance">${val.importance}</p>
  <a href="#" class="btn btn-success ">done</a>
  <a href="#" class="btn btn-danger ">delete</a>
</div>
</div>
</div>`;

}

let btns = document.getElementsByClassName("importancebtn");
for (let i = 0; i < btns.length; i++) {
    console.log(btns[i]);
    btns[i].addEventListener("click",
        function() {
            task[i].importance++;
            console.log(task[i].importance);
            document.getElementsByClassName("importance")[i].innerHTML = task[i].importance;
        })
}​