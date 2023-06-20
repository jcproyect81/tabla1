console.log("El script.js se ejecutó")
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const table = document.getElementById("myTable");

function changeData() {
  console.log("La función changeData se apretó");
  let value = 0;
  var tbody = table.getElementsByTagName("tbody")[0];
  for (let row = 0; row < 10; row++) {
    var fila = document.createElement("tr");
    for (let col = 0; col < 10; col++) {
      value++;
      var column = document.createElement("td");
      column.textContent = value;
      fila.appendChild(column);
    }
    tbody.appendChild(fila);
  }
}

function clearData() {
  console.log("La función clearData se apretó");
  var tbody = table.getElementsByTagName("tbody")[0];
  tbody.innerHTML = "";
}

button1.onclick = changeData;
button2.onclick = clearData;

