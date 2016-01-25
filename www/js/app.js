// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'firebase'])


.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})


.config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider
        .state('signin', {
            url: '/sign-in',
            templateUrl: 'templates/sign-in.html'
                // controller: 'SignInCtrl'
        })
        .state('forgotpassword', {
            url: '/forgot-password',
            templateUrl: 'templates/forgot-password.html'
        })
        .state('selectUser', {
            url: '/selectUser',
            templateUrl: 'templates/select-user.html',
            controller: 'SelectUserCtrl'
        })

    // setup an abstract state for the tabs directive
    .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
    })

    // Each tab has its own nav history stack:

    .state('tab.dash', {
        url: '/dash',
        views: {
            'tab-dash': {
                templateUrl: 'templates/tab-dash.html',
                controller: 'DashCtrl'
            }
        }
    })
    .state('tab.dash-detail', {
      url: "/dash/detail",
      views: {
        'tab-dash': {
          templateUrl: "templates/dash-detail.html",
          controller: 'DashCtrl'
        }
      }
    })
    .state('tab.account', {
        url: '/account',
        views: {
            'tab-account': {
                templateUrl: 'templates/tab-account.html',
                controller: 'AccountCtrl'
            }
        }
    })
    .state('tab.settings', {
      url: "/settings",
      views: {
        'tab-account': {
          templateUrl: "templates/tab-settings.html"
        }
      }
    })

    .state('tab.chats', {
      url: "/chats",
      views: {
        'tab-account': {
          templateUrl: "templates/tab-chats.html"
        }
      }
    })
    .state('chat-detail', {
            url: '/chat-detail',
            templateUrl: 'templates/chat-detail.html',
            controller: 'ChatdetailCtrl'
        })

    .state('tab.book', {
        url: '/book',
        views: {
            'tab-book': {
                templateUrl: 'templates/tab-book.html',
                controller: 'PopupCtrl'
            }
        }
    })

    .state('tab.notifications', {
        url: '/notifications',
        views: {
            'tab-notifications': {
                templateUrl: 'templates/tab-notifications.html'
            }
        }
    })
    .state('tab.post', {
        url: '/post',
        views: {
            'tab-post': {
                templateUrl: 'templates/tab-post.html',
                controller: 'postCtrl'
            }
            
        }
    });

    // if none of the above states are matched, use this as the fallback
    //$urlRouterProvider.otherwise('/tab/dash');
    $urlRouterProvider.otherwise('/sign-in');



});


//////////////////////