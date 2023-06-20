const { createNewSector, getAllSectors } = require("../controller/sectorController");

const router = require("express").Router();

router.post('/sector/add-new' , createNewSector);

router.get('/sector/all' , getAllSectors);

module.exports = router;