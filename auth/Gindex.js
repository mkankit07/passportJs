
const express=require("express")
const app=express()
const knex =require("../database/index")
const passport=require("passport")
const GoogleStrategy=require("passport-google-oauth2").Strategy

app.use(passport.initialize())

// passport.serializeUser(function(user,done){
//     done(null,user)
// });
const value=passport.use(new GoogleStrategy({
    clientID:"850526827654-9sohb5ru7m6ao1mbq12ekgm8k3qclc80.apps.googleusercontent.com",
  clientSecret:"AJGtxZOsPqip0jT6HfA733yB",
  callbackURL :"http://localhost:3201/google/callback",
  passReqTocallback:true
},
function(request,accessToken,refreshToken,profile,done){
  const data11={
    name:profile.displayName,
    picture:profile._json.picture,
    email:profile._json.email
  }
  knex("google1").insert(data11).then((data)=>{
    console.log("insert");
  })
    done(null,profile)

}))