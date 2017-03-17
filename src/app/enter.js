angular
  .module('app')
  .directive('enter', invokeEnter);

function invokeEnter() {
  return {
    link: function (scope, element, attrs) {
      element.bind('mouseenter', function () {
        element.addClass('well');
      });
    }
  };
}

