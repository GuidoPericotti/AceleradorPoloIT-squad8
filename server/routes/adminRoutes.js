const express = require('express');
const router = express.Router();
const controller = require('../controllers/adminController.js');

router.get('/', controller.getAllAdminAccess);
router.get('/:id', controller.getAdminById);
router.post('/', controller.createAdminUser);
router.put('/:id', controller.updateAdminUser);
router.delete('/:id', controller.deleteAdminUser);

module.exports = router;