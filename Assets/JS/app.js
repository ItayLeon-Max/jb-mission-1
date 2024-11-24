const addProductToCartTable = (event) => {
    event.preventDefault();
    const productData = [
        {
            productName: document.getElementById('productName').value,
            productPrice: document.getElementById('productPrice').value,
            productCategory: document.getElementById('productCategory').value,
            productURL: document.getElementById('productPhotoSrc').value
        }
    ];
    const cartTable = document.getElementById('cartTable');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${productData[0].productName}</td>
        <td>${productData[0].productPrice}</td>
        <td>${productData[0].productCategory}</td>
        <td><img src="${productData[0].productURL}" alt="${productData[0].productName}" width="100"></td>
        <td><button id="deleteFromTable" onclick="deleteProductFromCartTable()">Delete</button></td>
    `;
    cartTable.appendChild(newRow);
    clearForm();
}

const clearForm = () => {
    document.getElementById('productName').value = '';
    document.getElementById('productPrice').value = '';
    document.getElementById('productCategory').value = 'select';
    document.getElementById('productPhotoSrc').value = '';
}

const deleteProductFromCartTable = () => {
    const deleteButton = document.getElementById('deleteFromTable');
    deleteButton.parentElement.parentElement.remove();
}

