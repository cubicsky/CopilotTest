function skillsMember() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'views/directives/skills-member.html',
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