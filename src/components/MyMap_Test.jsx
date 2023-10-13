import React, { Component } from 'react';
import {MapContainer, TileLayer, Marker, Popup, GeoJSON} from "react-leaflet";
import { Icon } from 'leaflet';
import "leaflet/dist/leaflet.css";
import mapData from "../data/ANNOTATION.json";

export default function MyMap() {

    const position = [10.02, 105.46];
    console.log(mapData.features);
    console.log(mapData.features[0].geometry.coordinates.slice(0, 2))
    const customIcon = new Icon({
        // iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
        iconUrl: require("./../icons/location-icon.png"),
        iconSize: [38, 38] // size of the icon
    });

    
    return (
        <MapContainer center={position} zoom={5} style={{height:"100vh", width: "100%"}}>
    <TileLayer
    //   attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    //   url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
    {mapData.features.map((marker) => (
        <Marker
        key={marker.properties.EntityHandle}
        position={[marker.geometry.coordinates[1], marker.geometry.coordinates[0]]}
        icon={customIcon}
        />
    ))}

  </MapContainer>
    )
}