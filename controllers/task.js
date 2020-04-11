const { Task, Category } = require('../models')

class Controller {

    
    static read(req, res, next){
        
        Task.findAll({
            where : { UserId : req.userId },
             include : [{
                 model : Category,
                 where : { UserId : req.userId }
             }],
             order : [
                 ['createdAt', 'ASC']
             ]
        })
        .then(result => {
            
            return res.status(200).json({
                tasks : result
        })
 
        })
        .catch(err => {
            return next(err)
        })

    }

    static create(req, res, next){
        const { title, CategoryId } = req.body
        const UserId  = req.userId

        Task.create({
            title,
            UserId,
            CategoryId
        })
        .then(result => {
            return res.status(200).json({
                message : 'success create task',
                task : result
            })
        })
        .catch(err => {
            return next(err)
        })
    }

    static update(req, res, next){
        const { title, CategoryId } = req.body
        const  UserId = req.userId

        Task.update({
            title,
            UserId,
            CategoryId,
           
        }, {
            where : {
                id : req.params.id
            }
        })
        .then(result => {
            return res.status(200).json({
                message : 'success update'
            })
        })
        .catch(err => {
            return next(err)
        })

    }


    static delete(req, res, next){

        Task.destroy({
            where : {
                id : req.params.id
            }
        })
        .then(result => {
            return res.status(200).json({
                message : 'success delete task'
            })
        })
        .catch(err => {
            return next(err)
        })

    }

    static updateCategory(req, res, next){

        Task.update({
            CategoryId : req.body.CategoryId
        },{
            where : { id : req.params.id }
        })
        .then(result => {
            return res.status(200).json({
                message : 'success update task'
            })
        })
        .catch(err => {
            return next(err)
        })

    }

  
}

module.exports = Controller