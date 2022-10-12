const express = require('express')
const router = express.Router()
const { client } = require('../server')
const db = client.db('chatbot')

router.get('/', async function(req, res) {
    console.log('/hello')

    res.render('hello', {
        title: 'hello'
    })
})

router.get('/:name', async function(req, res) {
    console.log('name=:name')
    const name = req.params.name

    console.log('Bonjour ' + name + ' !')

    res.render('hello', {
        title: 'hello:name'
    })
})

module.exports = router