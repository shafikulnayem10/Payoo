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
function showOnly(id, clickedBtn) {

  const sections = ["add-money", "cashout", "transaction", "send-money", "get-bonus", "pay-bill"];

  // hide all sections
  sections.forEach(function (sectionId) {
    document.getElementById(sectionId).classList.add("hidden");
  });

  // show selected section
  document.getElementById(id).classList.remove("hidden");

  // remove active style from all buttons
  const buttons = document.querySelectorAll(".menu-btn");
  buttons.forEach(function (btn) {
    btn.classList.remove("btn-active");
  });

  // add active style to clicked button
  clickedBtn.classList.add("btn-active");
}

// Add transaction row
function addTransaction(type, number, amount, status) {
  const tbody = document.getElementById("transaction-table-body");

  const tr = document.createElement("tr");

  tr.innerHTML = `
        <td>${type}</td>
        <td>${number}</td>
        <td>$${amount}</td>
        <td>
            <span class="font-bold ${status === "Success" ? "text-green-500" : "text-red-500"}">
                ${status}
            </span>
        </td>
    `;

  tbody.appendChild(tr);
}
