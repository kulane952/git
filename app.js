const nameInput = document.getElementById("name");
const amountInput = document.getElementById("amount");
const typeInput = document.getElementById("type");
const addBtn = document.getElementById("addBtn");

const tableBody = document.getElementById("tableBody");

const balanceEl = document.getElementById("balance");
const incomeEl = document.getElementById("income");
const expenseEl = document.getElementById("expense");

let transactions = [];

addBtn.addEventListener("click", () => {

  const name = nameInput.value;
  const amount = Number(amountInput.value);
  const type = typeInput.value;

  if (!name || amount <= 0) return;

  transactions.push({
    id: Date.now(),
    name,
    amount,
    type
  });

  nameInput.value = "";
  amountInput.value = "";

  render();
  update();
});

function render() {
  tableBody.innerHTML = "";

  transactions.forEach(t => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td class="p-2">${t.name}</td>
      <td class="p-2">$${t.amount}</td>
      <td class="p-2">${t.type}</td>
      <td class="p-2">
        <button onclick="removeItem(${t.id})" class="text-red-500">
          Delete
        </button>
      </td>
    `;

    tableBody.appendChild(row);
  });
}

function removeItem(id) {
  transactions = transactions.filter(t => t.id !== id);
  render();
  update();
}

function update() {
  let income = 0;
  let expense = 0;

  transactions.forEach(t => {
    if (t.type === "income") income += t.amount;
    else expense += t.amount;
  });

  balanceEl.textContent = "$" + (income - expense);
  incomeEl.textContent = "$" + income;
  expenseEl.textContent = "$" + expense;
}