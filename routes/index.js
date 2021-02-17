const express = require('express');
const { sendContactEmail } = require('../helpers/sendEmailNodemailer');
const router = express.Router();

const Contact = require('../models/contact.model')

router.post('/contact', async (req, res, ) => {
  try {
    if(!req.body.name) {
      return res.status(404).json({status: 'error', error: "Name field is required"})
    }
    if(!req.body.email) {
      return res.status(404).json({status: 'error', error: "Email field is required"})
    }
    if(!req.body.phone) {
      return res.status(404).json({status: 'error', error: "Phone field is required"})
    }
    if(!req.body.company) {
      return res.status(404).json({status: 'error', error: "Company field is required"})
    }
    if(!req.body.message) {
      return res.status(404).json({status: 'error', error: "Message field is required"})
    }

    const contact = new Contact(req.body)

    await contact.save()

    const props = {
      email: req.body.email,
      subject: `Email from ${req.body.email}`,
      html: `
              <h1 style="color: red">Contact Form</h1>
              <p>Name: ${req.body.name}</p>
              <p>Email: ${req.body.email}</p>
              <p>Phone: ${req.body.phone}</p>
              <p>Company: ${req.body.company}</p>
              <p>Message: ${req.body.message}</p>
            `
    }

    await sendContactEmail(props)

    res.json({status: "success", data: contact})
  } catch (error) {
    res.status(400).json({status: "error", error})
  }
});

router.get('/contacts', async (_req, res) => {
  try {
    const data = await Contact.find({})
    res.json({status: 'success', data})
  } catch (error) {
    res.status(400).json({status: "error", error})
  }
})

module.exports = router;
