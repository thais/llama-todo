var db = require("./db");
require('jquery');

var ViewModel = function (taskName) {
  var self = this;
  this.tasks = ko.observableArray([]);
  db.establishConnection();

  db.getTasks(function (tasks) {
    self.tasks(tasks); 
  }); 

  this.task = ko.observable(taskName);

  this.addTask = function () {
    db.addTask({"name": this.task(), "completed": false});
    this.task("");
  };

  this.markAsDone = function () {
    return true;
  };

  this.removeTask = function () {
    self.tasks().forEach(function(task){
      if(task.completed) {
        self.tasks.remove(task);
        db.removeCompletedTasks(task);
      }
    });
  };

  this.removeAll = function () {
    db.removeAll();
    location.reload();
  };
};

ko.applyBindings(new ViewModel(""));
