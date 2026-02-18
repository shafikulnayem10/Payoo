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
  const sections = ["add-money", "cashout", "transaction"];

  sections.forEach(function (sectionId) {
    const section = document.getElementById(sectionId);
    section.classList.add("hidden");
  });

  const selected = document.getElementById(id);
  selected.classList.remove("hidden");

  //  smooth scroll to selected section
  selected.scrollIntoView({ behavior: "smooth" });
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
