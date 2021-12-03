const express = require('express');
const routes = express.Router();

let data = []

routes.get('/', (req, res) => {
    return res.json(data)
})

routes.post('/add', (req, res) => {

    const body = req.body

    if (!body) {

        return res.status(400).end()

    } else {

        data.push(body.data.card.id)
        return res.json(body);

    }
})

module.exports = routes;