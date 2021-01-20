import React, { useState, useMemo } from 'react'
import { useQuery } from 'react-query'
import { fetchCasosComunas } from '../../../queries/minciencia'
import geoJSON from '../../../data/geojson/comunas.json'
import { GeoJSONLayer } from 'react-mapbox-gl'
import './CapaComunas.css'

const CapaComunas = () => {

  const { isLoading, error, data } = useQuery('casosPorComuna', fetchCasosComunas)
  const [posicion, setPosicion] = useState(0)

  const geoJSONConDatos = useMemo(() => {
    if (!data) {
      return {}
    }
    setPosicion(data.fechas.length - 1)
    return {
      ...geoJSON,
      features: geoJSON.features.map(f => ({
        ...f,
        properties: {
          ...f.properties,
          colores: data.comunas
            .find(c => c.codigo === f.properties.codigo)
            ?.casosNuevos.map(c => c > 10 ? 'red' : 'green') ?? []
        }
      }))
    }
  }, [data])

  if (isLoading) {
    return 'cargando...'
  }

  if (error) {
    return 'Error: ' + error.message
  }
console.log(geoJSONConDatos)
  return (
    <>
      <div className="CapaComunas__controles">
        <button onClick={() => setPosicion(posicion - 1)}>-</button>
        <button onClick={() => setPosicion(posicion + 1)}>+</button>
      </div>
      <GeoJSONLayer
        data={geoJSONConDatos}
        fillPaint={{
          "fill-color": ['to-color', ['at', posicion, ['get', 'colores']]]
        }}
      />
      <GeoJSONLayer
        data={geoJSONConDatos}
        linePaint={{
          'line-color': 'rgba(0, 0, 0, 0.5)',
          'line-width': 1
        }}
      />
    </>
  )
}

export default CapaComunas
