const express = require('express')
const router = express.Router()

router.get('/', async function(req, res) {
    console.log('/')

    res.render('index', {
        title: '/'
    })
})

module.exports = router