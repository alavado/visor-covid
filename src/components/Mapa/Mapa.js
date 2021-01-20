import * as React from 'react'
import ReactMapboxGl from 'react-mapbox-gl'
import style from './mapStyle.json'
import CapaComunas from './CapaComunas/CapaComunas'

const Map = ReactMapboxGl({ accessToken: 'BrLsDPQFyZaR4hSi1Uy2', apiUrl: 'https://api.maptiler.com' })

const mapStyle = {
  flex: 1,
  height: '100vh',
  width: '100%'
}

const Mapa = () => {
  const center = [-69.26430872363804, -39.204954641160536]

  return (
    <Map
      style={style}
      containerStyle={mapStyle}
      center={center}
    >
      <CapaComunas />
    </Map>
  )
}

export default Mapa