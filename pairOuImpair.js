// Créez un programme qui permet de déterminer si l’argument donné est un entier pair ou impair..


// Exemples d’utilisation :
// $> ruby exo.rb 2
// pair

// $> ruby exo.rb 5
// impair


// $> ruby exo.rb Bonjour
// Tu ne me la mettras pas à l’envers.

// $> ruby exo.rb
// Tu ne me la mettras pas à l’envers.


// Attention : gérez aussi les entiers négatifs.


let numberToChoose = "-4";

if (numberToChoose%2===0 && (isNaN(numberToChoose)===false) && numberToChoose.length !==0){
  console.log("Ce chiffre est pair")
} else if(numberToChoose%2!==0 && (isNaN(numberToChoose)===false) && numberToChoose.length !==0) {
  console.log("Ce chiffre est impair")
};

if ((isNaN(numberToChoose))||numberToChoose===""){
  console.log("Vous ne m'aurez pas !")
};

if (numberToChoose<0){
  console.log("Ce chiffre est négatif !");
}