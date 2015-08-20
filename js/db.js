var firebase = require("firebase")
var Database = function() {
  this.connection;
}

Database.prototype.establishConnection = function() {
  this.connection = new Firebase("https://crackling-torch-1034.firebaseio.com");
} 

Database.prototype.getTasks = function (callback) {
  this.connection.on("value", function (snapshot) {
    var tasks = [];
    snapshot.forEach(function (child) {
      tasks.push({ name: child.val().name, completed: child.val().completed, key: child.key() });
    });
    callback(tasks);
  });
}

Database.prototype.addTask = function(task) {
  this.connection.push(task);
}

Database.prototype.removeCompletedTasks = function(tasks) {
  var self = this;
  tasks.forEach(function(task){
    self.connection.child(task.key).remove();
  });
} 

Database.prototype.update = function(task, newValue) {
  this.connection.child(task.key).set(newValue);
}

Database.prototype.removeAll = function() {
  this.connection.remove();
} 

module.exports = new Database();
