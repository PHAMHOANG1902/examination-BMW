$(document).ready(function () {
    // Event listener for form submission
    $("#productForm").submit(function (event) {
        event.preventDefault();

        // Get form data
        var formData = {
            code: $("#code").val(),
            price: parseFloat($("#price").val()),
            quantity: parseInt($("#quantity").val()),
            amount: parseFloat($("#amount").val()),
            notes: $("#notes").val(),
        };

        // Add new product to the products array
        products.push(formData);

        // Update the product table
        populateProductTable();

        // Reset the form
        $("#productForm")[0].reset();
    });

    // Update the 'Amount' field based on 'Price' and 'Quantity' inputs
    $("#price, #quantity").on("input", function () {
        updateAmountField();
    });

    // Function to update the 'Amount' field
    function updateAmountField() {
        var price = parseFloat($("#price").val()) || 0;
        var quantity = parseInt($("#quantity").val()) || 0;
        var amount = price * quantity;
        $("#amount").val(amount);
    }

    // Function to populate product table
    function populateProductTable() {
        const tableBody = $("#productTable tbody");
        tableBody.empty();

        products.forEach(function (product) {
            var row = $("<tr>");
            row.append($("<td>").text(product.code));
            row.append($("<td>").text(product.price));
            row.append($("<td>").text(product.quantity));
            row.append($("<td>").text(product.amount));
            row.append($("<td>").text(product.notes));
            tableBody.append(row);
        });
    }
});