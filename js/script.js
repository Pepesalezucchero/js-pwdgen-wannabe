// chiedo a User il suo nome, cognome e colore preferito, il tutto seguito da 23

//chiedo il nome
const userName = (prompt("Qual'è il tuo nome?"));
console.log(userName);

//chiedo il cognome
const userSurname = (prompt("Qual'è il tuo cognome?"));
console.log(userSurname);

//chiedo il colore preferito
const userFavouriteColor = (prompt("qual'è il tuo colore preferito?"));
console.log(userFavouriteColor);

//aggiungo il 23
const userCasualNumber = 23;
console.log(userCasualNumber);

//aggiungo tutto sulla pagina HTML
let info = `${userName}${userSurname}${userFavouriteColor}${userCasualNumber}`

document.getElementById("mio_id").innerHTML = info