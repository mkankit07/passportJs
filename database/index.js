const knex=require("knex")({
    client:"mysql",
    connection:{
        host:"localhost",
        user:"root",
        password:"Ankit@12",
        database:"passportJs"
    }
})
knex.schema.createTable("google1",(table)=>{
    table.increments("id")
    table.string("name")
    table.string("picture")
    table.string("email")
}).then((data)=>{
    console.log("table create");
}).catch((err)=>{
    console.log("table already created");
})


// knex.schema.createTable("github",(table)=>{
//     table.increments("id")
//     table.string("name")
//     table.string("picture")
//     table.string("email")
// }).then((data)=>{
//     console.log("table create");
// }).catch((err)=>{
//     console.log("table already created");
// })

module.exports=knex