// Import
const express = require('express')
const router = express.Router()

// Import services
const createsrv = require('../services/create')
const retrievesrv = require('../services/retrieve')
const updatesrv = require('../services/update')
const deletesrv = require('../services/delete')

router.post('/create', async(req, res) => {
    const { username, password } = req.body

    const result = await createsrv(username, password)

    if (result) {
        res.status(200).send({
            status: result,
            message: "Successfully Created!"
        })
    } else {
        res.status(500).send({
            status: result,
            message: "An Error Occured!"
        })
    }
})

router.get('/retrieve', async(req, res) => {
    const { username, password } = req.body

    const result = await createsrv(username, password)

    if (result) {
        res.status(200).send({
            status: result,
            message: "Successfully Created!"
        })
    } else {
        res.status(500).send({
            status: result,
            message: "An Error Occured!"
        })
    }
})


module.exports = router