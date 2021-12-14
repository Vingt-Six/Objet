let vieille_dame = {
    age : 190,
    nom: {
        prenom: "Andy",
        nom2Famille:"Capé"
    }, 
    moral: "mal",
    objet: "canne",
    parler(){
        switch (vieille_dame.moral) {
            case "mal":
                alert("Vous me déranger et frappe avec sa " + vieille_dame.objet)
                break;

            case "bien":
                alert("Bonjour " + vieil_homme.nom + '\ngrrrrrrrrrh')
                break;
        }
    }
}


let vieil_homme = {
    nom: "Gérard-Menvussat",
    adoucir(){
        vieille_dame.moral="bien"
        }
}
console.log("Un homme passe et énerve Madame " + vieille_dame.nom.nom2Famille); //juste pour mettre une situation
vieille_dame.parler()
console.log(vieille_dame.moral);
console.log(vieille_dame.nom.prenom + " voit le " + vieil_homme.nom + " passer et se sent mieux") //juste pour mettre une situation
vieil_homme.adoucir()
vieille_dame.parler()
console.log(vieille_dame.moral);