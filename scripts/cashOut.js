console.log("Hello cashOut!");

let cashoutBtn = document.getElementById("cashout-btn");

cashoutBtn.addEventListener("click", function () {

  // 1️ Get Agent Number
  const cashoutNumber = getValueFromInput("cashout-number").trim();

  if (cashoutNumber === "") {
    alert("Agent number required");
    return;
  }

  if (cashoutNumber.length !== 11) {
    alert("Agent number must be 11 digits");
    return;
  }

  if (isNaN(cashoutNumber)) {
    alert("Agent number must contain only numbers");
    return;
  }

  // 2️ Get Amount
  const cashoutAmount = getValueFromInput("cashout-amount").trim();

  if (cashoutAmount === "") {
    alert("Amount required");
    return;
  }

  if (isNaN(cashoutAmount)) {
    alert("Amount must be a number");
    return;
  }

  const amount = Number(cashoutAmount);

  if (amount <= 0) {
    alert("Amount must be greater than 0");
    return;
  }

  if (amount < 50) {
    alert("Minimum cashout amount is 50");
    return;
  }

  const currentBalance = getBalance();

  if (amount > currentBalance) {
    alert("Insufficient Balance");
    return;
  }

  // 3️ Get PIN
  const pin = getValueFromInput("cashout-pin").trim();

  if (pin === "") {
    alert("PIN required");
    return;
  }

  if (pin.length !== 4) {
    alert("PIN must be 4 digits");
    return;
  }

  if (isNaN(pin)) {
    alert("PIN must contain only numbers");
    return;
  }

 if (pin !== "1234") {
  alert("Invalid PIN");
  return;
}

const newBalance = currentBalance - amount;
setBalance(newBalance);

addTransaction("Cashout", cashoutNumber, amount, "Success");

//  Auto show transaction
//showOnly("transaction");

alert("Cashout Successful");


});

