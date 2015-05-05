'use strict';

angular.module('homework')
.controller('HomeworkCtrl', function($window, $scope, Homework){

  $scope.food = {};
  $scope.editing = false;
  $scope.class = 'notPicked';

  Homework.getFoodList()
  .then(function(response){
   $scope.foods = response.data.foods;
  });

  $scope.destroy = function(food){
   Homework.destroy(food)
   .then(function(){
    $window._.remove($scope.foods, function(f){
     return f._id === food._id;
    });
   });
  };

  $scope.add = function(food){
    Homework.add(food)
    .then(function(response){
      $scope.foods.push(response.data);
      $scope.food = {};
      $scope.food.photo = {};
      $window.Webcam.reset();

    })
    .catch(function(){
      $window.swal({title: 'Error', text: 'There was a problem adding your food item. Please try again.', type: 'error'});
    });
  };

  $scope.editFood = function(food){
   $scope.editing = true;
   $scope.food = food;
   Homework.getFoodList()
   .then(function(foodList){
    $scope.foods = foodList.data.foods;
   });
  };

  $scope.toggleCheckbox = function(food){
   Grocery.save(food)
   .then(function(){
    if ($scope.class === 'notPicked'){
     $scope.class = 'picked';
    }else{
     $scope.class = 'notPicked';
    }
   });
  };

  $scope.save = function(food){
   Grocery.save(food)
   .then(function(){
    $scope.food = {};
    $scope.food.photo = {};
    $window.Webcam.reset();
    $scope.editing = false;
    Grocery.getFoodList()
    .then(function(foodList){
     $scope.foods = foodList.data.foods;
    });
   });
  };

});
