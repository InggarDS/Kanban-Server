const { Category } = require('../models')

class Controller {

    static create(req, res, next){
        
        const { name } = req.body
        let UserId = req.userId
        
        Category.create({
            name,
            UserId
        })
        .then(result => {
            res.status(201).json({
                message : 'success create category',
                category : result
            })
        })
        .catch(err => {
            return next(err)
        })

    }

    static update(req, res, next){

        Category.update({
            name : req.body.name,
           
        }, {
            where : {
                id : req.params.id
            },
            returning : true
        })
        .then(result => {
            return res.status(200).json({
                message : 'success update category',
            })
        })
        .catch(err => {
            return next(err)
        })
        

    }

    static read(req, res, next){

        Category.findAll({
            where : {UserId : req.userId}
        })
        .then(result=>{
            return res.status(200).json({
                categories : result
            })
        })
        .catch(err => {
            return next(err)
        })

    }

    static delete(req, res, next){

        Category.destroy({
            where : {
                id : req.params.id
            }
        })
        .then(result => {
            return res.status(200).json({
                message : 'Success delete category'
            })
        })
        .catch(err => {
            return next(err)        })

    }

   
}

module.exports = Controller