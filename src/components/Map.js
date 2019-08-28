import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import { Polygon } from "react-google-maps";
import { SJPoly } from '../apis/SJPoly'

const Map = withScriptjs(withGoogleMap((props) => {
  const paths = [];
  SJPoly.features.forEach(feature => {
    if (feature.geometry.rings) {

      const poly = [];
      feature.geometry.rings.forEach(ring => {
        ring.forEach(latLng => {
            poly.push({lat: Number(latLng[1]), lng: Number(latLng[0])})
          
        })
      })
      paths.push(poly)
    }
  })

  return (
      <GoogleMap
        defaultZoom={10}
        center={ { lat:  37.274777, lng: -121.901481 } }
        >
        <Polygon
          paths={paths}
          key={1}
          options={{
              fillColor: "#007bff",
              fillOpacity: 0.4,
              strokeColor: "#0030ff",
              strokeOpacity: 1,
              strokeWeight: 1
          }}
        />
      </GoogleMap>
    );
  }
))

export default Map;