import 'waypoints/lib/noframework.waypoints.min.js'

console.log(document.getElementById('retention'));

var waypoint = new Waypoint({
  element: document.getElementById('retention'),
  handler: function(direction) {
    document.getElementById('retention').classList.add('is-reached');
  },
  offset:'50%'
});

var waypoint = new Waypoint({
  element: document.getElementById('retention__boot'),
  handler: function(direction) {
    document.getElementById('retention__boot').classList.add('is-reached');
  },
  offset:'70%'
});

var waypoint = new Waypoint({
  element: document.getElementById('lacing__explication'),
  handler: function(direction) {
    document.getElementById('lacing__explication').classList.add('is-reached');
  },
  offset:'90%'
});

var waypoint = new Waypoint({
  element: document.getElementById('lacing__feelings'),
  handler: function(direction) {
    document.getElementById('lacing__feelings').classList.add('is-reached');
  },
  offset:'50%'
});

var waypoint = new Waypoint({
  element: document.getElementById('lacing__technologies'),
  handler: function(direction) {
    document.getElementById('lacing__technologies').classList.add('is-reached');
  },
  offset:'50%'
});

var waypoint = new Waypoint({
  element: document.getElementById('advantages'),
  handler: function(direction) {
    document.getElementById('advantages').classList.add('is-reached');
  },
  offset:'70%'
});

