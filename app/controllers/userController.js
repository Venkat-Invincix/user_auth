const User = require('../models/user')
const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')

const userController = {}

userController.register = (req, res) => {
    const body = req.body;
    const user = new User(body)
    bcryptjs.genSalt()
        .then((salt) => {
            bcryptjs.hash(user.password, salt)
                .then((encrypted) => {
                    user.password = encrypted;
                    user.save()
                        .then((user) => {
                            res.json(user)
                        })
                        .catch((err) => {
                            res.json(err.message)
                        })
                })
                .catch((err) => {
                    res.json(err.message)
                })
        })
        .catch((err) => {
            res.json(err.message)
        })
}

userController.login = (req, res) => {
    const body = req.body;
    User.findOne({ email: body.email })
        .then((user) => {
            if (!user) {
                res.json({ error: "Invalid username and password" })
            }

            bcryptjs.compare(body.password, user.password)
                .then((match) => {
                    if (match) {
                        // res.json(user)
                        const tokenData = {
                            _id: user._id,
                            email: user.email,
                            username: user.username
                        }
                        const token = jwt.sign(tokenData, 'test123', { expiresIn: '2d' });
                        res.json({ token: `Bearer ${token}` })
                    }
                    else {
                        res.json({ error: "Invalid username and password" })
                    }
                })

        })
        .catch((err) => {
            res.json(err.message)
        })
}

userController.allUser = (req, res) => {
    User.find()
        .then((users) => {
            res.json(users)
        })
        .catch((err) => {
            res.json(err.message)
        })
}

userController.account = (req, res) => {
    res.json(req.user);
}

module.exports = userController;