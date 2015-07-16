angular.module('app', ['cui'])

.constant('applicationInfo', {
  name: 'Doradus',
  version: 'v2.4'
})

angular.module('app', ['cui'])
  .controller('AppCtrl', function($scope, cuiAboutBox) {
    var aboutBox = cuiAboutBox({
      applicationName: 'Change Auditor',
      licenses: 'licenses.json',
      thirdParty: 'thirdParty.json',
      version: '2.0.0',
      tabs: [{
        label: 'About',
        active: true,
        template: 'aboutBox.about'
      }]
    });

    aboutBox.modal.show();

    $scope.showAboutBox = aboutBox.modal.show;
  })





.controller('AboutBoxCtrl', function($scope, cuiAboutBox, applicationInfo) {
  var about = cuiAboutBox({
    applicationName: applicationInfo.name,
    version: applicationInfo.version
  });
  $scope.showAboutBox = about.modal.show;
});


