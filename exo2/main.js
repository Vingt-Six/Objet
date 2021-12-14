// EXO 1
let perso = {
    nom : "Bona",
    prenom : "Marouane",
    age : 22,
    sePresenter(){
        console.log(`Bonjour je m'appelle ${this.nom} ${this.prenom}`);
    }
}
perso.sePresenter()


// EXO 2
let perso = {
    nom : "Marouane",
    oui(){
        perso.age = prompt("Change l'âge")
        console.log(`${this.nom} a ${this.age} ans`);
    }
}
perso.oui();
console.log(perso);