let btn = document.querySelector('#addTaskBtn');
let inp = document.querySelector("input");
let list = document.querySelectorAll('#taskList');

btn.addEventListener('click', function (){
    let item = document.createElement('li');
    item.innerText = inp.value;

    let deltbtn = document.createElement("button");
    deltbtn.innerText = "Delete";
    deltbtn.classList.add("deletebtn");

    item.appendChild(deltbtn);
    list[0].appendChild(item);

    inp.value = "";

})
list[0].addEventListener('click', function (e){
    if(e.target.classList.contains("deletebtn")){
        let par = e.target.parentElement;
        par.remove();
    }
})




