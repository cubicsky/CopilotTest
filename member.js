function skillMembers() {
  return {
    restrict: 'E',
    templateUrl: 'skill-members.html',
    controller: 'SkillMembersController',
    controllerAs: 'skillMembersCtrl',
    bindToController: true,
    scope: {
      skill: '=',
      members: '='
    }
  };
}