function skillMember() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'views/directives/skill-members.html',
        scope: {
            members: '=',
            skill: '=',
            addMember: '&'
        },
        controller: ['$scope', function($scope) {
            $scope.addMember = function(member) {
                $scope.addMember({member: member});
            };
        }]
    };
}