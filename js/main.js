var ViewModel = function (taskName) {
  this.tasks = ko.observableArray(
    [
      "Js: Learn Knockout",
      "Book: Chapt 01 Code Complete",
      "Fun: Dragon Ball Super - E02"
    ]
  );
  this.task = ko.observable(taskName);
  this.selectedTasks = ko.observableArray(); 

  this.addTask = function () {
    this.tasks.push(this.task());
    this.task("");
  };

  this.removeTask = function () {
    this.tasks.removeAll(this.selectedTasks());
  };
};

ko.applyBindings(new ViewModel(""));
