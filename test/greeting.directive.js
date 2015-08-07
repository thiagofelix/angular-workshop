describe('Greeting Directive', function () {
  it('prints a message', inject(function ($compile, $rootScope) {
    //the fragment
    var html = '<greeting name="{{greetingName}}"></greeting>';
    //the element
    var element = angular.element(html);
    //link function after compile
    var link = $compile(element);

    $rootScope.greetingName = 'Mindy Or';
    link($rootScope);
    $rootScope.$digest();
    expect(element.html()).toEqual('Hi Mindy Or');
  }));
  it('testing ngBind', inject(function ($compile, $rootScope) {
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
