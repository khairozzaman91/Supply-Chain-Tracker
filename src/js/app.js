let inventory = JSON.parse(localStorage.getItem('supplyData')) || [];
let editIndex = null;

// UI Elements
const inventoryTable = document.getElementById('inventoryTable');
const modal = document.getElementById('modal');

// ১ READ
function renderInventory() {
    inventoryTable.innerHTML = '';
    let lowStock = 0;

    inventory.forEach((item, index) => {
        if (item.qty < 10) lowStock++; // ১০ কেজির নিচে হলে এলার্ট

        const row = `
            <tr class="border-b border-stone-100 hover:bg-stone-50 transition">
                <td class="px-6 py-4 font-medium">${item.name}</td>
                <td class="px-6 py-4 text-stone-500">${item.category}</td>
                <td class="px-6 py-4">${item.qty} kg</td>
                <td class="px-6 py-4">
                    <span class="px-2 py-1 rounded-full text-xs font-bold ${item.qty < 10 ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}">
                        ${item.qty < 10 ? 'Low Stock' : 'In Stock'}
                    </span>
                </td>
                <td class="px-6 py-4 text-right space-x-3">
                    <button onclick="editItem(${index})" class="text-blue-600 hover:text-blue-800 font-medium">Edit</button>
                    <button onclick="deleteItem(${index})" class="text-red-600 hover:text-red-800 font-medium">Delete</button>
                </td>
            </tr>
        `;
        inventoryTable.innerHTML += row;
    });

    document.getElementById('totalItems').innerText = inventory.length;
    document.getElementById('lowStockCount').innerText = lowStock;
    localStorage.setItem('supplyData', JSON.stringify(inventory));
}

//  CREATE & UPDATE
function saveItem() {
    const name = document.getElementById('itemName').value;
    const category = document.getElementById('itemCategory').value;
    const qty = parseInt(document.getElementById('itemQty').value);

    if (!name || isNaN(qty)) return alert("সব ঘর পূরণ করুন!");

    if (editIndex !== null) {
        inventory[editIndex] = { name, category, qty };
        editIndex = null;
    } else {
        inventory.push({ name, category, qty });
    }

    toggleModal();
    renderInventory();
    clearInputs();
}

// DELETE
function deleteItem(index) {
    if (confirm("Are you sure you want to delete this item?")) {
        inventory.splice(index, 1);
        renderInventory();
    }
}

// EDIT
function editItem(index) {
    const item = inventory[index];
    document.getElementById('itemName').value = item.name;
    document.getElementById('itemCategory').value = item.category;
    document.getElementById('itemQty').value = item.qty;
    
    editIndex = index;
    document.getElementById('modalTitle').innerText = "Edit Ingredient";
    toggleModal();
}

// Utility Functions
function toggleModal() {
    modal.classList.toggle('hidden');
    modal.classList.toggle('flex');
    if (modal.classList.contains('hidden')) {
        clearInputs();
        document.getElementById('modalTitle').innerText = "Add New Ingredient";
        editIndex = null;
    }
}

function clearInputs() {
    document.getElementById('itemName').value = '';
    document.getElementById('itemQty').value = '';
}

// Initial Load
renderInventory();