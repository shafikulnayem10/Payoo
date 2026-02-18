let sendMoneyBtn = document.getElementById("send-money-btn");

sendMoneyBtn.addEventListener("click", function () {

  // 1️ Get Receiver Number
  const recipientNumber = getValueFromInput("send-money-number").trim();

  if (recipientNumber === "") {
    alert("Receiver number required");
    return;
  }

  if (recipientNumber.length !== 11) {
    alert("Receiver number must be 11 digits");
    return;
  }

  if (isNaN(recipientNumber)) {
    alert("Receiver number must contain only numbers");
    return;
  }

  // 2️ Get Amount
  const amountInput = getValueFromInput("send-money-amount").trim();

  if (amountInput === "") {
    alert("Amount required");
    return;
  }

  if (isNaN(amountInput)) {
    alert("Amount must be a number");
    return;
  }

  const amount = Number(amountInput);

  if (amount <= 0) {
    alert("Amount must be greater than 0");
    return;
  }

  const currentBalance = getBalance();

  if (amount > currentBalance) {
    alert("Insufficient Balance");
    return;
  }

  // 3️ Get PIN
  const pin = getValueFromInput("send-money-pin").trim();

  if (pin.length !== 4 || isNaN(pin)) {
    alert("PIN must be 4 digits");
    return;
  }

  if (pin !== "1234") {
    alert("Invalid PIN");
    return;
  }

  // 4️ Process Send Money
  const newBalance = currentBalance - amount;
  setBalance(newBalance);

  // 5️ Add Transaction
  addTransaction("Send Money", recipientNumber, amount, "Success");

  // 6️ Auto Show Transaction Section
  //showOnly("transaction");

  alert("Send Money Successful");

});
