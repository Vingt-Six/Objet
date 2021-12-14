let perso1 = {
    name : "François",
    panier : ["huile", "tomate", "pain"],
    derober(){
        this.panier.push(perso2.sac[0]);
        this.panier.push(perso2.sac[1]);
        perso2.sac.splice(0, 1);
        perso2.sac.splice(0, 1);
    }
}

let perso2 = {
    name : "Sergio",
    sac : ["pomme", "croissant", "Coca"],
}

perso1.derober();
console.log(perso1);
console.log(perso2);

