const { decode } = require('../helpers/jwt')
const { User } = require('../models')

function authentication(req, res, next){

    try {
        let decoded = decode(req.headers.access_token)
        // req.userId = decoded.id
 
        User.findOne({
            where : { id : decoded.id}
        })
        .then(result => {

            if ( result ){
                req.userId = result.id
                return next()
            } else {

                return res.status(400).json({
                    name : 'Not Found',
                    errors : [{message : 'user not found'}]
                })
            }

        })
        .catch(err => {

            return res.status(400).json({
                name : 'Unauthorized',
                errors : [{message : 'user not authenticated'}]
            })

        })
        
    } catch(err) {

        return next(err)

    }

}

module.exports = authentication