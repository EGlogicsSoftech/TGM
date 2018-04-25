/* eslint no-alert: 0 */

'use strict';

//
// Here is how to define your module
// has dependent on mobile-angular-ui
//
var app = angular.module('browserAPP', [
  'ngRoute',
  'mobile-angular-ui',
  'ngCordova',

  // touch/drag feature: this is from 'mobile-angular-ui.gestures.js'.
  // This is intended to provide a flexible, integrated and and
  // easy to use alternative to other 3rd party libs like hammer.js, with the
  // final pourpose to integrate gestures into default ui interactions like
  // opening sidebars, turning switches on/off ..
  'mobile-angular-ui.gestures'
]);

app.run(function($transform) {
  window.$transform = $transform;
});

app.config(function($routeProvider) 
{
  $routeProvider.when('/', {templateUrl: 'home.html', reloadOnSearch: false});
}

//
// For this trivial demo we have just a unique MainController
// for everything
//
app.controller('MainController', function($rootScope, $scope , $http) 
{
	
		  var req = {
               method: 'GET',
               url: 'https://onesignal.com/api/v1/notifications?app_id=bd9eca6e-b803-4701-a712-ffd187a61ee3&limit=20',
               headers: {
                 'Authorization': 'Basic MGI2YjdhZGItNDA4Yy00YzQ2LWI1MDUtYTVmNWU0ZDIxMDFl'
                        }
              }

		  $http(req)
			.then(function(response) {
				$scope.messages = response.data;
			});
			
		$scope.center = function () 
		{
			 var ref = cordova.InAppBrowser.open('http://www.grandmasters.in', '_blank', 'location=no','toolbar=no');	 			
		};


	
});
