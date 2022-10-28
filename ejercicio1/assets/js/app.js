console.log("Hola");


const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');//Se agregó . porque es una clase
const $b = document.querySelector('.blog');//Se cambió el # por . ya que es una clase en 
const $l = document.querySelector('.location');

//Se gregó async a la función
async function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  console.log(data);
  $n.textContent = '${data.name}';
  $b.textContent = '${data.blog}';
  $l.textContent = '${data.location}';
}

function handleError(err) {
  let error = err;
  console.log('OH NO!');
  console.log(err);
  //Se agregó $ a  n.textContent. Además de ; al final de la instrucción
  $n.textContent = `Algo salió mal: ${error}`;
}

displayUser('stolinski').catch(handleError);