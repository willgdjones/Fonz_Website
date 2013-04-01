

$(document).ready(function () {
    //Norwich map
    var norwich = new GMaps({
        div: '#Norwich_map',
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

    //London map

    var london = new GMaps({
        div: '#London_map',
        lat: 51.5452579,
        lng: -0.13459320000004027,
        width: '600px',
        height: '300px',
        zoom: 15,
        zoomControl: true,
        panControl: true,
        zoomControlOpt: {
            style: 'SMALL',
            position: 'TOP_LEFT'
        },
    });

    london.addMarker({
        lat: 51.5452579,
        lng: -0.13459320000004027,
        title: 'Norwich home',
        click: function(e) {
        alert('This is my house!');
      }
    });

});