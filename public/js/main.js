class Personnage {
    constructor(age, nom, ville) {
        this.age = age;
        this.nom = nom;
        this.ville = ville;
    }
}

const personnage1 = new Personnage(25, 'Jean', 'Paris');
const personnage2 = new Personnage(30, 'Marie', 'Lyon');

class Personnage {
    constructor(age, nom, ville) {
        this.age = age;
        this.nom = nom;
        this.ville = ville;
    }

    sePresenter() {
        console.log(`Bonjour, je m'appelle ${this.nom}!`);
    }
}

const personnage3 = new Personnage(25, 'Jean', 'Paris');
const personnage4 = new Personnage(30, 'Marie', 'Lyon');

personnage1.sePresenter();
personnage2.sePresenter();