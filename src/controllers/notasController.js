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
        db.Notas.findByPk()
        .then(function(notas){
            res.render('detail', {notas: notas})
        })
    },
    create: function(req, res){
        if(!req.body.title || !req.body.text){
            res.render('Completar todos los campos')
        }   else{
            db.Notas.create({
                titulo: req.body.title,
                text: req.body.text
            })
            .then(()=>{
                res.redirect('/')
            })
        }
    },
    update: function(req, res){
        if(!req.body.title || !req.body.text){
            res.render('Completar todos los campos')
        }   else{
            db.Notas.update({
                titulo: req.body.title,
                text: req.body.text
            }, {
                where: {
                    id: req.params.id
                }
            })
            .then(()=>{
                res.render('/')
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