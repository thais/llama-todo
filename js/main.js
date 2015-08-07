var db = require("./db");
require('jquery');

var ViewModel = function (taskName) {
  var self = this;
  this.tasks = ko.observableArray([]);
  db.establishConnection();

  db.getTasks(function(child){
    self.tasks.push({'name': child.val().name, 'completed': child.val().completed});
    //self.tasks.push(child.val().name); 
    console.log(child.val().name);
    console.log(child.val().completed);
  }); 

  this.task = ko.observable(taskName);
  this.selectedTasks = ko.observableArray([]); 

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
