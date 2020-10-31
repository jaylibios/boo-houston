import { areaLocations } from './locations.js';

$(document).ready(() => {
    let locations = document.getElementById("locations");
    
    let all = document.getElementById("pills-all");
    let north = document.getElementById("pills-north");
    let east = document.getElementById("pills-east");
    let central = document.getElementById("pills-central");
    let south = document.getElementById("pills-south");
    let west = document.getElementById("pills-west");

    // populate locations on load
    areaLocations.forEach(a => all.innerHTML += `
    <p class="name"><a href="${a.url}" target="_blank">${a.name}</a></p><br>
    <p>${a.address1}<br>${a.address2}</p>`);
    
    // north locations
    areaLocations.filter(a => a.area == "north").forEach(loc => north.innerHTML += `
    <p class="name"><a href="${loc.url}" target="_blank">${loc.name}</a></p><br>
    <p>${loc.address1}<br>${loc.address2}</p>`);

    // east
    areaLocations.filter(a => a.area == "east").forEach(loc => east.innerHTML += `
    <p class="name"><a href="${loc.url}" target="_blank">${loc.name}</a></p><br>
    <p>${loc.address1}<br>${loc.address2}</p>`);

    // central
    areaLocations.filter(a => a.area == "central").forEach(loc => central.innerHTML += `
    <p class="name"><a href="${loc.url}" target="_blank">${loc.name}</a></p><br>
    <p>${loc.address1}<br>${loc.address2}</p>`);

    // south
    areaLocations.filter(a => a.area == "south").forEach(loc => south.innerHTML += `
    <p class="name"><a href="${loc.url}" target="_blank">${loc.name}</a></p><br>
    <p>${loc.address1}<br>${loc.address2}</p>`);

    // west
    areaLocations.filter(a => a.area == "west").forEach(loc => west.innerHTML += `
    <p class="name"><a href="${loc.url}" target="_blank">${loc.name}</a></p><br>
    <p>${loc.address1}<br>${loc.address2}</p>`);


});