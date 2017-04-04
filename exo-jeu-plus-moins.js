
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
    Console.log('test' + this._min +' à '+this._max);
}


const jeu = new Jeu({min:10, max:150});
jeu.jouer();




