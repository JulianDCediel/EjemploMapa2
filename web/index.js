/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// [START maps_layer_heatmap]
// This example requires the Visualization library. Include the libraries=visualization
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=visualization">
let map, heatmap;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: { lat: 4.580815479153679, lng: -74.15596042187357 },
    mapTypeId: "satellite",
  });
  heatmap = new google.maps.visualization.HeatmapLayer({
    data: getPoints(),
    map: map,
  });
  document
    .getElementById("toggle-heatmap")
    .addEventListener("click", toggleHeatmap);
  document
    .getElementById("change-gradient")
    .addEventListener("click", changeGradient);
  document
    .getElementById("change-opacity")
    .addEventListener("click", changeOpacity);
  document
    .getElementById("change-radius")
    .addEventListener("click", changeRadius);
    
    new google.maps.Marker({
        position: { lat: 4.579432424918354, lng: -74.1575806368691 },
        map,
        title: "Universidad"
    });
    
    new google.maps.Marker({
        position: { lat: 4.580815479153679, lng: -74.15596042187357 },
        map,
        title: "Centro Comercial"
    });
}

function toggleHeatmap() {
  heatmap.setMap(heatmap.getMap() ? null : map);
}

function changeGradient() {
  const gradient = [
    "rgba(0, 255, 255, 0)",
    "rgba(0, 255, 255, 1)",
    "rgba(0, 191, 255, 1)",
    "rgba(0, 127, 255, 1)",
    "rgba(0, 63, 255, 1)",
    "rgba(0, 0, 255, 1)",
    "rgba(0, 0, 223, 1)",
    "rgba(0, 0, 191, 1)",
    "rgba(0, 0, 159, 1)",
    "rgba(0, 0, 127, 1)",
    "rgba(63, 0, 91, 1)",
    "rgba(127, 0, 63, 1)",
    "rgba(191, 0, 31, 1)",
    "rgba(255, 0, 0, 1)",
  ];

  heatmap.set("gradient", heatmap.get("gradient") ? null : gradient);
}

function changeRadius() {
  heatmap.set("radius", heatmap.get("radius") ? null : 20);
}

function changeOpacity() {
  heatmap.set("opacity", heatmap.get("opacity") ? null : 0.2);
}

// Heatmap data: 500 Points
function getPoints() {
  return [
    new google.maps.LatLng(4.580815479153679, -74.15596042187357),
    new google.maps.LatLng(4.580784003579743, -74.15607093940207),
    new google.maps.LatLng(4.580759272770673, -74.15615890233292),
    new google.maps.LatLng(4.5807457832380925, -74.1562378434247),
    new google.maps.LatLng(4.58074353498265, -74.15624686526377),
    new google.maps.LatLng(4.580739038471713, -74.15634385003368),
    new google.maps.LatLng(4.580730045449776, -74.15638670376923),
    new google.maps.LatLng(4.580730045449776, -74.15638670376923),
    new google.maps.LatLng(4.580730045449776, -74.15638670376924),
    new google.maps.LatLng(4.580667094292988, -74.1566551034813),
    new google.maps.LatLng(4.580624377430744, -74.15686937217127),
    new google.maps.LatLng(4.580597398360252, -74.15704755349273),
    new google.maps.LatLng(4.580547936728372, -74.15726407763022),
    new google.maps.LatLng(4.580446765197936, -74.15744451441145),
    new google.maps.LatLng(4.580253415120122, -74.15740617159472),
    new google.maps.LatLng(4.580197208692946, -74.15737910607753),
    new google.maps.LatLng(4.579980522211474, -74.15726950065275),
    new google.maps.LatLng(4.579616906488431, -74.1571327079994),
    new google.maps.LatLng(4.579475203257678, -74.15734728470345),
    new google.maps.LatLng(4.579378951990591, -74.15743311538506),
    new google.maps.LatLng(4.579432424918354, -74.1575806368691),
    new google.maps.LatLng(4.579432424918354, -74.1575806368691), 
    new google.maps.LatLng(4.579432424918354, -74.1575806368691),
    new google.maps.LatLng(4.579432424918354, -74.1575806368691)
  ];
}

window.initMap = initMap;
// [END maps_layer_heatmap]