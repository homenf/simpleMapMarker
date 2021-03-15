const markers = new Map();
function initMap() {
    const ele = document.getElementById('mapHolder')
    map = new google.maps.Map(ele, {
        center: {lat: 10, lng: 150.644},
        zoom: 0
    });
};

function addMarker(row) {
    const marker = new google.maps.Marker({
        position: new google.maps.LatLng(row.LATITUDE, row.LONGITUDE),
        map: map
    });
    markers.set(row.AIRPORT, marker);
}

function removeMarker(name) {
    markers.get(name).setMap(null);
    markers.delete(row.AIRPORT);
}

function removeAll() {
    markers.forEach(marker => {
        marker.setMap(null);
    })
    $(".airportBtn").removeClass("selected");
}

const list = [];
for (row of data) {
    let curr = row;
    var $airportBtn = $("<button></button>").text(curr.AIRPORT).addClass("airportBtn").click(function() {
        if ($(this).hasClass("selected")) {
            removeMarker(curr.AIRPORT)
            $(this).removeClass("selected");
        } else {
            addMarker(curr)
            $(this).addClass("selected");
        } 
    });
    list.push($("<ul></ul>").append($airportBtn));
}
$( "#airportList" ).append(list);

$("#removeAll").click(() => {
    removeAll();
})