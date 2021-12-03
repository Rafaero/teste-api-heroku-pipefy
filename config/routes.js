const express = require('express');
const routes = express.Router();

let data = []

routes.get('/', (req, res) => {
    console.log(data)
    return res.json(data)
})

routes.post('/add', (req, res) => {

    const body = req.body

    if (!body) {

        return res.status(400).end()

    } else {

        data.push(body)
        return res.json(body);

    }
})

module.exports = routes;