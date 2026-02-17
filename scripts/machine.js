console.log("Machine Added");

//machine id -> input value
function getValueFromInput(id) {
  const input = document.getElementById(id);
  const value = input.value;
  console.log(id, value);
  return value;
}
//machine -> balance
function getBalance() {
  const balanceElement = document.getElementById("balance");
  const balance = balanceElement.innerText;
  console.log("current balance", Number(balance));
  return Number(balance);
}

// machine value -> set Balance

function setBalance(value) {
  const balanceElement = document.getElementById("balance");
  balanceElement.innerText = value;
}

//machine id > hide all > show id
function showOnly(id) {
  const addmoney = document.getElementById("add-money");
  const cashout = document.getElementById("cashout");
  
  addmoney.classList.add("hidden");
  cashout.classList.add("hidden");

  
  const selected = document.getElementById(id);
  selected.classList.remove("hidden");
}
