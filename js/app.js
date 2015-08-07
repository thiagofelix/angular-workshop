angular.module('GreetingApp', [])
  .directive('greeting', function () {
    return {
      restrict: 'E',
      scope: { name: '@' },
      link: function (scope, element, attrs) {
        scope.$watch('name', function (oldName, newName) {
          element.text('Hi ' + newName);
        });
      }
    }
  });
