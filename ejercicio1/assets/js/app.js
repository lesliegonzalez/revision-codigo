console.log("Hola");


const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');//Se agregó . porque es una clase
const $b = document.querySelector('.blog');//Se cambió el # por . ya que es una clase
const $l = document.querySelector('.location');

//Se gregó async a la función
async function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`)
    .then( (response) => response.json()); //Se agregó esta instrucción
  console.log(response); //Se cambió data a response
  $n.textContent = `${response.name}`; //se modificó data por response.
  $b.textContent = `${response.blog}`; //se modificó data por response.
  $l.textContent = `${response.location}`; //se modificó data por response.
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`; //Se agregó $ a  n.textContent. Además de ; al final de la instrucción
}

displayUser('stolinski').catch(handleError);