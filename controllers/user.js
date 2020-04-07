const { User } = require('../models')
const { generateToken } = require('../helpers/jwt')
const { compare } = require('../helpers/bcrypt')

class Controller {

    static register(req, res){

        const { email, password } = req.body
        User.create({
            email,
            password
        })
        .then(result => {

            let payload = {
                id : result.id,
                email : result.email
            }

            let token = generateToken(payload)
            res.status(201).json({
                message : 'success create user',
                users : {
                    id : payload.id,
                    email : payload.email,
                    access_token : token
                }
            })
        })
    }

    static login(req, res){

        User.findOne({
            where : {
                email : req.body.email
            }
        })
        .then(result => {
            
            if ( result ){
                if ( compare(req.body.password, result.password)){
                    
                    let payload = {
                        id : result.id,
                        email : result.email
                    }

                    let token = generateToken(payload)

                    res.status(200).json({
                        'access_token' : token
                    })

                } else {
                    //not found

                }
            } else {
                //not found
            }
        })

    }



}

module.exports = Controller