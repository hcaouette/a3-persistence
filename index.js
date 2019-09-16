const express   = require( 'express' ),
      app       = express(),
      session   = require( 'express-session' ),           //1
      passport  = require( 'passport' ),                  //2
      local     = require( 'passport-local' ).Strategy,
      GoogleStrategy = require('passport-google-oauth').OAuth2Strategy; //4
      bodyParser= require( 'body-parser' ),               //3
      favicon   = require( 'serve-favicon' ),
      path      = require( 'path' ),
      low = require('lowdb'),
      FileSync = require('lowdb/adapters/FileSync'),
      adapter = new FileSync('db.json'),
      db = low(adapter),
      port = 3000

app.use(express.static('public'))
app.use(bodyParser.json())
app.use( session({ secret:'cats cats cats', resave:false, saveUninitialized:false }) )
app.use( passport.initialize() )
app.use( passport.session() )
passport.use(new GoogleStrategy({
    clientID: '443479129403-kgnq88arlnldecfi9qp87queha2fhl7r.apps.googleusercontent.com',
    clientSecret: 'RIPOr3cA2Vwyd00UiMNoxNfK',
    callbackURL: "https://a3-hcaouette.glitch.me/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
       // User.findOrCreate({ googleId: profile.id }, function (err, user) {
         return done(null, profile);
       // });
  }
));
// passport.use( new Local( myLocalStrategy ) )
passport.initialize()
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

// a simple table to store non-persistent data. for assignment #3
// your data must be persistent between sessions using a database (lowdb)
const users = [
  { username:'hc', password:'hc1' },
  { username:'user', password:'userpass' }
]

//redirects
app.get(('/' || '/index.html'), (req, res) => res.sendFile(public/index.html))
app.get('/cheeses.html', (req, res) => res.sendFile(public/cheeses.html))
app.get('/about.html', (req, res) => res.sendFile(public/about.html))
app.get('/cart.html', (req, res) => res.sendFile(public/cart.html))
app.get('/login.html', (req, res) => res.sendFile(public/login.html))
app.get('/auth/google', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }))
app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), function(req, res) { res.redirect('/'); });

//catches request to '/login' from client
// app.post('/login', passport.authenticate( 'local' ), function( req, res ) {
//   console.log( 'user:', req.user )
//
//   res.json({ status:true })
// })
//catches request to '/test' from client


/** all authentication requests in passwords assume that your client
    is submitting a field named "username" and field named "password".
    these are both passed as arugments to the authentication strategy.*/
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
    console.log('user found')
    // we found the user and the password matches!
    // go ahead and send the userdata... this will appear as request.user
    // in all express middleware functions.
    return done( null, { username, password })
  }else{
    // we found the user but the password didn't match...
    return done( null, false, { message: 'incorrect password' })
  }
}
//end myLocalStrategy func


passport.serializeUser( ( user, done ) => done( null, user) )
// "name" below refers to whatever piece of info is serialized in seralizeUser,
// in this example we're using the username
passport.deserializeUser( ( username, done ) => {
  const user = users.find( u => u.username === username )
  console.log( 'deserializing:', name )
  if( user !== undefined ) {
    done( null, user )
  }else{
    done( null, false, { message:'user not found; session not restored' })
  }
})

// Set some defaults (required if your JSON file is empty)
db.defaults({ posts: [], user: {}, count: 0 })
  .write()
// Add a post
db.get('posts')
  .push({ id: 1, title: 'lowdb is awesome'})
  .write()
// Set a user using Lodash shorthand syntax
db.set('user.name', 'typicode')
  .write()
// Increment count
db.update('count', n => n + 1)
  .write()

app.listen(port, () => console.log(`a3-hcaouette listening on port ${port}!`))
