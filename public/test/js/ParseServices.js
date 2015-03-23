angular.module('ParseServices',[]).factory("LoginService",['$state','$rootScope','$window',function($state,$rootScope,$window){var Login={};Login.createUser=function(userDetails){var user=new Parse.User();var userDetailsLength=userDetails.length;user.set("username",userDetails.username);console.log("Setting Parse.User "+userDetails.username);user.set("password",userDetails.password);console.log("Setting Parse.User "+userDetails.password);user.set("firstName",userDetails.firstName);console.log("Setting Parse.User "+userDetails.firstName);user.set("lastName",userDetails.lastName);console.log("Setting Parse.User "+userDetails.lastName);user.set("email",userDetails.email);console.log("Setting Parse.User "+userDetails.email);user.signUp(null,{success:function(user){console.log("Redirecting You To Home State");$state.go('home.login');},error:function(user,error){alert("Error: "+error.code+" "+error.message);}});};Login.login=function(username,password){Parse.User.logIn(username,password,{success:function(user){console.log("Success! Parse has logged in the user: "+username);$rootScope.reloadWindow();$state.transitionTo('profile.main');},error:function(user,error){console.log(user,error);}});};Login.logOut=function(sessionUser){console.log("I heard your request to logout")
if($rootScope.sessionUser){$rootScope.ParseUser.logOut();console.log("User Logged Out");$state.go('home.index');$rootScope.reloadWindow();}else{console.log("Please Login");$state.go('login');}};Login.makeAdmin=function(){if($rootScope.sessionUser&&$rootScope.techNinjaAdmin){console.log("Making: "+$rootScope.techNinjaAdminName+" admin");console.log("Tech Ninja Admin variable is: ",$rootScope.techNinjaAdmin);}else{console.log("User: "+$rootScope.techNinjaAdminName+" is not an admin");console.log("Tech Ninja Admin variable is: ",$rootScope.techNinjaAdmin);}};return Login;}]);