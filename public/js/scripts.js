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
window.onload = function () {
    fetch('/header', {method:'GET', credentials:'include'})
        .then((res) => {
        // .then((data) => {
          let header='',
          jBod = res.json()
          console.log(jBod)
          header+=(JSON.parse(jBod).cont)
          console.log(header)


            // $('.results-table tbody').remove()
            // $('.results-table thead').css('visibility', 'visible')
            // let tbody = $('<tbody />').appendTo($('.results-table'))
            // for (let track of data) {
            //     let date = new Date(track.startTime);
            //     let timestamp = `${date.getHours()}:${date.getMinutes()}`
            //     $('<tr>').appendTo(tbody)
            //         .append(`<td>${track.ownedByUser ? '<span class="fas fa-trash-alt"></span>' : ''}</td>`)
            //         .append(`<td>${track.title}</td>`)
            //         .append(`<td>${track.artist}</td>`)
            //         .append(`<td style="text-align:right">${timestamp}</td>`)
            //         .append(`<td style="display: none">${track.id}</td>`)
            // }
        })
}


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
