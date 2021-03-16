// Consegna
// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50

var button = document.getElementById('mybutton');
button.addEventListener('click',
function campominato(){
   livelDifficult( prompt('Scegli il livello di difficoltà (0,1,2): '));
  // var difficolta = prompt('Scegli il livello di difficoltà (0,1,2): ');
  //
  // if (difficolta == 0){
  //   var numMax = 100;
  //   var numMin = 1;
  // }else if (difficolta == 1){
  //   var numMax = 80;
  //   var numMin = 1;
  // }else if (difficolta == 2){
  //   var numMax = 50;
  //   var numMin = 1;
  //
  // }

  var randomArr = [];
  for (var i = 0; i < 16; i++) {
    var rnd = Math.floor(Math.random() * numMax + numMin);
    // console.log('indici', i, rnd);
    if(randomArr.includes(rnd)){
      i--;
    }else {
      randomArr.push(rnd);
    }
   // console.log('indici', i, arr[i]);
  }
  console.log(randomArr);
  var conteggio = 0;
  var giriUtente=84;
  var utenteArr = [];
  for (var j = 0; j < giriUtente; j++){
    var numUtente = parseInt(prompt('Inserisci un numero: '));
    // console.log('Numero utente:', numUtente);
    if((difficolta == 0) && (numUtente < 1 || numUtente >100)) {
      alert('Il numero deve essere compreso da 1 e 100');
      j--;
    }
    else if((difficolta == 1) && (numUtente < 1 || numUtente >80)) {
      alert('Il numero deve essere compreso da 1 e 80');
      j--;
    }
    else if((difficolta == 2) && (numUtente < 1 || numUtente >50)) {
      alert('Il numero deve essere compreso da 1 e 50');
      j--;
    }
    else if(utenteArr.includes(numUtente)){
      alert('Il numero è gia stato inserito')
      j--;
    }

    else {
      utenteArr.push(numUtente);
      conteggio++;

      if (randomArr.includes(numUtente)) {
        console.log('Hai perso!!!!', 'Il tuo punteggio è: ',conteggio );
        var testo = document.getElementById('result');
        testo.innerHTML = 'Hai perso!!!! ' + ' Il tuo punteggio è: ' + conteggio;
        break;

      }else if (utenteArr.length == giriUtente){
        console.log('Hai vinto!!!!', 'Il tuo punteggio è: ', giriUtente);
        var testo = document.getElementById('result');
        testo.innerHTML = 'Hai vinto!!!! ' + ' Il tuo punteggio è: ' + giriUtente;
      }
    }
  }
  // console.log(utenteArr);
})


function livelDifficult(difficolta){
  // switch ( difficolta) {
  //   case 0:
  //   var numMax = 100;
  //   var numMin = 1;
  //   break;
  //
  //   case 1:
  //   var numMax = 80;
  //   var numMin = 1;
  //   break;
  //
  //   case 2:
  //   var numMax = 50;
  //   var numMin = 1;
  //   break;
  // }
// return difficolta;

}

// var result = livelDifficult( prompt('Scegli il livello di difficoltà (0,1,2): '));
// console.log(result);
