let printTemplate = document.querySelector('.filter__link_print');
let printItem = document.querySelector('.feature__product_1');

printTemplate.addEventListener('click', showItem);

function showItem(evt){
    console.log(evt);
    evt.preventDefault();
    printItem.classList.toggle('feature__product_1_hidden');
}

