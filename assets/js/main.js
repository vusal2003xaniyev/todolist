let list = document.querySelector("#operation-list");
function viewList() {
  if (localStorage.getItem("list")) {
    var arr = JSON.parse(localStorage.getItem("list"));
    var div = "";
    for (let i = 0; i < arr.length; i++) {
      div += `
          <div class="list-main" id="list">
          <button class="delete-button" id="btn.${i}" onclick="deleteList(${i})"  ><i class="fa-solid fa-circle-xmark"></i></button>
          <p>${arr[i]}</p>
          </div>
          `;
    }
    list.innerHTML = div;
  } else {
    var arr = [];
    var div = "";
  }
  return [arr, div];
}
var func = viewList();
var arr = func[0];
var div = func[1];


function listOperation() {
  let inp = document.querySelector("input");
  if (inp.value) {
    arr.push(inp.value);
    localStorage.setItem("list", JSON.stringify(arr));
    var info=JSON.parse(localStorage.getItem('list'));
    
      div += `
    <div class="list-main" id="list">
    <button class="delete-button" id="btn.${
      arr.length - 1
    }" onclick="deleteList(${
      arr.length - 1
    })" ><i class="fa-solid fa-circle-xmark"></i></button>
    <p>${arr[arr.length - 1]}</p>
    </div>
    `;

    list.innerHTML = div;
    viewList()
   
  }
  inp.value = "";
}
function deleteList(id) {
  arr.splice(id, 1);
  localStorage.setItem("list", JSON.stringify(arr));
  arr = JSON.parse(localStorage.getItem("list"));
  viewList();
}
