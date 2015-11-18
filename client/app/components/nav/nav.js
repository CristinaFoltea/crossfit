(function () {
  angular
    .module('app')
    .directive('myNavBar', myNavBar);

function myNavBar() {
    var directive = {
        link: link,
        templateUrl: '/app/components/nav/nav.html',
        restrict: 'EA'
    };
    return directive;

    function link(scope, element, attrs) {
      var $sidebarInner = element.find('.left-header');
      var $dropdown = element.find('nav');
          $sidebarInner.click(dropdown);
      function dropdown(e) {
        if($sidebarInner.hasClass('fa-bars')){
          $sidebarInner.removeClass('fa-bars');
          $sidebarInner.addClass('fa-times');
          $dropdown.css({
            'visibility': 'visible',
            'opacity': '1',
            'left': '0vw'
          });
          $sidebarInner.css({
            'left' : '70vw',
            'color' : 'rgba(88, 88, 88, 1)'
          })
        }else {
          $sidebarInner.removeClass('fa-times');
          $sidebarInner.addClass('fa-bars');
          $dropdown.css({
            'visibility': 'hidden',
            'opacity': '0',
            'left': '-80vw'
          })
          $sidebarInner.css({
            'left' :'15px',
            'color' : 'rgba(246, 246, 247, 1)'
          })
        }
      }
      // console.log(button.classList.contains("fa-times"));
      ////on icon click
      ///if class hamburger
      ////remove fa-class for hamburger
      ////add class X
      ///slide right side menu
      ////else
      ////remove x class
      ///slide left the menu
      /////add class humburger
    };
}
}())
