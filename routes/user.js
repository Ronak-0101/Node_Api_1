const express = require('express');
const { handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserByIs,
    handleDeleteUserById,
    handleCreateNewUser
} = require("../controllers/user");
// const { handleGetAllUsers } = require('../controllers/user');
const router = express.Router();

router
    .route("/")
    .get(handleGetAllUsers)
    .post(handleCreateNewUser);

router
    .route("/:id")
    .get(handleGetUserById)
    .patch(handleUpdateUserByIs)
    .delete(handleDeleteUserById);

module.exports = router;
