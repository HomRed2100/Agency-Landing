'use strict';

let all = document.querySelector('.filter__link_all');
let printTemplate = document.querySelector('.filter__link_print');
let webTemplate = document.querySelector('.filter__link_web');
let userInt = document.querySelector('.filter__link_user');
let mockUp = document.querySelector('.filter__link_mock');

let allItem = document.querySelectorAll('.feature__product');
let printItem = document.querySelectorAll('.feature__product_print');
let webItem = document.querySelectorAll('.feature__product_web');
let userItem = document.querySelectorAll('.feature__product_user');
let mockItem = document.querySelectorAll('.feature__product_mock');

all.addEventListener('click', showAllItem);
printTemplate.addEventListener('click', showPrintItem);
webTemplate.addEventListener('click', showWebItem);
userInt.addEventListener('click', showUserItem);
mockUp.addEventListener('click', showMockItem);

function showAllItem(evt){
    evt.preventDefault();
    allItem.forEach(function(allItem){
        allItem.classList.add('feature__product_visible');
    });
}
function showPrintItem(evt){
    evt.preventDefault();
    printItem.forEach(function(printItem){
        printItem.classList.toggle('feature__product_hidden');
    });
    all.classList.toggle('filter__link_black');
    printTemplate.classList.toggle('filter__link_red');
}
function showWebItem(evt){
    evt.preventDefault();
    webItem.forEach(function(webItem){
        webItem.classList.toggle('feature__product_hidden');
    });
    all.classList.toggle('filter__link_black');
    webTemplate.classList.toggle('filter__link_red');
}
function showUserItem(evt){
    evt.preventDefault();
    userItem.forEach(function(userItem){
        userItem.classList.toggle('feature__product_hidden');
    });
    all.classList.toggle('filter__link_black');
    userInt.classList.toggle('filter__link_red');
}
function showMockItem(evt){
    evt.preventDefault();
    mockItem.forEach(function(mockItem){
        mockItem.classList.toggle('feature__product_hidden');
    });
    all.classList.toggle('filter__link_black');
    mockUp.classList.toggle('filter__link_red');
}

let menuWrapper = document.querySelector('.popup-menu');
let menuButton = document.querySelector('.popup-menu__button');
let menuList = document.querySelector('.popup-menu__list');

function showMenu (){
    menuList.classList.toggle('hide');
}

menuButton.addEventListener('click', showMenu);
