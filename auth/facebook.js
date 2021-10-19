
// const express=require("express")
// const app=express()
// const knex =require("../database/index")
// const passport=require("passport")
// const facebookStrategy=require("passport-facebook").Strategy

// app.use(passport.initialize())

// // passport.serializeUser(function(user,done){
// //     done(null,user)
// // });
// const value=passport.use(new facebookStrategy({
//     clientID:"293122952363682",
//   clientSecret:"61b62ec9ddf8716946aa25de980e3a26",
//   callbackURL :"http://localhost:3201/google/callback",
//   passReqTocallback:true
// },
// function(request,accessToken,refreshToken,profile,done){
//   const data11={
//     name:profile.displayName,
//     picture:profile._json.picture,
//     email:profile._json.email
//   }
//   knex("google1").insert(data11).then((data)=>{
//     console.log("insert");
//   })
//     done(null,profile)

// }))