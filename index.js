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
app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), function(req, res) { res.redirect('/'); });

app.post('/addToCart', function(req,res){
  let json=req.bodyParser.json(),
      acct=json.account,
      chz=json.cheese

  if(db.getState() !=== null){
    if(db.get('accounts').find({user:acct}){
      db.get('accounts').find({user:acct}).update(chz:n => n + 1)
      //find user from query in accounts array, update chz type to n++
    }
  }else{
    db.defaults(accounts: [ { user:"", 'ch1':0, 'ch2':0, 'ch3':0, 'ch4':0, 'ch5':0, 'ch6':0, 'ch7':0, 'ch8':0, total:0} ] ).write()
  }
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

// // Set some defaults (required if your JSON file is empty)
// db.defaults(accounts: [ { user:"", ch1:0, ch2:0, ch3:0, ch4:0, ch5:0, ch6:0, ch7:0, ch8:0, total:0} ] ).write()
// // Add a post
// db.get('accounts').push({ id: 1, title: 'lowdb is awesome'}).write()
// //find a post
// db.get('accounts').find({ id: 1 }).value()
// // Set a user using Lodash shorthand syntax
// db.set('user.name', 'typicode').write()
// // Increment count
// db.update('count', n => n + 1).write()

app.listen(port, () => console.log(`a3-hcaouette listening on port ${port}!`))
