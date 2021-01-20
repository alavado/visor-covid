import * as React from 'react'
import ReactMapboxGl from 'react-mapbox-gl'
import style from './mapStyle.json'
import CapaComunas from './CapaComunas/CapaComunas'

const Map = ReactMapboxGl({ accessToken: 'pk.eyJ1IjoiYWxlNjE1IiwiYSI6ImNqbDZ5eGt3ZDAxcGszdm83Z3piZ3YwdTcifQ.0dSxbx5BR0aoOsarUYmArQ' })

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