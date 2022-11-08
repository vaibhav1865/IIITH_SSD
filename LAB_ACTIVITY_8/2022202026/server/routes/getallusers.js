const Users = require('../models/UserSchema')
const bcrypt = require('bcrypt')
const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
    const users = await Users.find();
    res.status(200).json({ "data": users })
}
)


router.get('/:roll', async (req, res) => {
    const roll = req.params.roll
    const user = await Users.findOne({ roll });
    if (!user) {
        return res.status(200).json({ msg: "Student doesn't exist..." })
    }
    return res.status(200).json({ "data": user })
}
)


module.exports = router