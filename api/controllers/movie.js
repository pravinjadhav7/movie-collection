 'use strict';
	
	var db = require('../../config/db')();
    
	module.exports = {getAll, save, getOne, update, delMovie};
    
	
	function getAll(req, res, next) {
      res.json({ movies: db.find()});
    }
	
	function save(req, res, next) {
		res.json({success: db.save(req.body), description: "Movie added to the list!"});
	}
	
	function getOne(req, res, next) {
		var id = req.swagger.params.id.value; 
		var movie = db.find(id);
		if(movie) {
			res.json(movie);
		}else {
			res.status(204).send();
		}		
	}
	
	function update(req, res, next) {
		var id = req.swagger.params.id.value; 
		var movie = req.body;
		if(db.update(id, movie)){
			res.json({success: 1, description: "Movie updated!"});
		}else{
			res.status(204).send();
		}
		
	}

	function delMovie(req, res, next) {
		var id = req.swagger.params.id.value; 
		if(db.remove(id)){
			res.json({success: 1, description: "Movie deleted!"});
		}else{
			res.status(204).send();
		}
		
	}