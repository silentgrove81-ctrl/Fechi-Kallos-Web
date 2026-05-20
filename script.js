let payout =
document.getElementById("payout-panel");
let priceBtn = 
document.getElementById("priceBtn");
let paymentinfo=
document.getElementById("paymentinfo");
let cancleBtn2=
document.getElementById("cancleBtn2");
let cancleBtn=
document.getElementById("cancle");
  priceBtn.addEventListener("click", function () {
    payout.style.display = "block";
    
  });
  cancleBtn.addEventListener("click", function(){
    payout.style.display="none";
    paymentinfo.style.display="block";
  });
  cancleBtn2.addEventListener("click", function(){
    paymentinfo.style.display="none";
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