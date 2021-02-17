const express = require('express');
const router = express.Router();
const _ = require('lodash');
const sendEmail = require('../helpers/sendEmailNodemailer').sendEmail;
const sendEmailWithSendgrid = require('../helpers/sendEmailWithSendgrid').sendEmailWithSendgrid;

const Subscriber = require('../models/subscribe.model')

router.post('/', async (req, res, ) => {
  try {
    if(!req.body.email) {
      return res.status(404).json({status: 'error', error: "Email field is required"})
    }

    
    const searchedEmail = await Subscriber.findOne({email: req.body.email})

    if(!_.isEmpty(searchedEmail)) {
      return res.status(404).json({status: 'error', error: "Email is subscribed already"})
    }
    const subscribers = new Subscriber(req.body)
    await subscribers.save()

    const props = {
      email: req.body.email,
      subject: "Email from Grafxonmove",
      html: `
              <h1 style="color: red">Subscribe Letter</h1>
              <p>You are receiving this because you subscribe to GRAFXONMOVE</p>
              <p>Email: ${req.body.email}</p>
            `
    }

    await sendEmail(props)

    res.json({status: "success", data: subscribers})
  } catch (error) {
    res.status(400).json({status: "error", error})
  }
});


router.get('/', async (_req, res) => {
  try {
    const data = await Subscriber.find({})
    res.json({status: 'success', data})
  } catch (error) {
    res.status(400).json({status: "error", error})
  }
})

module.exports = router;
