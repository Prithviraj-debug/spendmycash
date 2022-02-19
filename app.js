import items from "./items.js"

var bal = document.querySelector(".bal")
var balAval = 20
var itemsCon = document.querySelector(".items")
bal.innerHTML += balAval

const buildItem = (item) => {
    itemsCon.innerHTML += `
    <div class="item">
    <title>${item.name}</title>
    <img src="${item.img}" alt="">
    <em class="price">Price: &#8377; ${item.price}</em>
    <button class="buy">Buy</button>
    </div>
    `
}  

items.forEach(item => buildItem(item))
// var buyBtn = document.querySelector(".buy")

var buyBtns = document.querySelectorAll(".buy")
for (var i = 0; i < buyBtns.length; i++) {
    var button = buyBtns[i]
    // var price = button.parentElement.querySelector(".price").innerHTML
    button.addEventListener('click', buyBtnClicked)
}

function snackBar() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");
  
    // Add the "show" class to DIV
    x.className = "show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }

var amount = document.querySelector('.amount')
function buyBtnClicked(event) {
    var currEle = event.target.parentElement
    var prize = currEle.querySelector('.price').innerHTML

    // console.log(prize)
    
    
    if (balAval <= 0) {
        amount.classList.add('nobal')
        snackBar()
    } 
    else {
        if (balAval < prize) {
            alert("You cannot afford this!")

        } 
        else {
            balAval = balAval - prize
            bal.innerText = balAval
        }
    }
}