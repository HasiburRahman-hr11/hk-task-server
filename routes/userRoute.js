const { createNewUser, getSingleUser, updateUser } = require("../controller/userController");

const router = require("express").Router();


router.post('/user/add-new' , createNewUser);

router.get('/user/get-user/:userId' , getSingleUser);

router.put('/user/update/:userId' , updateUser);

module.exports = router;