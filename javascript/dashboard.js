function showSideBar(){
    const sideBar = document.querySelector(".sidebar")
    sideBar.style.display = "flex"
}

function hideSideBar() {
    const sideBar = document.querySelector(".sidebar")
    sideBar.style.display = "none"
}

function showCartFour(){
    const aside = document.querySelector(".aside2")
    aside.style.display = "flex"
}

function hideCartFour() {
    const aside = document.querySelector(".aside2")
    aside.style.display = "none"
}

function showCartOne(){
    const aside2 = document.querySelector(".aside3")
    aside2.style.display = "flex"
}

function hideCartOne() {
    const aside3 = document.querySelector(".aside3")
    aside3.style.display = "none"
}

function showCartTwo(){
    const aside4 = document.querySelector(".aside4")
    aside4.style.display = "flex"
}

function hideCartTwo() {
    const aside4 = document.querySelector(".aside4")
    aside4.style.display = "none"
}

function showCartThree(){
    const aside5 = document.querySelector(".aside5")
    aside5.style.display = "flex"
}

function hideCartThree() {
    const aside5 = document.querySelector(".aside5")
    aside5.style.display = "none"
}

function showCartFive(){
    const aside6 = document.querySelector(".aside6")
    aside6.style.display = "flex"
}

function hideCartFive() {
    const aside6 = document.querySelector(".aside6")
    aside6.style.display = "none"
}

function showCartSix(){
    const aside7 = document.querySelector(".aside7")
    aside7.style.display = "flex"
}

function hideCartSix() {
    const aside7 = document.querySelector(".aside7")
    aside7.style.display = "none"
}

function showCart(){
    const cart = document.querySelector(".cart")
    cart.style.display = "flex"
}

function hideCart() {
    const cart = document.querySelector(".cart")
    cart.style.display = "none"
}

function showCheckOut(){
    const cart = document.querySelector(".cart");
    const checkout = document.querySelector(".log4");

    if(cart.style.display !=='none'){
        cart.style.display ='none';
        checkout.style.display = 'flex';
    }else{
        cart.style.display ='';
        checkout.style.display ='none';
    }
    }
    // checkout.style.display = "flex"
    


function hideCheckOut() {
    const checkout = document.querySelector(".log4")
    checkout.style.display = "none"
}


function showOrders(){
    const order = document.querySelector(".orders")
    order.style.display = "flex"
}

function hideOrders() {
    const order = document.querySelector(".orders")
    order.style.display = "none"
}
