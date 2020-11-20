import React, { useState } from 'react'
import mapStyle from './mapStyle.json'
import ReactMapGL from 'react-map-gl'
import CapaComunas from './CapaComunas'

const Mapa = () => {

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100vh',
    latitude: -39.204954641160536,
    longitude: -69.26430872363804,
    zoom: 8
  })

  return (
    <ReactMapGL
      {...viewport}
      mapStyle={mapStyle}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    >
      <CapaComunas />
    </ReactMapGL>
  )
}

export default Mapa