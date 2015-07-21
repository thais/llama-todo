var db = require("./db");
var ViewModel = function (taskName) {
  var self = this;
  this.tasks = ko.observableArray([]);
  db.establishConnection();

  db.getTasks(function(child){
    self.tasks.push(child.val().tasktest); 
    console.log(child.val().tasktest);
  }); 

  this.task = ko.observable(taskName);
  this.selectedTasks = ko.observableArray(); 

  this.addTask = function () {
    db.push({"tasktest": this.task()});
    this.task("");
  };

  this.removeTask = function () {
    this.tasks.removeAll(this.selectedTasks());
  };
};

ko.applyBindings(new ViewModel(""));
