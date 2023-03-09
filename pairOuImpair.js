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


function numberToChoose (number){
  
  if (number%2===0 && (isNaN(number)===false) && number.length !==0){
    let numberTrue = parseInt(number)
    console.log("Ce chiffre est pair")
  } else if(number%2!==0 && (isNaN(number)===false) && number.length !==0) {
    console.log("Ce chiffre est impair")
  };

  if ((isNaN(number))||number===""){
    console.log("Vous ne m'aurez pas !")
  };

  if (number<0){
    console.log("Ce chiffre est négatif !");
  }
}

const args = process.argv.slice(2);
numberToChoose(args[0]);
