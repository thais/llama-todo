var ViewModel = function(taskName){
  this.tasks = ko.observableArray(["Js: Learn Knockout","Book: Chapt 01 Code Complete", "Fun: Dragon Ball Super - E02"]);
  this.task = ko.observable(taskName);
};

ko.applyBindings(new ViewModel(""));
