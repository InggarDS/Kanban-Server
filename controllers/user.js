const { User } = require('../models')
const { generateToken } = require('../helpers/jwt')
const { compare } = require('../helpers/bcrypt')
// const { OAuth2Client } = require('google-auth-library')

class Controller {

    static register(req, res, next){
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

           return res.status(201).json({
                message : 'success create user',
                users : {
                    "id" : payload.id,
                    "email" : payload.email,
                    "access_token" : token
                }
            })
        })
        .catch(err => {

           return next(err)
        })
    }

    static login(req, res, next){

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
                   return next({
                       name : 'bad request',
                       errors : [{message : 'invalid username/email'}]
                   })

                }
            } else {
                return next({
                    name : 'bad request',
                    errors : [{message : 'invalid username/email'}]
                })
            }
        })
        .catch(err => {
            return next(err)
        })

    }

    static googleSign(req, res, next){
        const { email, name } = req.body

            User.findOne({
                where : { email }
            })
            .then(data => {
                if (data){
                    let user = {
                        id:data.id,
                        username : data.name,
                        email : data.email,
                    }

                    let token = generateToken(user)

                    res.status(200).json({
                        'access_token' : token
                    })
                } else {
                    let newUser = {
                        email : email,
                        password : 'GoogleAuth'
                    }

                    User.create(newUser)
                    .then(data => {

                        let user =  {
                            id : data.id,
                            username : data.username,
                            email : data.email
                        }
            
                        let token = generateToken(user);
            
                        res.status(201).json({
                            message : 'success add user !!',
                            'id' : data.id,
                            'email' : data.email,
                            'access_token' : token
                        })

                    })
                    .catch(err => {
                        next(err)
                    })
                }
            })   
    }
}

module.exports = Controller