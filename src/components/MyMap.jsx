import React from 'react';
import {MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';

export default function MyMap(props) {

    const position = props.pos;

   

    function SetViewOnClick({ coords }) {
        const map = useMap();
        map.setView(coords, map.getZoom());
      
        return null;
      }

    
    return (
        <MapContainer center={position} zoom={15} style={{height:"100vh", width: "100%"}}>
    <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
    <SetViewOnClick coords={props.pos} />
    {/* <GeoJSON
          data={mapData}
        /> */}
  </MapContainer>
    )
}