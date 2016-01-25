angular.module('starter.controllers', [])


.controller('DashCtrl', function($scope, $firebaseObject, $state) {

    var ref = new Firebase("https://amber-torch-26.firebaseio.com/posting");
    // download the data into a local object
    var syncObject = $firebaseObject(ref);
    // synchronize the object with a three-way data binding
    // click on `index.html` above to see it used in the DOM!
    syncObject.$bindTo($scope, "postings");

    $scope.showDetails = function(post) {
        $scope.ProductoSeleccionado = post;
        $state.go('tab.dash-detail');
        console.log(post);
    };
    
    $scope.ver = function(post){
        
        console.log(post);
    };


})

.controller('postCtrl', function($scope, $firebaseArray) {
        $scope.data = {};

        var ref = new Firebase("https://amber-torch-26.firebaseio.com/posting");
        // create a synchronized array
        var messages = $firebaseArray(ref);
        // add new items to the array
        // the message is automatically added to our Firebase database!
        $scope.addMessage = function() {
            messages.$add({
                title: $scope.data.Title || '',
                description: $scope.data.description || '',
                pricing: $scope.data.price || '',
                category: $scope.data.category || '',
                extra: $scope.data.extra || ''
            });
            $scope.data = {}
        };





    })
    // .controller('DashDetailCtrl', function($scope, $stateParams, $firebaseObject, Posts) {
    //  $scope.post = Posts.get($stateParams.postId);

//   var ref = new Firebase("https://amber-torch-26.firebaseio.com/posting");
//     var syncObject = $firebaseObject(ref);
//     syncObject.$bindTo($scope, "postings");

//     console.log($stateParams);



// })

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