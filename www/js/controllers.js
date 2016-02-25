angular.module('starter.controllers', [])


.controller('DashCtrl', function($scope, $firebaseArray, $state) {
        var ref = new Firebase("https://intense-heat-2849.firebaseio.com/posting");
        $scope.postings = $firebaseArray(ref);

        $scope.showDetails = function(key) {
            $state.go('tab.dash-detail', {
                id: key
            });

        };
    })
    .filter('reverse', function() {
        return function(items) {
            return items.slice().reverse();
        };
    })

    .controller('DashDetail', function($scope, $stateParams, $firebaseObject, $state) {
        // controller neuvo, recibo el parametro de el state con stateParams
        console.log($stateParams.id)

        var ref = new Firebase("https://intense-heat-2849.firebaseio.com/posting" + $stateParams.id);
        var syncObject = $firebaseObject(ref);

        syncObject.$bindTo($scope, "ProductoSeleccionado");

    })

.controller('postCtrl', function($scope, $firebaseArray, $cordovaCamera, $state) {
        $scope.data = {};

        var ref = new Firebase("https://intense-heat-2849.firebaseio.com/posting");
        // create a synchronized array
        var messages = $firebaseArray(ref);
        // add new items to the array
        // the message is automatically added to our Firebase database!
        
        

        $scope.getPhoto = function() {
            $cordovaCamera.getPicture().then(function(imageURI) {
                console.log(imageURI);
               $scope.data.lastPhoto = imageURI || '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';
            }, function(err) {
                console.err(err);
            },{
                quality: 75,
                targetWidth: 320,
                targetHeight: 320,
                saveToPhotoAlbum: false,
               destinationType: DATA_URL
            });
        };

        $scope.addMessage = function() {
            console.log($scope.data);
            messages.$add({
                title: $scope.data.Title || 'Carpooling',
                description: $scope.data.description || 'Todos los días llevo a los chicos al cole. Llevo a los tuyos también?',
                pricing: $scope.data.price || '$40 por día',
                category: $scope.data.category || 'Carpooling',
                extra: $scope.data.extra || '',
                image: $scope.data.lastPhoto || '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'
            });
            $scope.data = {}
            $state.go('tab.dash');
        };
        






        


    })
 

.controller('ChatdetailCtrl', function($scope) {
        $scope.$on('$ionicView.beforeEnter', function(event, viewData) {
            viewData.enableBack = true;
        });

    })
    .controller('AccountCtrl', function($scope, $state) {
        $scope.Logout = function() {
            $state.go('signin');
        };
    })



.controller('SelectUserCtrl', function($scope, $state) {

    $scope.SelectUser = function() {
        //console.log('Select-User', user);
        $state.go('tab.dash');
    };
})





.controller('PopupCtrl', function($scope, $ionicPopup) {

    // Triggered on a button click, or some other target
    $scope.showPopup = function() {
        $scope.data = {}

        // An elaborate, custom popup
        var myPopup = $ionicPopup.show({
            template: 'Dame unos días :)',
            title: 'Todavía no funciona',
            // subTitle: 'Please use normal things',
            scope: $scope,
            buttons: [{
                text: 'Cancel'
            }, {
                text: 'Dale',
                type: 'button-calm',
                //   onTap: function(e) {
                //     if (!$scope.data.wifi) {
                //       //don't allow the user to close unless he enters wifi password
                //       e.preventDefault();
                //     } else {
                //       return $scope.data.wifi;
                //     }
                //   }
            }, ]
        });
        // myPopup.then(function(res) {
        //   console.log('Tapped!', res);
        // });
        // $timeout(function() {
        //    myPopup.close(); //close the popup after 3 seconds for some reason
        // }, 4000);
    };
    // A confirm dialog
    $scope.showConfirm = function() {
        var confirmPopup = $ionicPopup.confirm({
            title: 'Listo!',
            template: 'Tu solicitud se realizó con éxito. La administración se comunicará con vos para confirmar tu reserva.'
        });
        confirmPopup.then(function(res) {
            if (res) {
                console.log('You are sure');
            } else {
                console.log('You are not sure');
            }
        });
    };

    // An alert dialog
    $scope.showAlert = function() {
        var alertPopup = $ionicPopup.alert({
            title: 'Don\'t eat that!',
            template: 'It might taste good'
        });
        alertPopup.then(function(res) {
            console.log('Thank you for not eating my delicious ice cream cone');
        });
    };
});