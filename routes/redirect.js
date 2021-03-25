const express = require('express');
const Url = require('../models/url')
const router = express.Router()

router.get('/:code', async (req, res) => {
  const code = req.params.code

  try {
    const url = await Url.findOne({ urlCode: code})

    if(url) {
      res.redirect(url.longUrl)
    } else {
      res.status(404).json('Url not found')
    }

  } catch(err) {
    console.log(err)
    res.status(500).json('Server erro')
  }
})

module.exports = router