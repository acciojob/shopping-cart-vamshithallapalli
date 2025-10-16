//your code here
// Get DOM elements
const itemInput = document.getElementById("item-name-input");
const priceInput = document.getElementById("item-price-input");
const addBtn = document.getElementById("add");
const tableBody = document.getElementById("cart-body");
const totalEl = document.getElementById("total");

let grandTotal = 0;

// Add event listener for Add button
addBtn.addEventListener("click", function () {
  const itemName = itemInput.value.trim();
  const priceValue = parseFloat(priceInput.value.trim());

  // Validate input: item name should not be empty and price must be a valid number > 0
  if (itemName === "" || isNaN(priceValue) || priceValue <= 0) {
    alert("Please enter a valid item name and price!");
    return;
  }

  // Create new row
  const row = document.createElement("tr");
  row.setAttribute("role", "row");

  // Item column
  const itemCell = document.createElement("td");
  itemCell.setAttribute("id", "item");
  itemCell.textContent = itemName;

  // Price column
  const priceCell = document.createElement("td");
  priceCell.setAttribute("id", "price");
  priceCell.textContent = priceValue.toFixed(2);

  // Append cells to row
  row.appendChild(itemCell);
  row.appendChild(priceCell);

  // Append row to table
  tableBody.appendChild(row);

  // Update grand total
  grandTotal += priceValue;
  totalEl.textContent = `Grand Total: ${grandTotal.toFixed(2)}`;

  // Clear input fields
  itemInput.value = "";
  priceInput.value = "";
});
