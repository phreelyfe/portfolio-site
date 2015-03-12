angular.module('tnApp.controllers').controller('NavCtrl', ['$scope', '$rootScope', 'ParseSDK', function($scope, $rootScope, Login) {
    $scope.alias = 'NavCtrl';
    $scope.title = 'Nav Controller';
    $scope.message = "Can You Believe It's Almost Christmas!";
    $scope.test = "This is the main controller";

    $scope.urls = [{
        sref: 'home.about',
        url: '/about',
        name: 'About'
    }, {
        sref: 'home.portfolio',
        url: '/portfolio',
        name: 'Portfolio'
    }, {
        sref: 'home.support',
        url: '/support',
        name: 'Support'
    }, {
        sref: 'home.contact',
        url: '/contact',
        name: 'Contact'
    }];

    $scope.logOut = function() {
        console.log("Session User", $rootScope.sessionUser);
        return Login.logOut($rootScope.sessionUser);
    };

    // LOGIN
    var loginBtn = $('#signin');
    var createAccount = $('.not-a-member');

    // loginBtn.on('click', function() {
    //     alert('Login Comming Soon!')
    // });
    // createAccount.on('click', function(e) {
    //     alert("Creat Account Comming Soon!")
    // })
}]);