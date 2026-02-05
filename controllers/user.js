const User = require("../models/user");

async function handleGetAllUsers(req, res) {
    const allDbUsers = await User.find({})
    return res.json(allDbUsers);
}

async function handleGetUserById(req, res) {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "user not found" });
    return res.json(user);
}

async function handleUpdateUserByIs(req, res) {
    await User.findByIdAndUpdate(req.params.id, { lastName: "Changed" })
    return res.json({ status: "Success" })
}

async function handleDeleteUserById(req, res) {
    await User.findByIdAndDelete(req.params.id);
    return res.json({ status: "success" })
}

async function handleCreateNewUser(req, res){
    const body = req.body;
    if (
        !body || !body.firstName || !body.lastName || !body.email || !body.jobTitle || !body.gender
    ) {
        return res.status(400).json({ msg: "All fields are req..." });
    }

    const result = await User.create({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        gender: body.gender,
        jobTitle: body.jobTitle,
    })
    console.log("Result", result);
    return res.status(201).json({ msg: "Success", id: result._id });
}

module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserByIs,
    handleDeleteUserById,
    handleCreateNewUser,
}