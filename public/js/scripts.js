// Add some Javascript code here, to run on the front end.

console.log("Welcome to assignment 3!")
/**
fetch( '/ ', {
    method:'POST',
    body:JSON.stringify({ username:'hc', password:'hc1' }),
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' }
  })
  .then( res => res.json() )
  .then( console.log )
*/

// const login = function(){
//   const inputEmail = document.querySelector( '#inputEmail' ),
//         inputPassword = document.querySelector( '#inputPassword'),
//         json = { email: inputEmail.value,
//                   pass: inputPassword.value }
//   const body=JSON.stringify(json);
//
//   fetch( '/login', {
//       method:'POST',
//       body
//       headers: { 'Content-Type': 'application/json' }
//     })
//     .then( res => res.json() )
//     .then( console.log )
//
document.getElementById("chz1").onclick = addToCart('chz1');
document.getElementById("chz2").onclick = addToCart('chz2');
document.getElementById("chz3").onclick = addToCart('chz3');
document.getElementById("chz4").onclick = addToCart('chz4');
document.getElementById("chz5").onclick = addToCart('chz5');
document.getElementById("chz6").onclick = addToCart('chz6');
document.getElementById("chz7").onclick = addToCart('chz7');
document.getElementById("chz8").onclick = addToCart('chz8');

const addToCart = function(chz){
  console.log('attempting addToCart')
  fetch( '/addToCart', {
    method:'POST',
    body:JSON.stringify({ cheese: chz}),
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' }
  })
  .then( res => res.json() )
  .then( console.log )
}
