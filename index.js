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

// a simple table to store non-persistent data. for assignment #3
// your data must be persistent between sessions using a database (lowdb)
const users = [
  { username:'charlie', password:'charliee' },
  { username:'bill',    password:'billl' }
]

// all authentication requests in passwords assume that your client
// is submitting a field named "username" and field named "password".
// these are both passed as arugments to the authentication strategy.
const myLocalStrategy = function( username, password, done ) {
  // find the first item in our users array where the username
  // matches what was sent by the client. nicer to read/write than a for loop!
  const user = users.find( __user => __user.username === username )

  // if user is undefined, then there was no match for the submitted username
  if( user === undefined ) {
    /* arguments to done():
     - an error object (usually returned from database requests )
     - authentication status
     - a message / other data to send to client
    */
    return done( null, false, { message:'user not found' })
  }else if( user.password === password ) {
    // we found the user and the password matches!
    // go ahead and send the userdata... this will appear as request.user
    // in all express middleware functions.
    return done( null, { username, password })
  }else{
    // we found the user but the password didn't match...
    return done( null, false, { message: 'incorrect password' })
  }
}

passport.use( new Local( myLocalStrategy ) )
passport.initialize()

app.post(
  '/login',
  passport.authenticate( 'local' ),
  function( req, res ) {
    console.log( 'user:', req.user )
    res.json({ status:true })
  }
)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
