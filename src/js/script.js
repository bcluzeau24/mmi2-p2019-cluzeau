import 'waypoints/lib/noframework.waypoints.min.js'

console.log(document.getElementById('retention'));

var waypoint = new Waypoint({
  element: document.getElementById('retention'),
  handler: function(direction) {
    document.getElementById('retention').classList.add('is-reached');
  },
  offset:'80%'
});