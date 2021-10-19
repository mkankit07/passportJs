// const express=require("express")
// const  knex=require("../database/index")
// const router = express.Router()


// router.post("/insert", (req, res) => {
//     knex("google1").insert(req.body).then((data) => {
//         res.send({ "massage": "data insert" })
//     }).catch((err) => {
//         res.send(err.massage)
//     })
// })

// router.put("/update/:id", (req, res) => {
//     knex.select("*").from("google1").where({ "id": req.params.id }).update(req.body).then((data) => {
//         req.send("data update")
//     }).catch((err) => {
//         res.send(err.massage)
//     })
// })
// router.delete("/del/:id", (req, res) => {
//     knex.select("*").from("google1").where({ 'id': req.params.id }).del().then((data) => {
//         res.send("data delete")
//     }).catch((err) => {
//         res.send(err.massage)
//     })
// })


// router.get("/get/:id",  (req, res) => {
//     knex.select("*").from("gooogle1").where({ id: req.params.id }).then((data) => {
//         res.send(req.userdata)
//     }).catch((err) => {
//         res.send(err.massage)
//     })
// })

// module.exports=router()