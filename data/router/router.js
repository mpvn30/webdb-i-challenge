const express = require("express");

const knex = require("../dbConfig.js")

const router = express.Router();

//GET
router.get("/", (req, res) => {
    knex.select("*").from("accounts")
    .then(response => {
        res.status(200).json(response);
    })
    .catch(error => {
        res.status(500).json({ error: "GET / ERROR" })
    })
})

//GET BY ID
router.get("/:id", (req, res) => {
    const id = req.params.id; 
    knex.select("*")
    .from("accounts")
    .where("id", "=", id)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(error => {
        console.log("error from get id", error)
        res.status(500).json({error: "GET /:id ERROR"})
    })
}); 

//POST
router.post("/", (req, res) => {
    const body = req.body; 
    knex.select("*")
    .from("accounts")
    .insert(body, "id")
    .then(post => {
        res.status(200).json(post)
    })
    .catch(error => {
        res.status(500).json({error: "POST / ERROR" })
    })
});

//DELETE
router.delete("/:id", (req, res) => {
    const id =  req.params.id; 
    const body = req.body; 
    knex.select("*")
    .from("accounts")
    .where({id})
    .delete(body)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(error => {
        console.log("error from delete", error)
        res.status(500).json({ error: "DELETE /:id ERROR" })
    })
})

//PUT
router.put("/:id", (req, res) => {
    const id = req.params.id;
    const body = req.body;
    knex.select("*")
    .from("accounts")
    .where({id})
    .update(body)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(error => {
        res.status(500).json({ error: "PUT /:id ERROR" })
    })
})

module.exports = router;