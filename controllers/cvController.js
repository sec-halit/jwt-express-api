const asyncHandler = require('express-async-handler')

const Cv = require('../models/cvModel')

// @desc    Get goals
// @route   GET /api/cvs
// @access  Private
const getCvs = asyncHandler(async (req, res) => {
  const cvItem = await Cv.find({ userId: req.user.id })

  res.status(200).json(cvItem);
})

// @desc    Set goal
// @route   POST /api/setCv
// @access  Private
const setCv = asyncHandler(async (req, res) => {
  if (!req.body.info) {
    res.status(400)
    throw new Error('Please add a text field')
  }

  const cvItem = await Cv.create({
    works: req.body.works,
    educations: req.body.educations,
    skills: req.body.skills,
    references: req.body.references,
    projects: req.body.projects,
    info: req.body.info,
    userId: req.user.id,
  })

  res.status(200).json(cvItem)
})

// @desc    Update cv
// @route   PUT /api/cvs/:id
// @access  Private
const updateCv = asyncHandler(async (req, res) => {
  const cvItem = await Cv.findById(req.params.id)

  if (!cvItem) {
    res.status(400)
    throw new Error('Goal not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the goal user
  if (cvItem.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  const updatedCv = await Cv.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedCv)
})

// @desc    Delete cv
// @route   DELETE /api/cvs/:id
// @access  Private
const deleteCv = asyncHandler(async (req, res) => {
  const cvItem = await Cv.findById(req.params.id)

  if (!cvItem) {
    res.status(400)
    throw new Error('Goal not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the goal user
  if (cvItem.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  await cvItem.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getCvs,
  setCv,
  updateCv,
  deleteCv,
}
