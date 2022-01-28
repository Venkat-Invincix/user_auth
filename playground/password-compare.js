const bcryptjs = require('bcryptjs')

const password = 'chkuuu1234'

const encyptedPassword = '$2a$10$baINxpdx8vQFtzbZMjETTOFXb4zf7lvN3SbdA6FsETeKH/LA3HXzu'


bcryptjs.compare(password, encyptedPassword)
    .then((pass) => {
        console.log(pass)
    })