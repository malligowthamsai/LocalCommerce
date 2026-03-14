let inventory = JSON.parse(localStorage.getItem("inventory")) || [];

function login(){

    let role = document.getElementById("role").value;

    document.getElementById("loginBox").style.display = "none";

    if(role === "seller"){
        document.getElementById("sellerPanel").classList.remove("hidden");
        showInventory();
    }
    else{
        document.getElementById("userPanel").classList.remove("hidden");
        showProducts();
    }
}

function addProduct(){

    let name = document.getElementById("productName").value;
    let qty = document.getElementById("productQty").value;

    let product = {
        name:name,
        qty:qty
    };

    inventory.push(product);

    localStorage.setItem("inventory",JSON.stringify(inventory));

    showInventory();
}

function showInventory(){

    let list = document.getElementById("inventoryList");
    list.innerHTML="";

    inventory.forEach(p => {

        let li = document.createElement("li");
        li.textContent = p.name + " - Qty: " + p.qty;

        list.appendChild(li);

    });
}

function showProducts(){

    let list = document.getElementById("productList");
    list.innerHTML="";

    inventory.forEach(p => {

        let li = document.createElement("li");
        li.textContent = p.name + " - Available: " + p.qty;

        list.appendChild(li);

    });
}
