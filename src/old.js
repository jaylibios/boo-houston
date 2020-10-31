import { areaLocations } from './locations.js';

$(document).ready(function(){

    const areas = ["Northside", "Southside", "Central", "Westside", "Eastside"];
    let navigation = document.getElementById("navigation");
    let location = document.getElementById("loc");

    // Populate navigation
    areas.forEach(a => navigation.innerHTML += ` <li><a href="#locations" class='area' id='${a}'>${a}</a></li> `);

    // Click header to reload

    // Show location information on click
    $(".area").click((event) => {
        $("#header").removeClass("vertical-center");
        location.innerHTML = "";
        let area = event.target.innerHTML.toLowerCase();
        let list = areaLocations.filter(al => al.area == area);
        
        list.forEach(elem => {
            location.innerHTML += ` 
            <p class="name">${elem.name}</p>
            <p class="address">${elem.address1}<br>${elem.address2}</p>
            <p class="website"><a href="${elem.url}" target="_blank">Go to Website</a></p> `;
        });
    });

});