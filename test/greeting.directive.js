describe('Greeting Directive', function () {
  it('prints a message', inject(function ($compile, $rootScope) {
    //the fragment
    var html = '<div ng-bind="greeting"></div>';
    //the element
    var element = angular.element(html);
    //link function after compile
    var link = $compile(element);

    //update the scope information
    $rootScope.greeting = "Hello World!";

    //link the scope in the element
    link($rootScope);

    //tell the scope to digest the changes
    $rootScope.$digest();

    expect(element.html()).toEqual('Hello World!');
  }));
});
