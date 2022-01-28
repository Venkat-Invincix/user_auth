const bcryptjs = require('bcryptjs')

const password = 'screet123';

bcryptjs.genSalt()
    .then((salt) => {
        bcryptjs.hash(password, salt)
            .then((encrypted) => {
                console.log(encrypted)
            })
    })