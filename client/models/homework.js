'use strict';

angular.module('homework')
.factory('Homework', function($http, nodeUrl){

  function Homework(){
  }

  Homework.getHomeworkList = function(){
   return $http.get(nodeUrl + '/homeworks');
  };

  Homework.add = function(homework){
   return $http.post(nodeUrl + '/homeworks', homework);
  };
  //
  // Homework.save = function(food){
  //  return $http.put(nodeUrl + '/foods/' + food._id, food);
  // };
  // // Grocery.toggle = function(food){
  // //  return $http.put(nodeUrl + '/foods/' + food._id, food);
  // // };
  //
  // Homework.destroy = function(food){
  //  return $http.delete(nodeUrl + '/foods/' + food._id);
  // };

  return Homework;
});
