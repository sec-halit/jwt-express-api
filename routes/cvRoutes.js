const express = require('express')
const router = express.Router()
const {
  getCvs,
  setCv,
  updateCv,
  deleteCv,
} = require('../controllers/cvController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getCvs).post(protect, setCv)
router.route('/:id').delete(protect, deleteCv).put(protect, updateCv)

module.exports = router
