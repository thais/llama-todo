var db = require("./db");
var _ = require("lodash");
var $ = require("jquery");

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
  };

  this.removeTask = function () {
    var completedTasks =_.filter(self.tasks(), function (task) {
      return task.completed;
    });

    self.tasks.removeAll(completedTasks);
    db.removeCompletedTasks(completedTasks);
  };

  this.removeAll = function () {
    db.removeAll();
    location.reload();
  };
};

ko.applyBindings(new ViewModel(""));
