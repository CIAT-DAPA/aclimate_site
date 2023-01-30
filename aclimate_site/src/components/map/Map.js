import React from 'react';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';


function Map() {

    return (
        <>
            <MapContainer center={[0,0]} scrollWheelZoom={false} style={{height: '600px', width: '600px'}}>
                <TileLayer
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
            </MapContainer>

        </>
    );
}

export default Map;