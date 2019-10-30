const Joi = require('@hapi/joi')

// MAIN VALIDATORS
module.exports  = {

    validateHeader: (schema) => {
        return (req, res, next) => {
            const result = schema.validate(req.headers)
            if(result.error)
                return next(result.error)

            if(!req.this) req.this = {}
            req.this.header = result.value
            next()
        }
    },

    validateBody: (schema) => {
       return (req, res, next) => {
            const result = schema.validate(req.body)
            if(result.error)
                return next(result.error)

            if(!req.this) req.this = {}
            req.this.body = result.value
            next()
       }
    },

    schema: {
        
    // USERS
        createUser: Joi.object().options({abortEarly:false}).keys({
            username: Joi.string().min(1).max(20).required().trim(),
            firstName: Joi.string().min(1).max(20).required().trim(),
            lastName: Joi.string().min(1).max(20).required().trim(),
            dateOfBirth: Joi.string().min(1).max(20).required().trim(),
            sex: Joi.boolean(),
            countryOfBirth: Joi.string().min(1).max(20).trim(),
            placeOfBirth: Joi.string().min(1).max(20).trim(),
            password: Joi.string().min(8).max(30).required().trim(),
            passwordConfirm: Joi.any().valid(Joi.ref('password')),
        }),
        updateUser: Joi.object().options({abortEarly:false}).keys({
            email: Joi.string().email().required().trim(),
            phoneNumber: Joi.string().min(1).max(60).required().trim()
        }),
        username: Joi.object().options({abortEarly:false}).keys({
            username: Joi.string().min(1).max(20).required().trim()
        }),
        updatePassword: Joi.object().options({abortEarly:false}).keys({
            oldPassword: Joi.string().min(8).max(30).required().trim(),
            password: Joi.string().min(8).max(30).required().trim(),
            passwordConfirm: Joi.any().valid(Joi.ref('password')),
        }),
        recoverPassword: Joi.object().options({abortEarly:false}).keys({
            password: Joi.string().min(8).max(30).required().trim(),
            passwordConfirm: Joi.any().valid(Joi.ref('password')),
        }),
        syncUserRoles: Joi.object().options({abortEarly:false}).keys({
            roleIds: Joi.array().required()
        }),
        loginUser: Joi.object().options({abortEarly:false}).keys({
            username: Joi.string().min(1).max(20).required().trim(),
            password: Joi.string().min(8).max(30).required().trim()
        }),


    // ROLES
        createRole: Joi.object().options({abortEarly:false}).keys({
            name: Joi.string().min(1).max(60).required().trim(),
            description: Joi.string().min(1).max(60).trim()
        }),
        updateRole: Joi.object().options({abortEarly:false}).keys({
            name: Joi.string().min(1).max(60).trim(),
            description: Joi.string().min(1).max(60).trim().allow(null)
        }),
        syncRoleUsers: Joi.object().options({abortEarly:false}).keys({
            userIds: Joi.array().required()
        }),
        syncRoleActions: Joi.object().options({abortEarly:false}).keys({
            actionIds: Joi.array().required()
        }),


    // ACTIONS
        createAction: Joi.object().options({abortEarly:false}).keys({
            name: Joi.string().min(1).max(60).required().trim(),
            request: Joi.string().min(1).max(60).trim(),
            response: Joi.string().min(1).max(60).trim(),
            route: Joi.string().min(1).max(60).required().trim(),
            description: Joi.string().min(1).max(60).trim()
        }),
        updateAction: Joi.object().options({abortEarly:false}).keys({
            name: Joi.string().min(1).max(60).trim(),
            request: Joi.string().min(1).max(60).trim().allow(null),
            response: Joi.string().min(1).max(60).trim().allow(null),
            route: Joi.string().min(1).max(60).trim(),
            description: Joi.string().min(1).max(60).trim().allow(null)
        }),
        syncActionRoles: Joi.object().options({abortEarly:false}).keys({
            roleIds: Joi.array().required()
        })
        
    }
}