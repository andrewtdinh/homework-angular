'use strict';

angular.module('homework')
.controller('HomeworkCtrl', function($window, $scope, Homework){

  $scope.homework = {};
  $scope.editing = false;
  $scope.class = 'notPicked';

  Homework.getHomeworkList()
  .then(function(response){
   $scope.homeworks = response.data.homeworks;
  });

  $scope.destroy = function(homework){
   Homework.destroy(homework)
   .then(function(){
    $window._.remove($scope.homeworks, function(hw){
     return hw._id === homework._id;
    });
   });
  };

  $scope.add = function(homework){
    Homework.add(homework)
    .then(function(response){
      $scope.homeworks.push(response.data);
      $scope.homework = {};
    })
    .catch(function(){
      $window.swal({title: 'Error', text: 'There was a problem adding your homework item. Please try again.', type: 'error'});
    });
  };

  $scope.edit = function(homework){
   $scope.editing = true;
   homework.dueDate = new Date(homework.dueDate);
   $scope.homework = homework;
   Homework.getHomeworkList()
   .then(function(homeworkList){
    $scope.homeworks = homeworkList.data.homeworks;
   });
  };

  $scope.toggleCheckbox = function(homework){
   Homework.save(homework)
   .then(function(){
    if ($scope.class === 'notPicked'){
     $scope.class = 'picked';
    }else{
     $scope.class = 'notPicked';
    }
   });
  };

  $scope.save = function(homework){
   Homework.save(homework)
   .then(function(){
    $scope.homework = {};
    $scope.editing = false;
    Homework.getHomeworkList()
    .then(function(homeworkList){
     $scope.homeworks = homeworkList.data.homeworks;
    });
   });
  };

});
