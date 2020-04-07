const brycpt = require('bcrypt')

function hash(password) {

    return brycpt.hashSync(password, 10)
}

function compare( password, hashPassword ) {

    return brycpt.compareSync(password, hashPassword)
}

module.exports = { hash , compare}