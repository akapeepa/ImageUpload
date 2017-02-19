var ImageUpload = angular.module('ImageUpload',['ngImgCrop']);

// controller

ImageUpload.controller('homeController',['$scope', function($scope){
  $scope.Image='';
  $scope.CroppedImage='';

  var handleFileSelect=function(evt) {
    var file=evt.currentTarget.files[0];
    var reader = new FileReader();
    reader.onload = function (evt) {
      $scope.$apply(function($scope){
        $scope.Image=evt.target.result;
      });
    };
    reader.readAsDataURL(file);

    $scope.download= function() {
      var image = new Image();
      image.src = $scope.CroppedImage;
      console.log(image.src);
      document.body.appendChild(image);
    }


  };
  angular.element(document.querySelector('#fileInput')).on('change',handleFileSelect);



}]);
