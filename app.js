var btn1 = document.getElementById('button1');
var btn2 = document.getElementById('button2');
var btn3 = document.getElementById('button3');

var response1 = document.getElementById('response1');
var response2 = document.getElementById('response2');
var response3 = document.getElementById('response3');

var favoriteDesserts = ["A","B","C"];
var favoriteFoods = ["A","B","C"];
var favoriteGames = ["A","B","C"];

btn1.addEventListener('click',function(){
    for(i=0;i<3;i++){
        console.log(favoriteDesserts[i]);
    }
});

btn2.addEventListener('click',function(){
    for(i=0;i<3;i++){
        console.log(favoriteFoods[i]);
    }
});

btn3.addEventListener('click',function(){
    for(i=0;i<3;i++){
        console.log(favoriteGames[i]);
    } 
});