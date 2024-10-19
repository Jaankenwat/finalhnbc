var menu= document.getElementById('menu');
var menubtn=document.getElementById('menubtn');
var menuclose=document.getElementById('menuclose');
var menuicon=document.getElementById('menuicon');
var menuopen=false;



menubtn.addEventListener('click',function(){
    if(menuopen==false){
        menu.style.visibility='visible';
        menuicon.style.visibility='hidden';
        menuopen=true;
    }
})
menuclose.addEventListener('click',function(){
    if(menuopen==true){ 
        menu.style.visibility='hidden';
        menuicon.style.visibility='visible';
        menuopen=false;
    }
})
