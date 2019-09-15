const express   = require( 'express' ),
      app       = express(),
      cookPaser = require( 'cookie-parser')
      session   = require( 'cookie-session' ),
      passport  = require( 'passport' ),
      Local     = require( 'passport-local' ).Strategy,
      bodyParser= require( 'body-parser' )
      port = 3000

app.use(express.static('public'))
app.use(bodyParser.json())

//redirects
app.get(('/' || '/index.html'), (req, res) => res.sendFile(public/index.html))
app.get('/cheeses.html', (req, res) => res.sendFile(public/cheeses.html))
app.get('/about.html', (req, res) => res.sendFile(public/about.html))
app.get('/cart.html', (req, res) => res.sendFile(public/cart.html))
app.get('/login.html', (req, res) => res.sendFile(public/login.html))




app.listen(port, () => console.log(`Example app listening on port ${port}!`))
