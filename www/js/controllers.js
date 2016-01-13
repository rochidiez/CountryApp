angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
  // var firebaseDataBase = new Firebase('lalala');

  // firebaseDataBase.child('publicaciones').on('value',function(publi){
  //   $scope.publicaciones = publi.val();


  // })


})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})



.controller('SelectUserCtrl', function($scope, $state) {
  
  $scope.SelectUser = function(user) {
    console.log('Select-User', user);
    $state.go('tab.dash');
  };  
})




.controller('PopupCtrl',function($scope, $ionicPopup) {

 // Triggered on a button click, or some other target
 $scope.showPopup = function() {
   $scope.data = {}

   // An elaborate, custom popup
   var myPopup = $ionicPopup.show({
     template: 'Dame unos días :)',
     title: 'Todavía no funciona',
    // subTitle: 'Please use normal things',
     scope: $scope,
     buttons: [
       { text: 'Cancel' },
       {
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
        },
     ]
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
       if(res) {
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
