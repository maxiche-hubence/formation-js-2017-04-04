
/**
 * Renvoie un nombre aléatoire compris entre deux bornes
 * 
 * @param {Number} min Valeur minimale possible pour le nombre aléatoire généré
 * @param {Number} max Valeur maximale possible pour le nombre aléatoire généré
 */
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * fonction constructeur pour le jeu
 * 
 * @param {object} limits objet contenant deux membres : min et max 
 */
const Jeu = function(limits){
    this._min = parseInt(limits.min);
    this._max = parseInt(limits.max);
    // contrôler les valeurs min et max, avec des valeurs par défaut, le cas échéant
    if(Number.isNaN(this._min)) {this._min = 0;}
    if(Number.isNaN(this._max)) {this._max = 0;}
    this._answers = [];
    this._findNumber = getRandomIntInclusive(this._min, this._max);
}
// ajout du ptototype pour la méthode jouer
Jeu.prototype.jouer = function(){
    if(this._answers.length){
        console.log('Précédents essais : ' + this._answers.join(', '));
    }
    rl.question('Le nombre doit être compris entre '+this._min +' et '+this._max +' - à toi :', (saisie) => {
        this._typedData = Number(saisie);
        // Est-ce un nombre valide ?
        if(Number.isNaN(this._typedData)){
            console.log('Vous devez saisir un nombre !');
            return this.jouer();
        }
        this._answers.push(this._typedData);
        if(this._typedData > this._findNumber){
            console.log('TROP GRAND !');
            return this.jouer();
        }
        if(this._typedData <this._findNumber){
            console.log('trop petit !');
            return this.jouer();
        }
        if(this._typedData === this._findNumber){
            console.log('Well done !');
            rl.close();
        }
    });
}

const jeu = new Jeu({min:1, max:100});
jeu.jouer();

