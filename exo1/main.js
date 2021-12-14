// EXO 1
let val = {
    nom : "Bona",
    prenom : "Marouane",
    age : 22,
    taille : "1m68"
}
console.log(val.age);


// EXO 2 et 3
let perso1 = {
    nom : "Bona",
    prenom : "Marouane",
    age : 22,
    taille : "1m68"
}

let perso2 = {
    nom : "Bonaaaa",
    prenom : "Marouaneeee",
    age : 25,
    taille : "1m69"
}

let perso3 = {   
}

perso3.nom = perso1.nom;
perso3.age = perso2.age;
perso3.taille = "1m70";

console.log(perso1);
console.log(perso2);
console.log(perso3);