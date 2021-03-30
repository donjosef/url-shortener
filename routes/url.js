const express = require('express')
const Url = require('../models/url')
const validUrl = require('valid-url')
const shortid = require('short-id')

const router = express.Router()

const baseUrl = process.env.BASEURL

router.post('/shorten', async (req, res) => {
    const {longUrl} = req.body

    if(validUrl.isUri(longUrl)) {
        const url = await Url.findOne({ longUrl })
        if(url) {
            res.json(url)
        } else {
            const urlCode = shortid.generate()
            const shortUrl = `${baseUrl}/${urlCode}`

            const url = new Url({
                urlCode,
                shortUrl,
                longUrl
            })

            const savedUrl = await url.save()
            res.json(savedUrl)
        }

    } else {
        const error = new Error('Please insert a valid URL')
        res.status(422).json({
            error: error.message
        })
    }

})

module.exports = router