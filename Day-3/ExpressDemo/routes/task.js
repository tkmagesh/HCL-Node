

function TaskStorage(){
	var storage = require("./taskStorage");
	this.index = function(req,res){
		var allTasks = storage.getAll();
		res.render("taskList", {tasks : allTasks});
	};
	this.addNew = function(req,res){
		res.render("newTask");
	};
	this.save = function(req,res){
		var taskName = req.body.taskName;
		console.log(taskName);
		var newTask = storage.add(taskName);
		res.render("taskList", {tasks : storage.getAll()});
	};
}
module.exports = new TaskStorage();