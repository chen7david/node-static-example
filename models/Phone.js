const BaseModel = require('./BaseModel')
const crypto = require('crypto')


class Phone extends BaseModel {

    async $beforeInsert() {

        // GENERATES A USERID UPON INSERT
        this.phoneId = 'PH' + await crypto.randomBytes(5).toString('hex').toUpperCase()
        this.verificationCode = await crypto.randomBytes(3).toString('hex').toUpperCase()
    }

    async $beforeUpdate(){

        // SET EMAIL VERIFIED TO NULL WHEN EMAIL IS UPDATED
        if(this.email) this.emailVerified = null
            
        // SET PHONE-NUMBER VERIFIED TO NULL WHEN EMAIL IS UPDATED   
        if(this.phoneNumber) this.phoneNumberVerified = null
    }
}

module.exports = Phone