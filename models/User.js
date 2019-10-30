const BaseModel = require('./BaseModel')
const crypto = require('crypto')
const bcrypt = require('bcrypt')


class User extends BaseModel {

    async $beforeInsert() {

        // GENERATES A USERID UPON INSERT
        this.userId = 'US' + await crypto.randomBytes(5).toString('hex').toUpperCase()

        // HASHES PASSWORD UPON INSERT
        this.password = await bcrypt.hash(this.password,10)
    }

    async verifyPassword(password){
        return await bcrypt.compare(password, this.password)    
    }
}

module.exports = User