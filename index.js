const express   = require( 'express' ),
      app       = express(),
      morgan    = require( 'morgan' )
      session   = require( 'express-session' ),           //1
      passport  = require( 'passport' ),                  //2
      local     = require( 'passport-local' ).Strategy,
      GoogleStrategy = require('passport-google-oauth').OAuth2Strategy; //4
      bodyParser= require( 'body-parser' ),               //3
      favicon   = require( 'serve-favicon' ),
      path      = require( 'path' ),
      low       = require('lowdb'),
      FileSync  = require('lowdb/adapters/FileSync'),
      adapter   = new FileSync('db.json'),
      db        = low(adapter),
      port      = 3000

app.use( express.static('public'))
app.use( bodyParser.json())
app.use( morgan('combined'))
app.use( session({ secret:'fromage', name:'a3-cookie', resave:false, saveUninitialized:true }) )
app.use( passport.initialize() )
app.use( passport.session() )
passport.use(new GoogleStrategy({
    clientID: '443479129403-kgnq88arlnldecfi9qp87queha2fhl7r.apps.googleusercontent.com',
    clientSecret: 'RIPOr3cA2Vwyd00UiMNoxNfK',
    callbackURL: "https://a3-hcaouette.glitch.me/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
   return done(null, profile);
  }
));
passport.initialize()
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

//redirects
app.get(('/' || '/index.html'), (req, res) => res.sendFile(public/index.html))
app.get('/header', (req,res) => res.render('header.html'))
app.get('/cheeses.html', (req, res) => res.sendFile(public/cheeses.html))
app.get('/about.html', (req, res) => res.sendFile(public/about.html))
app.get('/cart.html', (req, res) => res.sendFile(public/cart.html))
app.get('/login.html', (req, res) => res.sendFile(public/login.html))
app.get('/auth/google', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }))
app.get('/auth/google/callback', passport.authenticate('google',
  { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });



app.post('/addToCart', function(req,res){
  let json=req.body,
  chz=json.cheese,
  creds=req.credentials,
  acct = 'plimarigreece@gmail.com'
  console.log('json:')
  console.log(req.bodyParser.json())
  console.log('creds:')
  console.log(creds)

  if(db.getState() !== null){
    if(db.get('accounts').find({user:acct})){
      //find user from query in accounts array, update chz type to n++
      db.get('accounts').find({user:acct}).update({chz:n => n + 1})
      res.status(200).send({message: 'Updated ${json.account} with ${json.cheese}'})
    }else{
      //no user found; write user and 0 of all chesses, then update correct cheese
      db.get('accounts').push({user:acct, 'ch1':0, 'ch2':0, 'ch3':0, 'ch4':0, 'ch5':0, 'ch6':0, 'ch7':0, 'ch8':0, total:0}).write()
      db.get('accounts').find({user:acct}).update({chz:n => n + 1})
      res.status(200).send({message: 'Made account for ${json.account} with 1 ${json.cheese}'})
    }
  }
  res.status(409).send({message: 'No database existed'});
  // }else{
  //   db.defaults(accounts: [ { user:"", 'ch1':0, 'ch2':0, 'ch3':0, 'ch4':0, 'ch5':0, 'ch6':0, 'ch7':0, 'ch8':0, total:0} ] ).write()
  // }
})


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

app.listen(port, () => console.log(`a3-hcaouette listening on port ${port}!`))
