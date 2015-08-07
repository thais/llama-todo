var firebase = require("firebase")
var Database = function() {
  this.connection;
}

Database.prototype.establishConnection = function() {
  this.connection = new Firebase("https://crackling-torch-1034.firebaseio.com");
} 

Database.prototype.getTasks = function(callback) {
  this.connection.on("value", function(snapshot) {
    snapshot.forEach(function(child){
      callback(child);
    });
  });
}

Database.prototype.addTask = function(name) {
  this.connection.push(name);
}

Database.prototype.removeSelectedTasks = function(callback) {
  console.log(callback);
} 

Database.prototype.removeAll = function() {
  this.connection.remove();
} 
  
module.exports = new Database();
