var firebase = require("firebase")
var Database = function(){
  this.connection;
}

Database.prototype.establishConnection = function(){
  this.connection = new Firebase("https://crackling-torch-1034.firebaseio.com/");
}

Database.prototype.getTasks = function(callback){
  this.connection.on("value", function(snapshot) {
    snapshot.forEach(function(child){
      callback(child);
    });
  });
}

module.exports = new Database();
