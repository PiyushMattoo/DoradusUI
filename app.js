angular.module('app', ['cui', 'ngRoute'])

.constant('applicationInfo', {
  name: 'Sitraka Migrator',
  version: '1.2.3'
})

.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'home.html',
    controller: 'HomeCtrl'
  }).when('/pageone', {
    templateUrl: 'pageone.html',
    controller: 'PageOneCtrl'
  });
})

.controller('AppCtrl', function($scope, auth, $location) {
  $scope.auth = auth;
  $scope.$on('$locationChangeStart', function(event) {
    if (!auth.isAuthenticated()) {
      if ($location.path() !== '/login') {
        $location.path('/login');
      }
    } else {
      if ($location.path() === '/login') {
        $location.path('/');
      }
    }
  });
})

.controller('StartScreenCtrl', function($scope, applicationInfo, auth) {
  $scope.startScreenSettings = {
    applicationName: applicationInfo.name
  }
  $scope.onSignIn = function(userData) {
    auth.login(userData.username, userData.password);
  }
})

.controller('AppFrameCtrl', function($scope, applicationInfo) {
  $scope.applicationInfo = applicationInfo;
  $scope.navItems = [{
    label: 'Home',
    icon: 'home',
    href: '#/'
  }, {
    label: 'Page one',
    icon: 'rocket',
    href: '#/pageone'
  }];
})

.controller('AboutBoxCtrl', function($scope, cuiAboutBox, applicationInfo) {
  var about = cuiAboutBox({
    applicationName: applicationInfo.name,
    version: applicationInfo.version
  });
  $scope.showAboutBox = about.modal.show;
})

.controller('HomeCtrl', function() {})
.controller('PageOneCtrl', function() {})



.constant('sessionStorageUsername', 'username')

.factory('auth', function($location, sessionStorageUsername) {
  return {
    login: function(thisUser, thisPassword) {
      sessionStorage.setItem(sessionStorageUsername, thisUser);
      $location.path('/');
    },
    isAuthenticated: function() {
      return !!sessionStorage.getItem(sessionStorageUsername);
    },
    getUsername: function() {
      return sessionStorage.getItem(sessionStorageUsername);
    },
    logout: function() {
      sessionStorage.removeItem(sessionStorageUsername);
      $location.path('/login');
    }
  }
})

.directive('logout', function(auth) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      element.on('click', function(e) {
        auth.logout();
        e.preventDefault();
      })
    }
  }
});