let id = 1;

let url = `https://api.api-onepiece.com/crews/${id}`;

let requisicao = new XMLHttpRequest();
requisicao.open('GET', url, false);
requisicao.send();
console.log(JSON.parse(requisicao.response)) 

let trip=JSON.parse(requisicao.response)
let p = document.getElementById(`trip`);
  p.innerHTML = `
  <div class="container">
  <h1 class="display-4">${trip.french_name }</h1>
  <p class="lead">Recompensa ${trip.total_prime}</p>
  <p class="lead">status ${trip.status}</p>
</div>
 
 

´`
 for(let i=1; i<=10; i++)
 {
 
 let id = i;
 let url = `https://api.api-onepiece.com/fruits/${id}`;


let requisicao = new XMLHttpRequest();
requisicao.open('GET', url, false);
requisicao.send();

if (requisicao.status === 200) {
 let resposta = JSON.parse(requisicao.responseText);
 
  let p = document.getElementById( `principal-${i}`);
  p.innerHTML = ` <img class="card-img-top" src="https://images.api-onepiece.com/fruits/${resposta.filename}">
  <div class="card-body">
    <h5 class="card-title">${resposta.french_name}</h5>
    <h5 class="card-title">${resposta.type}</h5>
    <p class="card-text">${resposta.description}</p>
 
  </div>
  `;
} else {
  console.error('Falha ao recuperar dados da API.');
}

}