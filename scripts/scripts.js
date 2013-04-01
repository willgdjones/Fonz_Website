

console.log("It's working")

$(document).ready(function () {
    var norwich = new GMaps({
        div: '#basic_map',
        lat: 52.6134701,
        lng: 1.2706580000000258,
        width: '600px',
        height: '300px',
        zoom: 15,
        zoomControl: true,
        panControl: true,
        zoomControlOpt: {
            style: 'SMALL',
            position: 'TOP_LEFT'
        },
        click: function(e) {
            alert('When you click you get this alert!');
          },
        dragend: function(e) {
            alert('When you stop dragging you get this alert!');
          }


    });

    norwich.addMarker({
      lat: 52.6134701,
      lng: 1.2706580000000258,
      title: 'Norwich home',
      click: function(e) {
        alert('This is my house!');
      }
    });
});