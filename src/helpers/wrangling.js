import csv from 'csvtojson'

export const procesarCasosComunas = async data => {
  const datosOriginales = await csv().fromString(data)
  const fechas = Object.keys(datosOriginales[0]).filter(k => /[0-9]{4}-[0-9]{2}-[0-9]{2}/.test(k))
  const comunas = datosOriginales.map(comuna => ({
    codigo: Number(comuna['Codigo comuna']),
    codigoRegion: Number(comuna['Codigo region']),
    nombre: comuna['Comuna'],
    casos: fechas.map(f => comuna[f])
  }))
  return { comunas, fechas }
}