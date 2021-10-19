const express=require("express")
const app=express()
const home1=require("./database/index")
const passport=require("passport")
const home=require("./auth/Gindex")
const hom=require("./auth/github")
app.use(express.json())
app.use(passport.initialize())
app.get('/',(req,res)=>{
  res.send('<a href="/auth/google">Authenticate With Google</a>')
})
app.get('/auth/google',passport.authenticate('google', { scope: ['profile','email'] }))

app.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login' }),
function(req, res) {
  res.redirect('/success');
});

// app.get('/f',(req,res)=>{
//   res.send('<a href="/auth/facebook">Authenticate With facebook</a>')
// })
// app.get('/auth/facebook',passport.authenticate('google', { scope: ['profile','email'] }))

// app.get('/facebook/callback', passport.authenticate('google', { failureRedirect: '/login' }),
// function(req, res) {
//   res.redirect('/success');
// });




app.get('/g',(req,res)=>{
res.send('<a href="/auth/github">Authenticate With github</a>')})
app.get('/auth/github',
  passport.authenticate('github'));
app.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
   
    // Successful authentication, redirect home.
    res.redirect('/success')
  });
app.listen(3201,()=>{
    console.log("server connected");
})

