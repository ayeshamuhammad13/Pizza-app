let food1s = document.getElementById('food1');
let food2s = document.getElementById('food2');
let foods = document.getElementById('food');

food1s.addEventListener('click',()=>{
    foods.style.backgroundImage="url('cheese.jpg')";
})

food2s.addEventListener('click',()=>{
    foods.style.backgroundImage="url('food2.jpg')";
})


