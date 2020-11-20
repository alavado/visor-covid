import React from 'react'
import { useQuery } from 'react-query'
import { fetchCasosComunas } from '../../queries/minciencia'
import './App.css'

const App = () => {

  const { isLoading, error, data } = useQuery('casosPorComuna', fetchCasosComunas)

  if (isLoading) {
    return 'cargando...'
  }

  if (error) {
    return 'Error: ' + error.message
  }

  console.log(data)

  return (
    <div className="App">
      En construcción...
    </div>
  )
}

export default App
