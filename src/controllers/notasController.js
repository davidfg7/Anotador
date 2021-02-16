const db = require('../database/models');
const path = require('path');

module.exports = {
    home: function(req, res){
        db.Notas.findAll()
        .then(function(notas){
            res.render('index', {notas: notas})
        })
    }, 
    detail: function(req, res){
        db.Notas.findByPk(req.params.id)
        .then(function(notas){
            res.render('detail', {notas: notas})
        })
    },
    create: function(req, res){
        if(!req.body.title || !req.body.text){
            res.send('Completar todos los campos')
        }   else{
            db.Notas.create({
                titulo: req.body.title,
                texto: req.body.text
            })
            .then(()=>{
                res.redirect('/')
            })
        }
    },
    update: function(req, res){
        if(!req.body.title || !req.body.message){
            res.send('Completar todos los campos')
        }   else{
            db.Notas.update({
                titulo: req.body.title,
                texto: req.body.message
            }, {
                where: {
                    id: req.params.id
                }
            })
            .then(()=>{
                res.redirect('/')
            })
        }
    },
    delete: function(req, res){
        db.Notas.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(()=>{
            res.redirect('/')
        })
    }

}