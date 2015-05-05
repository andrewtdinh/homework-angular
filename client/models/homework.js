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

  Homework.save = function(homework){
   return $http.put(nodeUrl + '/homeworks/' + homework._id, homework);
  };
  Homework.toggle = function(homework){
   return $http.put(nodeUrl + '/homeworks/' + homework._id, homework);
  };

  Homework.destroy = function(homework){
   return $http.delete(nodeUrl + '/homeworks/' + homework._id);
  };

  return Homework;
});
