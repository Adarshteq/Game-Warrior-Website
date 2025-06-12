function initialize() {
    // Map settings matching your Google Maps options
    var map = L.map('map-canvas', {
        center: [51.489500, -0.096777], // Same coordinates
        zoom: 16,
        scrollWheelZoom: false, // Matches scrollwheel: false
        zoomControl: false,     // Matches zoomControl: false
        dragging: true
    });

    // Add OpenStreetMap tiles (similar to ROADMAP)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add marker (customize icon if needed)
    var marker = L.marker([51.489500, -0.096777]).addTo(map);

    // Add popup (equivalent to infowindow)
    marker.bindPopup("<b>Your Location</b><br>Optional address details").openPopup();
}

// Initialize when DOM loads
document.addEventListener('DOMContentLoaded', initialize);