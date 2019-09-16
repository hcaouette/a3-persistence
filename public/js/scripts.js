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
// window.onload = function () {
//   fetch('/header', {method:'GET', credentials:'include'})
//     .then((res) => {
//     // .then((data) => {
//       let header='',
//       jBod = res.json()
//       console.log(jBod)
//       header+=(JSON.parse(jBod).cont)
//       console.log(header)
//     })
// }


const addToCart = function(chz){
  console.log('attempting addToCart')
  let body=JSON.stringify({ cheese: chz})

  fetch( '/addToCart', {
    method:'POST',
    body,
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' }
  })
  .then( res => res.json() )
  .then( console.log )
}
