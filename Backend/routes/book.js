const express = require('express');

const { createTank, getListTanks, getTankById, updateTankById, deleteTankById } = require('../controllers/book');

const router = express.Router();

router.post('/tanks', createTank);
router.get('/tanks', getListTanks);
router.get('/tanks/:tankId', getTankById);
router.put('/tanks/:tankId', updateTankById);
router.delete('/tanks/:tankId', deleteTankById);

module.exports = router;
