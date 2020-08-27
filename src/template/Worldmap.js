import React, { Component } from 'react'
import { GoogleMap, withGoogleMap, Polyline } from 'react-google-maps'

class WorldMap extends Component {

    render() {


        const GoogleMapWrapper = withGoogleMap(props => (
            <GoogleMap
                defaultZoom={3}
                defaultCenter={{ lat: 32.4279, lng: 53.6880 }}
            />

        ))

        return (
            <div style={{ height: '100%', width: '100%' }}  >
                <GoogleMapWrapper
                    containerElement={<div style={{ height: '100%', width: '100%' }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
                <Polyline visible={false} />
            </div>
        )

    }
}

export default WorldMap;