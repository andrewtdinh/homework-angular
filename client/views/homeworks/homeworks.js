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
  //
  // $scope.destroy = function(food){
  //  Homework.destroy(food)
  //  .then(function(){
  //   $window._.remove($scope.foods, function(f){
  //    return f._id === food._id;
  //   });
  //  });
  // };

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

  // $scope.editFood = function(food){
  //  $scope.editing = true;
  //  $scope.food = food;
  //  Homework.getFoodList()
  //  .then(function(foodList){
  //   $scope.foods = foodList.data.foods;
  //  });
  // };
  //
  // $scope.toggleCheckbox = function(food){
  //  Grocery.save(food)
  //  .then(function(){
  //   if ($scope.class === 'notPicked'){
  //    $scope.class = 'picked';
  //   }else{
  //    $scope.class = 'notPicked';
  //   }
  //  });
  // };
  //
  // $scope.save = function(food){
  //  Grocery.save(food)
  //  .then(function(){
  //   $scope.food = {};
  //   $scope.food.photo = {};
  //   $window.Webcam.reset();
  //   $scope.editing = false;
  //   Grocery.getFoodList()
  //   .then(function(foodList){
  //    $scope.foods = foodList.data.foods;
  //   });
  //  });
  // };

});
