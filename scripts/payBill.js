let payBillBtn = document.getElementById("pay-bill-btn");

payBillBtn.addEventListener("click", function () {

  // 1️ Get Bill Type
  const billType = getValueFromInput("pay-bill-type");

  if (billType === "Select bill type") {
    alert("Please select bill type");
    return;
  }

  // 2️ Account Number
  const accountNumber = getValueFromInput("pay-bill-account").trim();

  if (accountNumber === "") {
    alert("Account number required");
    return;
  }

  if (isNaN(accountNumber)) {
    alert("Account number must be numeric");
    return;
  }

  // 3️ Amount
  const amountInput = getValueFromInput("pay-bill-amount").trim();

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

  // 4️ PIN
  const pin = getValueFromInput("pay-bill-pin").trim();

  if (pin.length !== 4 || isNaN(pin)) {
    alert("PIN must be 4 digits");
    return;
  }

  if (pin !== "1234") {
    alert("Invalid PIN");
    return;
  }

  // 5️ Process Payment
  const newBalance = currentBalance - amount;
  setBalance(newBalance);

  // 6️ Add Transaction
  addTransaction(
    `Bill Payment (${billType})`,
    accountNumber,
    amount,
    "Success"
  );

  // 7️ Show Transaction Section
  //showOnly("transaction");

  alert("Bill Payment Successful");

});
