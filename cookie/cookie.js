let date = new Date(Date.nom() + 8640000); //8640000 = 1 jour
date = date.toUTCString();

document.cookie = 'user=Valentin'; //cre ou met a jour un cookie 'user'
alert(document.cookie); //Affiche la liste des cookies