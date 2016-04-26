var fortune = angular.module('fortune',['ngAnimate', 'ui.router','templates','highcharts-ng', 'toastr']);
fortune.controller('homeController',['$scope', function($scope, $timeout){
  	$scope.showModal =  false;
  	console.log("worknation")
    $scope.toggleModal =  function(){
  		$scope.showModal = !$scope.showModal;
    };
    
    $scope.slides = [
      { image: '/assets/dev1.jpg', description: 'bla bla'},
      { image: '/assets/dev3.jpg', description: 'bla bla'}
      
    ];
    $scope.direction = 'left';
    $scope.currentIndex = 0;

    $scope.setCurrentSlideIndex = function (index) {
        $scope.direction = (index > $scope.currentIndex) ? 'left' : 'right';
        $scope.currentIndex = index;
    };

    $scope.isCurrentSlideIndex = function (index) {
        return $scope.currentIndex === index;
    };

    $scope.prevSlide = function () {
        $scope.direction = 'left';
        $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
    };

    $scope.nextSlide = function () {
        $scope.direction = 'right';
        $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
    };


 var slidesInSlideshow = 4;
 var slidesTimeIntervalInMs = 3000; 
  
  $scope.slideshow = 1;
  // var slideTimer =
  //   $timeout(function interval() {
  //     console.log("worknation2")
  //     $scope.slideshow = ($scope.slideshow % slidesInSlideshow) + 1;
  //     slideTimer = $timeout(interval, slidesTimeIntervalInMs);
  //   }, slidesTimeIntervalInMs);


//   var timer;
//   var sliderFunc = function() {
//   timer = $timeout(function() {
//     scope.next();
//     timer = $timeout(sliderFunc, 5000);
//   }, 5000);
// };

//   sliderFunc();

// scope.$on('$destroy', function() {
//   $timeout.cancel(timer); // when the scope is getting destroyed, cancel the timer
// });

}])
   fortune.animation('.slide-animation', function () {
        return {
            AddClass: function (element, className, done) {
                var scope = element.scope();

                if (className == 'ng-hide') {
                    var finishPoint = element.parent().width();
                    if(scope.direction !== 'right') {
                        finishPoint = -finishPoint;
                    }
                    TweenMax.to(element, 0.5, {left: finishPoint, onComplete: done });
                }
                else {
                    done();
                }
            },
            removeClass: function (element, className, done) {
                var scope = element.scope();

                if (className == 'ng-hide') {
                    element.removeClass('ng-hide');

                    var startPoint = element.parent().width;
                    if(scope.direction === 'right') {
                        startPoint = -startPoint;
                    }

                    TweenMax.fromTo(element, 0.5, { left: startPoint }, {left: 0, onComplete: done });
                }
                else {
                    done();
                }
            }
        };
    });


	fortune.directive('modal',function(){
	return{
		 template: '<div class="modal fade">' + 
          '<div class="modal-dialog">' + 
            '<div class="modal-content">' + 
              '<div class="modal-header">' + 
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' + 
                '<h4 class="modal-title">{{ title }}</h4>' + 
              '</div>' + 
              '<div class="modal-body" ng-transclude></div>' + 
            '</div>' + 
          '</div>' + 
        '</div>',
      restrict: 'E',
      transclude: true,
      replace:true,
      scope:true,
      link: function postLink(scope, element, attrs) {
        scope.title = attrs.title;

        scope.$watch(attrs.visible, function(value){
          if(value == true)
            $(element).modal('show');
          else
            $(element).modal('hide');
        });

        $(element).on('shown.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = true;
          });
        });

        $(element).on('hidden.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = false;
          });
        });
      }
  }})

