document.querySelectorAll('.heart').forEach(item => {
    item.addEventListener('click', () => {
        if (item.classList.contains('heart-red')) {
            item.classList.remove('heart-red');
            item.innerHTML = 'favorite_border';
        } else {
            item.classList.add('heart-red');
            item.innerHTML = 'favorite';
        }
    });
})
let db = [
    { id: '1', name: 'Iphone 14', price: 1500 },
    { id: '2', name: 'Iphone 13', price: 999 },
    { id: '3', name: 'Iphone X', price: 800 },
    { id: '4', name: 'Iphone 7', price: 300 },
];


function showCard() {
    for (let el of db) {
        $('#cartGroup').append(`<div class='card' id='${el.id}'>
            <div>${el.name}</div>
            <div>${el.price}</div>
        </div>`);
    }
}

showCard();

let cartArr = [];

$('.#cartGroup').click(function (e) {
    $('.counter').text(cartArr.length + 1);
    for (let el of db) {
        if (el.id == e.target.id) {
            cartArr.push(el);
        }
    }
    console.log(cartArr);

});


function showCartElement() {
    for (let el of cartArr) {
        $('#cartGroup').append(`<div>
            <div>${el.name}</div>
        </div>`);
    }
}

$('.#cartGroup').click(function () {
    $('#cartGroup').empty();
    $('#cartGroup').fadeToggle(100);
    showCartElement();
})



