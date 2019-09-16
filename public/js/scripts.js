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

$(document).ready(function(){$( "#headerIns" ).load( "/header.html" );})

const login = function(){
  const inputEmail = document.querySelector( '#inputEmail' ),
        inputPassword = document.querySelector( '#inputPassword'),
        json = { email: inputEmail.value,
                  pass: inputPassword.value }
  const body=JSON.stringify(json);

  fetch( '/login', {
      method:'POST',
      body
      headers: { 'Content-Type': 'application/json' }
    })
    .then( res => res.json() )
    .then( console.log )
}

const addToCart = function(chz){

}
