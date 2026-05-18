let payout =
document.getElementById("payout-panel");
let priceBtn = 
document.getElementById("priceBtn");
  priceBtn.addEventListener("click", function () {
    payout.style.display = "block";
  });
let quantity = 1;
let price = 2500;

let number = document.getElementById("number");
let priceText = document.getElementById("price");

let plus = document.getElementById("plus");
let minus = document.getElementById("minus");

plus.addEventListener("click", function () {

  quantity++;
  
  number.textContent = quantity;

  priceText.textContent = "₦" + (quantity * price);

});

minus.addEventListener("click", function () {

  if (quantity > 1) {

    quantity--;

    number.textContent = quantity;

    priceText.textContent = "₦" + (quantity * price);

  }

});