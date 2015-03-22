angular.module('tnApp.controllers')
    .controller('SupportTicketDetailsCtrl', ['TicketService', '$scope', '$stateParams', function(Tickets, $scope, $stateParams) {
        $scope.stateParamsObjectId = $stateParams.objectId;
        $scope.message = "Product Detail Controller";

        // $('#profile-banner').append("<button ng-click='sendData()'>HELLO WORLD</button>")

    
        console.log("Clicked!");
        var query = Tickets;

        query.get({
            objectId: $scope.stateParamsObjectId,
            postedBy: Parse.User.current().get('username')
        }, function(res) {
            window.console.log(res, "Got Ticket Details");

            $scope.data = res;
        });
    

    }])