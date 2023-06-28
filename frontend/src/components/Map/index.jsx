import { useState } from "react"
import { GoogleMap, useJsApiLoader, useLoadScript } from '@react-google-maps/api';

const Map = () => {
  const {isLoaded} = useLoadScript({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDMXweutcSv74xxg8KIdvpBHouJMdVcctc"
  })
  const [map, setMap] = useState({
    center: {
      lat: -12.0436,
      lng: -76.9714
    },
    zoom: 11
  })


  return (
    <div style={{ height: '500px', width: '100%' }}>
      {
        isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ height: '500px', width: '100%' }}
          center={map.center}
          zoom={13}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>)
        : ''
      }
    </div>
  )
} 

export default Map