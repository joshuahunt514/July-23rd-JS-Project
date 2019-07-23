function addToList() {
  var listAdd = document.getElementById("list");
  var input = document.getElementById("input");
  var li = document.createElement("li");
  li.setAttribute("id", input.value);
  li.appendChild(document.createTextNode(input.value));
  listAdd.appendChild(li);
}


function removeFromList() {
    var listAdd = document.getElementById("list");
    var input = document.getElementById("input");
    var item = document.getElementById(input.value);
    listAdd.removeChild(item);      
}
console.log();
