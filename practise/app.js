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