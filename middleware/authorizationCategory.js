const { Category } = require('../models')

function authorized(req, res, next){

    Category.findOne({
        where : { id : req.params.id}
    })
    .then(result => {

        if ( result ) {
            
            if (result.UserId === req.userId ){
                return next()
            } else {
                return next({
                    name : 'Unauthorized',
                    errors : [{message : "you're not authorized"}]
                })
            }
        } else {
            return next({
                name : 'Not Found',
                errors : [{message : "user not found"}]
            })
        }
        
    })
    .catch(err =>{
        return next(err)
    })
}

module.exports = authorized