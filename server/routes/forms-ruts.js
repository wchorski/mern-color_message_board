const express = require('express')
const router = express.Router()
const Forms = require('../models/form-mdl')

//* Getting all
router.get('/', async (req, res) => {
  try {
    const forms = await Forms.find()
    res.json(forms)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

//* Getting One
router.get('/:id', getForms, (req, res) => {
  res.json(res.forms)
})

//* Creating one
router.post('/', async (req, res) => {

  const form = new Forms({
    id: req.body.id,
    name: req.body.name,
    message: req.body.message,
    color: req.body.color
  })

  try {
    const newForm = await form.save()
    res.status(201).json(newForm)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

//* Updating One
router.patch('/:id', getForms, async (req, res) => {
  if (req.body.id != null) {
    res.forms.id = req.body.id
  }
  if (req.body.name != null) {
    res.forms.name = req.body.name
  }
  if (req.body.message != null) {
    res.forms.message = req.body.message
  }
  if (req.body.color != null) {
    res.forms.color = req.body.color
  }
  try {
    const updatedForm = await res.forms.save()
    res.json(updatedForm)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

//* Deleting One
router.delete('/:id', getForms, async (req, res) => {
  try {
    const formData = res.forms
    console.log("deleted: " + formData.name);
    await res.forms.remove()
    return res.status(200).json({ success: true, message: `Deleted Form`, idNum: formData._id, name: formData.name}, )
  } catch (err) {
    console.log("Form Deletion error");
    res.status(500).json({ message: err.message })
  }
})

async function getForms(req, res, next) {
  let forms
  try {
    forms = await Forms.findById(req.params.id)
    if (forms == null) {
      return res.status(404).json({ message: 'Cannot find form' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.forms = forms
  next()
}


module.exports = router