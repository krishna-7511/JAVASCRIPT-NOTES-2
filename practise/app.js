// Event Bubbling

let div = document.querySelector('div');
let ul = document.querySelector('ul');
let lis = document.querySelector('li');

// div.addEventListener("click",function(){
//     console.log('div was clicked');
// });

// ul.addEventListener("click",function(event){
//     event.stopPropagation();
//     console.log('ul was clicked');
// });

// lis.addEventListener("click",function(event){
//     event.stopPropagation();
//     console.log('li was clicked');
// });

// Activity

let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerText = inp.value;

  let delbtn = document.createElement("button");
  delbtn.innerText = "Delete";
  delbtn.classList.add("Delete");

  item.appendChild(delbtn);
  ul.appendChild(item);
  inp.value = " ";
});

// This is for only existing elements
// let delBtns = document.querySelectorAll(".del");
// for (delBtn of delBtns){
//     delBtn.addEventListener("click", function(){
//         let parent = this.parentElement;
//         console.log(parent);
//     });
// }

// This is for newly added elements by js.
ul1.addEventListener("click",(event)=>{
    if(event.target.nodeName == "BUTTON"){
        let listitem = event.target.parentElement;
        listitem.remove();
    }
});


//chatgpt for crud

<script>
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function() {
if (inp.value.trim() == = "") return;

let item = document.createElement("li");

let span = document.createElement("span");
span.innerText = inp.value;
item.appendChild(span);

// Delete Button
let delbtn = document.createElement("button");
delbtn.innerText = "Delete";
delbtn.classList.add("delete");
item.appendChild(delbtn);

// Edit Button
let editbtn = document.createElement("button");
editbtn.innerText = "Edit";
editbtn.classList.add("edit");
item.appendChild(editbtn);

ul.appendChild(item);
inp.value = "";
});

ul.addEventListener("click", function(event) {
let target = event.target;

// Delete functionality
if (target.classList.contains("delete")) {
    let listItem = target.parentElement;
    listItem.remove();
}

// Edit functionality
if (target.classList.contains("edit")) {
    let listItem = target.parentElement;
    let span = listItem.querySelector("span");

    // If already editing
    if (target.innerText == = "Save") {
        let input = listItem.querySelector("input");
        span.innerText = input.value;
        span.style.display = "inline";
        input.remove();
        target.innerText = "Edit";
    }
    else {
        // Switch to editing mode
        let input = document.createElement("input");
        input.type = "text";
        input.value = span.innerText;
        span.style.display = "none";
        listItem.insertBefore(input, target);
        target.innerText = "Save";
    }
}
});
< / script>