class Grocery {
    constructor(name, quantity, price) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
}
const arr = [];
let item1 = new Grocery("Cheese", 1, 3);
let item2 = new Grocery("Salami", 3, 9);
let item3 = new Grocery("Wine", 2, 15);
arr.push(item1);
arr.push(item2);
arr.push(item3);
function displayData() {
    let data = "";
    for (var i = 0; i < arr.length; i++) {
        data += arr[i].name + " x" + arr[i].quantity + " $" + arr[i].price + "<br>";
    }
    return data;
}
document.getElementById('display').innerHTML = displayData();
