var tasks = [];
function addTask(taskName){
	var newId = new Date().getTime().toString();
	var newTask = {
		id : newId,
		name : taskName
	};
	tasks.push(newTask);
	return newTask;
}

function getAllTasks(){
	return tasks;
}

function removeTask(id){
	//code for removing the task with the given id goes here
}

addTask("Learn JQuery");
addTask("explore JavaScript");
module.exports = {
	add : addTask,
	getAll : getAllTasks,
	remove : removeTask
};
