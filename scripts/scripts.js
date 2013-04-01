

console.log("It's working")

$(document).ready(function () {
    var map = new GMaps({
        div: '#basic_map',
        lat: 51.5073346,
        lng: -0.1276831,
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
});