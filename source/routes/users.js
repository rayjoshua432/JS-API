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
            message: "An Error Occured! Not Created."
        })
    }
})

router.get('/retrieve', async(req, res) => {
    const { usersInfo } = req.query

    const result = await retrievesrv(usersInfo)

    if (result) {
        res.status(200).send(result)
    } else {
        res.status(500).send({
            status: result,
            message: "An Error Occured! Not Retrieved."
        })
    }
})

router.post('/update', async(req, res) => {
    const { id, newUsername, newPassword } = req.body

    const result = await updatesrv(id, newUsername, newPassword)

    if (result) {
        res.status(200).send({
            status: result,
            message: "Successfully Updated!"
        })
    } else if (!result) {
        res.status(500).send({
            status: result,
            message: "An Error Occured! Not Updated."
        })
    } else {
        res.status(500).send({
            status: result,
            message: "An Error Occured! Not Updated."
        })
    }
})

router.get('/delete', async(req, res) => {
    const { id } = req.query

    const result = await deletesrv(id)

    if (result) {
        res.status(200).send({
            status: result,
            message: "Successfully Deleted!"
        })
    } else {
        res.status(500).send({
            status: result,
            message: "An Error Occured! Not Deleted."
        })
    }
})


module.exports = router