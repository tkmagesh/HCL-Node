function Employee(id,name,salary){
  var _id = id,
      _salary = salary;

  this.id = function(){
     return _id;
  };
  this.salary = function(sal){
     if (!!sal && sal > _salary) _salary = sal;
     return _salary;
  }
}