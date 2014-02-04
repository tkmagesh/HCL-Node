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

module.exports = {
	add : addTask,
	getAll : getAllTasks,
	remove : removeTask
};
