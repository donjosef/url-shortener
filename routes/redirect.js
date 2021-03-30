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
      res.status(404).json({
        error: 'Url not found'
      })
    }

  } catch(err) {
    res.status(500).json({
      error: 'Server error'
    })
  }
})

module.exports = router