let display = document.getElementById("basic-display");
let historyList = document.getElementById("history-list");

// TAB SWITCH
function showTab(tab) {
  document.querySelectorAll(".card").forEach(c => c.classList.remove("active"));
  document.getElementById(tab).classList.add("active");

  document.querySelectorAll(".tabs button").forEach(b => b.classList.remove("active"));
  event.target.classList.add("active");
}

// BASIC CALC
function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    let result = eval(display.value);
    addHistory(display.value + " = " + result);
    display.value = result;
  } catch {
    display.value = "Error";
  }
}

// HISTORY
function addHistory(text) {
  let li = document.createElement("li");
  li.textContent = text;
  historyList.prepend(li);
}

// BINARY
function isBinary(str) {
  return /^[01]+$/.test(str);
}

function binaryCalc(op) {
  let b1 = document.getElementById("bin1").value;
  let b2 = document.getElementById("bin2").value;

  if (!isBinary(b1) || !isBinary(b2)) {
    alert("Only 0 and 1 allowed!");
    return;
  }

  let n1 = parseInt(b1, 2);
  let n2 = parseInt(b2, 2);
  let res;

  if (op === "+") res = n1 + n2;
  if (op === "-") res = n1 - n2;
  if (op === "*") res = n1 * n2;

  document.getElementById("binary-result").innerText =
    res.toString(2);
}

// CONVERT
function toBinary() {
  let d = document.getElementById("decimal").value;
  document.getElementById("binary-result").innerText =
    parseInt(d).toString(2);
}

function toDecimal() {
  let b = document.getElementById("binaryInput").value;
  if (!isBinary(b)) return alert("Invalid binary!");
  document.getElementById("binary-result").innerText =
    parseInt(b, 2);
}

// ADVANCED
function square() {
  let x = getAdv();
  showAdv(x * x);
}

function cube() {
  let x = getAdv();
  showAdv(x * x * x);
}

function sqrt() {
  let x = getAdv();
  showAdv(Math.sqrt(x));
}

function percent() {
  let x = getAdv();
  showAdv(x / 100);
}

function getAdv() {
  return parseFloat(document.getElementById("adv-input").value);
}

function showAdv(val) {
  document.getElementById("adv-result").innerText = val;
}