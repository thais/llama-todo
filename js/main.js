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
  this.selectedTasks = ko.observableArray([]); 
  
  test = function () {
    console.log('olar');
  }
  this.addTask = function () {
    db.addTask({"name": this.task(), "completed": false});
    this.task("");
  };
  
  this.markAsDone = function () {
    return true;
  };

  this.removeTask = function () {
    db.removeSelectedTasks(this.selectedTasks);
  };

  this.removeAll = function () {
    db.removeAll();
    location.reload();
  };
};

ko.applyBindings(new ViewModel(""));
