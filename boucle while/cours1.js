// on initialise uyne variable let x
let x = 0, a = 0;
let y = 10, b= 10;

//Tant que ...
while(x < 10){
    //...execute ce code
    document.getElementById('p1').innerHTML +=
    'x stocke la valeur ' + x + ' lors du passage n°'
    +(x + 1) + ' dans la boucle <br>';

    x++;
}

//Faire ... tant que
do{
    document.getElementById('p2').innerHTML +=
    'a stocke la valeur ' + a + ' lors du passage n° '
    + (a+1) + ' dans la boucle<br> ';
    a++;
}
while(a < 10);

while(y < 10){
    document.getElementById('p3').innerHTML +=
    'y stocke la valeur ' + y + ' lors du passage n°' 
    + (y + 1) + ' dans la boucle<br>';
    y++;
}

do{
    document.getElementById('p4').innerHTML +=
    'b stocke la valeur ' + b + ' lors du passage n°'
    + (b + 1) + ' dans la boucle<br>';
    b++;
}
while (b< 10);