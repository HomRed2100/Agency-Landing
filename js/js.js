let printTemplate = document.querySelector('.filter__link_print');

let printItem = document.querySelectorAll('.feature__product_print');

printTemplate.addEventListener('click', showItem);

function showItem(evt){
    console.log(evt);
    evt.preventDefault();
    printItem.forEach(function(printItem){
        printItem.classList.add('feature__product_hidden');
    })
}
