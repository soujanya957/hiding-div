let btnone = document.querySelector('.btnone');
let divone = document.querySelector('.divone');

let btntwo = document.querySelector('.btntwo');
let divtwo = document.querySelector('.divtwo');

let btnthree = document.querySelector('.btnthree');
let divthree = document.querySelector('.divthree');

let btnfour = document.querySelector('.btnfour');
let divfour = document.querySelector('.divfour');

btnone.addEventListener('click', () =>{
    if(divone.style.display === 'none'){
        divtwo.style.display = 'none';
        divthree.style.display = 'none';
        divfour.style.display = 'none';
        divone.style.display = 'block';

    }else if (divone.style.display === 'block') {
        divone.style.display = 'none';
        divtwo.style.display = 'none';
        divthree.style.display = 'none';
        divfour.style.display = 'none';
    }
})

btntwo.addEventListener('click', () =>{
    if(divtwo.style.display === 'none'){
        divone.style.display = 'none';
        divthree.style.display = 'none';
        divfour.style.display = 'none';
        divtwo.style.display = 'block';
    }else if (divtwo.style.display === 'block') {
        divone.style.display = 'none';
        divtwo.style.display = 'none';
        divthree.style.display = 'none';
        divfour.style.display = 'none';
    }
})


btnthree.addEventListener('click', () =>{
    if(divthree.style.display === 'none'){
        divone.style.display = 'none';
        divtwo.style.display = 'none';
        divfour.style.display = 'none';
        divthree.style.display = 'block';
    }else if (divthree.style.display === 'block') {
        divone.style.display = 'none';
        divtwo.style.display = 'none';
        divthree.style.display = 'none';
        divfour.style.display = 'none';
    }
})


btnfour.addEventListener('click', () =>{
    if(divfour.style.display === 'none'){
        divone.style.display = 'none';
        divtwo.style.display = 'none';
        divthree.style.display = 'none';
        divfour.style.display = 'block';
    }else if (divfour.style.display === 'block') {
        divone.style.display = 'none';
        divtwo.style.display = 'none';
        divthree.style.display = 'none';
        divfour.style.display = 'none';
    }
})


