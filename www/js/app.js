// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


app.controller("MyCtrl", function($scope, $cordovaMedia){

  $scope.recordAudio = function() {
    var src = "myrecording.mp3";
    var mediaRec = new Media(src, onSuccess, onError);

    mediaRec.startRecord();


  function onSuccess() {
          console.log("recordAudio():Audio Success");
      }

      // onError Callback 
      //
      function onError(error) {
          alert('code: '    + error.code    + '\n' + 
                'message: ' + error.message + '\n');
      }

  $scope.stopRecordAudio = function() {
    mediaRec.stopRecord();
  }

  $scope.playAudio = function(src) {
    var media = new Media(mediaRec, null, null, mediaStatusCallback);
    $cordovaMedia.play(media);
  }

})