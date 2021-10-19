
const express=require("express")
const fs=require("fs")
const app=express()
const router=express.Router()
const knex =require("../database/index")
const passport=require("passport")
const GithubStrategy=require("passport-github2").Strategy

app.use(passport.initialize())
passport.serializeUser(function(user,done){
    done(null,user)
    console.log(user);
});
const value=passport.use(new GithubStrategy({
    clientID:"a6700d6e21c711a2bb4a",
  clientSecret:"d9ac42b7bffc3ea95a0b210504b24f85f67992be",
  callbackURL :"http://localhost:3201/auth/github/callback",
  passReqTocallback:true
  
},

function(request,accessToken,refreshToken,profile,done){
    console.log(profile);
    console.log(accessToken);
    console.log(refreshToken);
//   const data11={
//     name:profile.displayName,
//     picture:profile._json.picture,
//     email:profile._json.email
//   }
//   knex("github").insert(data11).then((data)=>{
//     console.log("insert");
//   })
    done(null,profile)

}))