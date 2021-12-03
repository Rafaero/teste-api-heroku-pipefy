const express = require('express');
const routes = express.Router();

let id = "";

routes.get('/', (req, res) => {
    return res.json(id)
})

routes.post('/add', (req, res) => {

    const body = req.body

    if (!body) {

        return res.status(400).end()

    } else {
        
        id = body.data.card.id
        
        const options = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjozMDE4MzUxODYsImVtYWlsIjoicmFmYWVsLnZpdG9yQGtleXJ1cy5jb20uYnIiLCJhcHBsaWNhdGlvbiI6MzAwMTI1MjMwfX0.pkyrXEz6FYJA3c9-t7iAg4GHBhAxGcL1SwISob6mH57_WvWY2eMcHiNUt389ouWo8mTVcrwV1Z4fcVB-1AATvg',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query: `mutation{
                updateCardField(input: {
                card_id: "${id}"
                field_id: "texto_curto"
                new_value: "Rafael de Paiva"
                }) {
                  clientMutationId
                  success
                }
      }`})


        };
        fetch('https://api.pipefy.com/graphql', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));

            return res.json(id);
    }
    
})

module.exports = routes;