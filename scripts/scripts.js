

console.log("It's working")

$(document).ready(function () {
    var map = new GMaps({
        div: '#basic_map',
        lat: 51.5073346,
        lng: -0.1276831,
        width: '500px',
        height: '500px',
        zoom: 12,
        zoomControl: true,
        zoomControlOpt: {
            style: 'SMALL',
            position: 'TOP_LEFT'
        },
        panControl: false
    });
});