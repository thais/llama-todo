var ViewModel = function(taskName){
 this.task = ko.observable(taskName);
};

ko.applyBindings(new ViewModel(""));
