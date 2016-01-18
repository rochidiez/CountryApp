angular.module('starter.services', [])

.factory('Posts', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var postings = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return postings;
    },
    remove: function(post) {
      postings.splice(postings.indexOf(post), 1);
    },
    get: function(postId) {
      for (var i = 0; i < postings.length; i++) {
        if (postings[i].id === parseInt(postId)) {
          return postings[i];
        }
      }
      return null;
    }
  };
});
