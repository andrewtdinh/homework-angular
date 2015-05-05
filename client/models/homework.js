'use strict';

angular.module('homework')
.factory('Grocery', function($http, nodeUrl){

  function Homework(){
  }

  Homework.getFoodList = function(){
   return $http.get(nodeUrl + '/foods');
  };

  Homework.add = function(food){
   return $http.post(nodeUrl + '/foods', food);
  };

  Homework.save = function(food){
   return $http.put(nodeUrl + '/foods/' + food._id, food);
  };
  // Grocery.toggle = function(food){
  //  return $http.put(nodeUrl + '/foods/' + food._id, food);
  // };

  Homework.destroy = function(food){
   return $http.delete(nodeUrl + '/foods/' + food._id);
  };

  return Homework;
});
