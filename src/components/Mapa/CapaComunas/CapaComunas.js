import React, { useState, useMemo } from 'react'
import { useQuery } from 'react-query'
import { fetchCasosComunas } from '../../../queries/minciencia'
import { Source, Layer } from 'react-map-gl'
import geoJSON from '../../../data/geojson/comunas.json'

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

  return (
    <Source id="capa-datos-regiones" type="geojson" data={geoJSONConDatos}>
      <Layer
        id="data2"
        type="fill"
        paint={{
          "fill-color": ['to-color', ['at', posicion, ['get', 'colores']]],
        }}
      />
      <Layer
        id="data2-poligono-stroke"
        type="line"
        paint={{
          'line-color': 'rgba(0, 0, 0, 0.5)',
          'line-width': 1
        }}
      />
    </Source>
  )
}

export default CapaComunas
